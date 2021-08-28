import React, {useState, useRef, useEffect} from 'react';
import Icon from 'react-native-vector-icons/Feather';
import FontIcon from 'react-native-vector-icons/FontAwesome';
import {StyleSheet, Animated} from 'react-native';

import {
  PasswordIcon,
  PasswordContainer,
  PasswordName,
  PasswordValue,
  PasswordViewToggler,
  Texts,
  PasswordLogin,
  Header,
  Bottom,
} from './styles.password';
import {Easing} from 'react-native-reanimated';

const Password = () => {
  const [viewPassword, setViewPassword] = useState(false);

  function toggleViewPassword() {
    setViewPassword(!viewPassword);
  }

  useEffect(() => {
    if (viewPassword) {
      showPassword();
      showValue();
    } else {
      hidePassword();
      hideValue();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [viewPassword]);

  const PasswordAnim = useRef(new Animated.Value(100)).current;
  const PasswordValueAnim = useRef(new Animated.Value(0)).current;

  const showPassword = () => {
    Animated.timing(PasswordAnim, {
      toValue: 150,
      duration: 150,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start();
  };

  const hidePassword = () => {
    Animated.timing(PasswordAnim, {
      toValue: 100,
      duration: 150,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start();
  };

  const showValue = () => {
    Animated.timing(PasswordValueAnim, {
      toValue: 1,
      duration: 500,
      easing: Easing.bounce,
      useNativeDriver: true,
    }).start();
  };

  const hideValue = () => {
    Animated.timing(PasswordValueAnim, {
      toValue: 0,
      duration: 500,
      easing: Easing.bounce,
      useNativeDriver: true,
    }).start();
  };

  return (
    <PasswordContainer style={[styles.shadow, {height: PasswordAnim}]}>
      <Header>
        <PasswordIcon>
          <FontIcon name="facebook" size={30} color="#FFFFFF" />
        </PasswordIcon>
        <Texts>
          <PasswordName>Google</PasswordName>
          <PasswordLogin>victoraugusferreira@gmail.com</PasswordLogin>
        </Texts>
        <PasswordViewToggler
          onPress={() => {
            toggleViewPassword();
          }}>
          <Icon
            name={viewPassword ? 'chevron-up' : 'chevron-down'}
            color="#191716"
            size={30}
          />
        </PasswordViewToggler>
      </Header>
      <Bottom>
        {viewPassword && (
          <PasswordValue style={{opacity: PasswordValueAnim}}>
            923yr2hg3rp
          </PasswordValue>
        )}
      </Bottom>
    </PasswordContainer>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export default Password;
