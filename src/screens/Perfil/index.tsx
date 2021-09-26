import React, {useContext, useState} from 'react';
import {StyleSheet} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';

import * as S from './styles.perfil';

import {saveAvatar} from '@lib/storage';

import Header from '@components/Header';
import CheckBox from '@components/CheckBox';

import {UserContext} from '@contexts/UserContext';

const Perfil = ({navigation}) => {
  const {user, load, handleSetUser} = useContext(UserContext);

  const [checked, setChecked] = useState(user.biometry);
  const [name, setName] = useState<string>();
  const [avatar, setAvatar] = useState<string>(user.avatar);

  async function saveData() {
    handleSetUser(
      name ? name : user.name,
      checked,
      avatar ? avatar : undefined,
    );
    setName(null);
  }

  async function getPicture() {
    ImagePicker.openCamera({
      width: 500,
      height: 500,
      cropping: true,
      mediaType: 'photo',
    }).then(image => {
      saveAvatar(image.path);
      user.avatar = image.path;
      setAvatar(image.path);
      load(user);
    });
  }

  return (
    <S.PerfilContainer>
      <Header navigation={navigation} />
      <S.AvatarWrapper onPress={getPicture}>
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
      <S.Inputs>
        <S.Input
          style={styles.shadow2}
          value={name}
          onChangeText={text => setName(text)}
          placeholder={user.name}
        />
        <S.CheckBox>
          <CheckBox
            onPress={() => setChecked(!checked)}
            checked={checked}
            width={30}
            height={30}
            color="#BE5DEB"
          />
          <S.CheckBoxText>user biometria?</S.CheckBoxText>
        </S.CheckBox>
      </S.Inputs>
      <S.Button onPress={saveData}>
        <S.ButtonText>Salvar</S.ButtonText>
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
  shadow2: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 5,
  },
});

export default Perfil;
