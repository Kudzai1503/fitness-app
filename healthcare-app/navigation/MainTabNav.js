import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons,FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';

import HomeScreen from '../screens/HomeScreen'
import ProfileScreen from '../screens/ProfileScreen'
import HealthScreen from '../screens/HealthScreen';
import CheckupScreen from '../screens/CheckupScreen';




const Tab = createBottomTabNavigator();

const MainTabNav = () => {
    return (
        <Tab.Navigator
          initialRouteName="Home"
         
        >
          <Tab.Screen name="Home" component={HomeScreen}
           options={{  tabBarIcon: ({ color, focused }) => (
            <Ionicons name="home" size={28} color={color} />
        ),
    }} />
          <Tab.Screen name="Health" component={HealthScreen}
           options={{  tabBarIcon: ({ color, focused }) => (
            <FontAwesome name="heartbeat" size={28} color={color} />
        ),
    }} />
          <Tab.Screen name="Diagonise" component={CheckupScreen}
           options={{  tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons name="head-check" size={30} color={color} />
        ),
    }} />
     <Tab.Screen name="Profile" component={ProfileScreen}
           options={{  tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons name="face-profile" size={30} color={color} />
        ),
    }} />
        </Tab.Navigator>
    )
}

export default MainTabNav

const styles = StyleSheet.create({})
