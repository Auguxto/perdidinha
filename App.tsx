import 'react-native-get-random-values';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import UserProvider from '@contexts/UserContext';

import Loading from '@screens/Loading';
import Enter from '@screens/Enter';
import Home from '@screens/Home';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <UserProvider>
        <Stack.Navigator
          screenOptions={{headerShown: false, orientation: 'portrait'}}>
          <Stack.Screen name="Loading" component={Loading} />
          <Stack.Screen name="Enter" component={Enter} />
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </UserProvider>
    </NavigationContainer>
  );
};

export default App;
