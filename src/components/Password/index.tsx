import React, {ComponentProps, useReducer, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {format} from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import {
  PasswordContainer,
  AnimtedContainer,
  Header,
  PasswordInfos,
  Name,
  EnterValue,
  PasswordDate,
  Buttons,
  Favorite,
  ToggleView,
  Bottom,
  PasswordValue,
  Delete,
} from './styles.password';

import PasswordIcon from '@components/PasswordIcon';

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
  name,
  enter_value,
  password_value,
  icon,
  background,
  favorite,
  updated_at,
}: Password) => {
  const [{height}, onLayout] = useLayout();

  const [viewPassword, toggleViewPassword] = useReducer(s => !s, false);

  const date = format(updated_at, "'Editado em:' dd/MM/yyyy HH:mm", {
    locale: ptBR,
  });

  return (
    <PasswordContainer style={styles.shadow} animate={{height}}>
      <AnimtedContainer onLayout={onLayout} open={viewPassword}>
        <Header>
          <PasswordIcon iconName={icon} backgroundColor={background} />
          <PasswordInfos>
            <Name>{name}</Name>
            <EnterValue>{enter_value}</EnterValue>
            <PasswordDate>{date}</PasswordDate>
          </PasswordInfos>
          <Buttons>
            <Favorite>
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
          <Delete>
            <Icon name="trash-2" size={26} color="#898989" />
          </Delete>
        </Bottom>
      </AnimtedContainer>
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
