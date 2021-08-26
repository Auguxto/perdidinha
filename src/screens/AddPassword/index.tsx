import React from 'react';
import {Text} from 'react-native';

import MenuToggler from '@components/MenuToggler';

import {AddPasswordContainer} from './styles.manager';

const AddPassword = ({navigation}) => {
  return (
    <AddPasswordContainer>
      <MenuToggler onPress={() => navigation.toggleDrawer()} />
      <Text>AddPassword</Text>
    </AddPasswordContainer>
  );
};

export default AddPassword;
