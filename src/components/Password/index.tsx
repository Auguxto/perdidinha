import React, {useContext, useReducer} from 'react';
import {StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import useHeightLayout from '@hooks/useHeightLayout';

import * as S from './styles.password';

import PasswordIcon from '@components/PasswordIcon';
import {UserContext} from '@contexts/UserContext';

const Password = ({
  id,
  name,
  enter_value,
  password_value,
  icon,
  background,
  favorite,
  second_value,
}: Password) => {
  const [{height}, onLayout] = useHeightLayout(10);

  const [viewPassword, toggleViewPassword] = useReducer(s => !s, false);

  const {handleRemovePassword, handleFavoritePassword} =
    useContext(UserContext);

  return (
    <S.PasswordContainer style={styles.shadow} animate={{height}}>
      <S.AnimatedContainer onLayout={onLayout} open={viewPassword}>
        <S.Header>
          <PasswordIcon iconName={icon} backgroundColor={background} />
          <S.PasswordInfos>
            <S.Name>{name}</S.Name>
            <S.EnterValue>{enter_value}</S.EnterValue>
            {second_value && <S.SecondValue>{second_value}</S.SecondValue>}
          </S.PasswordInfos>
          <S.Buttons>
            <S.Favorite
              onPress={() => {
                handleFavoritePassword(id);
              }}>
              <Icon
                name="star"
                size={26}
                color={favorite ? '#F8EA75' : '#898989'}
              />
            </S.Favorite>
            <S.ToggleView onPress={toggleViewPassword}>
              <Icon
                name={viewPassword ? 'chevron-up' : 'chevron-down'}
                size={26}
                color="#898989"
              />
            </S.ToggleView>
          </S.Buttons>
        </S.Header>
        <S.Bottom>
          <S.PasswordValue>{password_value}</S.PasswordValue>
          <S.Delete
            onPress={() => {
              handleRemovePassword(id);
            }}>
            <Icon name="trash-2" size={26} color="#898989" />
          </S.Delete>
        </S.Bottom>
      </S.AnimatedContainer>
    </S.PasswordContainer>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
});

export default Password;
