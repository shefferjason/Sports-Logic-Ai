import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';

// Import Screens
import HomeScreen from './Screens/HomeScreen';
import NFLScreen from './Screens/NFLScreen';
import NBAScreen from './Screens/NBAScreen';
import AIScreen from './Screens/AIScreen';
import SettingsScreen from './Screens/SettingsScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: '#007AFF',
          tabBarInactiveTintColor: 'gray',
          headerStyle: {
            backgroundColor: '#007AFF',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Tab.Screen 
          name="Home" 
          component={HomeScreen}
          options={{ title: 'Sports Logic AI' }}
        />
        <Tab.Screen 
          name="NFL" 
          component={NFLScreen}
          options={{ title: 'NFL Predictions' }}
        />
        <Tab.Screen 
          name="NBA" 
          component={NBAScreen}
          options={{ title: 'NBA Predictions' }}
        />
        <Tab.Screen 
          name="AI" 
          component={AIScreen}
          options={{ title: 'Ask AI' }}
        />
        <Tab.Screen 
          name="Settings" 
          component={SettingsScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
