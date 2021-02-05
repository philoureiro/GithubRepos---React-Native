import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';
import Dashboard from '../../pages/Dashboard';
import Followers from '../../pages/Followers/index';
import Following from '../../pages/Following';
import Repos from '../../pages/Repositories';

const Tab = createBottomTabNavigator();

const TabNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({size}) => {
          let iconName;

          switch (route.name) {
            case 'Home':
              iconName = 'home';
              break;
            case 'Repos':
              iconName = 'github';
              break;
            case 'Seguidores':
              iconName = 'users';
              break;
            case 'Seguindo':
              iconName = 'users';
              break;
            default:
              iconName = 'circle';
              break;
          }

          return <Icon name={iconName} size={size} />;
        },
      })}
      tabBarOptions={{
        activeBackgroundColor: '#fff',
        activeTintColor: '#000000',
        inactiveTintColor: '#A5A5A5',
        showLabel: true,
        labelStyle: {
          fontSize: 14,
        },
        labelPosition: 'below-icon',
        style: {
          padding: 6,
        },
      }}>
      <Tab.Screen name="Home" component={Dashboard} />
      <Tab.Screen name="Repos" component={Repos} />
      <Tab.Screen name="Seguidores" component={Followers} />
      <Tab.Screen name="Seguindo" component={Following} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
