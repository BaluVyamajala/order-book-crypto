import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../Home/Home';
import TabPage from '../TabPage/TabPage';

const Stack = createNativeStackNavigator();

const Main = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Tab" component={TabPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default Main;
