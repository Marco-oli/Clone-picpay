import React, {useEffect} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import PayButton from './components/PayButton';

// Icons
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import HomeScreen from './screens/Home';
import WalletScreen from './screens/Wallet';
import PayScreen from './screens/Pay';
import Notifications from './screens/Notifications';
import Settings from './screens/Setting';

// SplashScreen
import SplashScreen from 'react-native-splash-screen';

const Tab = createBottomTabNavigator();

const Routes = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 5000);
  }, []);
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({route, navigation}) => ({
          tabBarIcon: ({color, size, focused}) => {
            let iconName;
            let IconComponent = Ionicons;
            if (route.name === 'Home') {
              iconName = 'home-outline';
            } else if (route.name === 'Wallet') {
              iconName = 'card-outline';
            } else if (route.name === 'Pay') {
              return (
                <PayButton
                  focused={focused}
                  onPress={() => navigation.navigate('Pay')}
                />
              );
            } else if (route.name === 'Notifications') {
              iconName = 'notifications-outline';
            } else if (route.name === 'Settings') {
              iconName = 'settings-outline';
            }
            return <IconComponent name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          style: {
            backgroundColor: '#131418',
            borderTopColor: 'rgba(255, 255, 255, 0.2)',
          },
          activeTintColor: '#fff',
          inactiveTintColor: '#92929c',
        }}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Ínicio'}}
        />
        <Tab.Screen
          name="Wallet"
          component={WalletScreen}
          options={{title: 'Carteira'}}
        />
        <Tab.Screen name="Pay" component={PayScreen} options={{title: ''}} />
        <Tab.Screen
          name="Notifications"
          component={Notifications}
          options={{title: 'Notificações'}}
        />
        <Tab.Screen
          name="Settings"
          component={Settings}
          options={{title: 'Ajustes'}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
