import React from 'react';
import {NavigationProp} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import PageOne from '../PageOne/PageOne';
import PageTwo from '../PageTwo/PageTwo';
import {Button} from 'react-native';

export interface TabProps {
  navigation: NavigationProp<any, any>;
}

const TabPage = (props: TabProps) => {
  const onPressHome = () => props.navigation.navigate('Home');
  const Tab = createBottomTabNavigator();

  return (
    <>
      <Button title="Go to Home" onPress={onPressHome} />
      <Tab.Navigator>
        <Tab.Screen name="Page One" component={PageOne} />
        <Tab.Screen name="Page Two" component={PageTwo} />
      </Tab.Navigator>
    </>
  );
};
export default TabPage;
