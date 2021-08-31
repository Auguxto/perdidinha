import 'react-native-gesture-handler';
import 'react-native-get-random-values';
import React from 'react';
import {Dimensions} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';

import UserProvider from '@contexts/UserContext';

import Loading from '@screens/Loading';
import Enter from '@screens/Enter';
import Home from '@screens/Home';
import AddPassword from '@screens/AddPassword';

import DrawerMenu from '@components/DrawerMenu';

const Drawer = createDrawerNavigator();

const App = () => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  return (
    <NavigationContainer>
      <UserProvider>
        <Drawer.Navigator
          screenOptions={{
            headerShown: false,
            gestureEnabled: false,
            drawerStyle: {
              width: Math.round((windowWidth * 90) / 100),
              height: windowHeight,
              borderTopRightRadius: 20,
              borderBottomRightRadius: 20,
            },
          }}
          drawerContent={props => (
            <DrawerMenu
              state={props.state}
              descriptors={props.descriptors}
              navigation={props.navigation}
            />
          )}>
          <Drawer.Screen name="Loading" component={Loading} />
          <Drawer.Screen name="Enter" component={Enter} />
          <Drawer.Screen name="Home" component={Home} />
          <Drawer.Screen name="AddPassword" component={AddPassword} />
        </Drawer.Navigator>
      </UserProvider>
    </NavigationContainer>
  );
};

export default App;
