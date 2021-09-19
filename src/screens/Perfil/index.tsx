import React, {useContext} from 'react';
import {StyleSheet} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';

import {saveAvatar} from '@lib/storage';

import Header from '@components/Header';

import {UserContext} from '@contexts/UserContext';

import * as S from './styles.perfil';

const Perfil = ({navigation}) => {
  const {user, load} = useContext(UserContext);

  async function getPicture() {
    ImagePicker.openCamera({
      width: 500,
      height: 500,
      cropping: true,
      mediaType: 'photo',
    }).then(image => {
      saveAvatar(image.path);
      user.avatar = image.path;
      load(user);
    });
  }

  return (
    <S.PerfilContainer>
      <Header navigation={navigation} />
      <S.AvatarWrapper>
        {user ? (
          user.avatar ? (
            <S.AvatarImageWrapper style={styles.shadow}>
              <S.AvatarImage source={{uri: user.avatar}} />
            </S.AvatarImageWrapper>
          ) : (
            <S.AvatarSvg style={styles.shadow} />
          )
        ) : (
          <S.AvatarSvg style={styles.shadow} />
        )}
      </S.AvatarWrapper>
      <S.Button onPress={getPicture}>
        <S.ButtonText>Alterar Avatar</S.ButtonText>
      </S.Button>
    </S.PerfilContainer>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.4,
    shadowRadius: 20.84,

    elevation: 5,
  },
});

export default Perfil;
