import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';

// Import screens
import HomeScreen from './screens/HomeScreen';
import NFLScreen from './screens/NFLScreen';
import NBAScreen from './screens/NBAScreen';
import AIScreen from './screens/AIScreen';
import SettingsScreen from './screens/SettingsScreen';

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
