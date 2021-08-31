import React, {useState, useRef, useEffect} from 'react';
import Icon from 'react-native-vector-icons/Feather';
import {Animated} from 'react-native';
import {Easing} from 'react-native-reanimated';

import {
  PasswordContainer,
  PasswordName,
  PasswordValue,
  PasswordViewToggler,
  Texts,
  PasswordLogin,
  Header,
  Bottom,
  DeleteButton,
  BottomContainer,
} from './styles.password';

import PasswordIcon from '@components/PasswordIcon';

interface IPassword {
  name: string;
  username?: string;
  password: string;
  iconName: IconName;
  backgroundColor: string;
}

const Password = ({
  name,
  username,
  password,
  iconName,
  backgroundColor,
}: IPassword) => {
  const [viewPassword, setViewPassword] = useState(false);

  function toggleViewPassword() {
    setViewPassword(!viewPassword);
  }

  useEffect(() => {
    if (viewPassword) {
      showPassword();
    } else {
      hidePassword();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [viewPassword]);

  const PasswordAnim = useRef(new Animated.Value(100)).current;
  const PasswordValueAnim = useRef(new Animated.Value(0)).current;

  const showPassword = () => {
    Animated.timing(PasswordAnim, {
      toValue: 150,
      duration: 150,
      easing: Easing.circle,
      useNativeDriver: false,
    }).start();
    Animated.timing(PasswordValueAnim, {
      toValue: 1,
      duration: 500,
      easing: Easing.bounce,
      useNativeDriver: true,
    }).start();
  };

  const hidePassword = () => {
    Animated.timing(PasswordAnim, {
      toValue: 100,
      duration: 150,
      easing: Easing.circle,
      useNativeDriver: false,
    }).start();
    Animated.timing(PasswordValueAnim, {
      toValue: 0,
      duration: 500,
      easing: Easing.bounce,
      useNativeDriver: true,
    }).start();
  };

  return (
    <PasswordContainer style={[{height: PasswordAnim}]}>
      <Header>
        <PasswordIcon iconName={iconName} backgroundColor={backgroundColor} />
        <Texts>
          <PasswordName>{name}</PasswordName>
          {username && <PasswordLogin>{username}</PasswordLogin>}
        </Texts>
        <PasswordViewToggler
          onPress={() => {
            toggleViewPassword();
          }}>
          <Icon
            name={viewPassword ? 'chevron-up' : 'chevron-down'}
            color="#FFFFFF"
            size={30}
          />
        </PasswordViewToggler>
      </Header>
      <BottomContainer>
        {viewPassword && (
          <Bottom>
            <PasswordValue style={{opacity: PasswordValueAnim}}>
              {password}
            </PasswordValue>
            <DeleteButton>
              <Icon name="trash-2" color="#FFFFFF" size={25} />
            </DeleteButton>
          </Bottom>
        )}
      </BottomContainer>
    </PasswordContainer>
  );
};

export default Password;
