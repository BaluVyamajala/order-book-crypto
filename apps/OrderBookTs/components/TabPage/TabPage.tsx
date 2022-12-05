import React from 'react';
import {NavigationProp} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import PageOne from '../PageOne/PageOne';
import PageTwo from '../PageTwo/PageTwo';

export interface TabProps {
  navigation: NavigationProp<any, any>;
}

const TabPage = () => {
  const Tab = createBottomTabNavigator();
  return (
    <>
      <Tab.Navigator>
        <Tab.Screen name="Page One" component={PageOne} />
        <Tab.Screen name="Page Two" component={PageTwo} />
      </Tab.Navigator>
    </>
  );
};
export default TabPage;
