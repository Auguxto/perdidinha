import React, {ComponentProps, useContext, useReducer, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import {
  PasswordContainer,
  AnimatedContainer,
  Header,
  PasswordInfos,
  Name,
  EnterValue,
  SecondValue,
  Buttons,
  Favorite,
  ToggleView,
  Bottom,
  PasswordValue,
  Delete,
} from './styles.password';

import PasswordIcon from '@components/PasswordIcon';
import {UserContext} from '@contexts/UserContext';

const useLayout = () => {
  const [layout, setLayout] = useState({
    height: 0,
  });
  const onLayout: ComponentProps<typeof View>['onLayout'] = ({nativeEvent}) => {
    setLayout(nativeEvent.layout);
  };

  return [layout, onLayout] as const;
};

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
  const [{height}, onLayout] = useLayout();

  const [viewPassword, toggleViewPassword] = useReducer(s => !s, false);

  const {handleRemovePassword, handleFavoritePassword} =
    useContext(UserContext);

  return (
    <PasswordContainer style={styles.shadow} animate={{height}}>
      <AnimatedContainer onLayout={onLayout} open={viewPassword}>
        <Header>
          <PasswordIcon iconName={icon} backgroundColor={background} />
          <PasswordInfos>
            <Name>{name}</Name>
            <EnterValue>{enter_value}</EnterValue>
            {second_value && <SecondValue>{second_value}</SecondValue>}
          </PasswordInfos>
          <Buttons>
            <Favorite
              onPress={() => {
                handleFavoritePassword(id);
              }}>
              <Icon
                name="star"
                size={26}
                color={favorite ? '#F8EA75' : '#898989'}
              />
            </Favorite>
            <ToggleView onPress={toggleViewPassword}>
              <Icon
                name={viewPassword ? 'chevron-up' : 'chevron-down'}
                size={26}
                color="#898989"
              />
            </ToggleView>
          </Buttons>
        </Header>
        <Bottom>
          <PasswordValue>{password_value}</PasswordValue>
          <Delete
            onPress={() => {
              handleRemovePassword(id);
            }}>
            <Icon name="trash-2" size={26} color="#898989" />
          </Delete>
        </Bottom>
      </AnimatedContainer>
    </PasswordContainer>
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
