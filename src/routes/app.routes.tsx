import React from 'react';
import Login from '../pages/Login';
import {createStackNavigator} from '@react-navigation/stack';
import TabNavigator from '../components/TabNavigator';
import SavePerson from '../pages/SavePerson';

const Stack = createStackNavigator();
const AppRoutes: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="TabNavigator"
        component={TabNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SavePerson"
        component={SavePerson}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default AppRoutes;
