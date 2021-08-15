

import React from 'react';
import {
    View,
    Image,
} from 'react-native';
import {
    createBottomTabNavigator, 
    BottomTobBar
} from '@react-navigation/bottom-tabs';

import {Home, Feedback, Settings} from '../screens';

import {COLORS, icons } from '../constants';

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator
        tabBarOptions={
            {
                showLabel:false,
                
            }
        }
        screenOptions={{
            headerShown: false
          }}>
            <Tab.Screen
            name="Home"
            component={Home}
            options={
                {
                    tabBarIcon: ({focused}) => (
                        <Image
                        source={icons.play}
                        resizeMode="contain"
                        style={{
                            width: 25,
                            height: 25,
                            tintColor: focused ? '' : COLORS.secondary,
                            borderColor: 'green'
                        }} />       
                    )
                }
            }
            >

            </Tab.Screen>
            <Tab.Screen
            name="Settings"
            component={Settings}
            options={
                {
                    tabBarIcon: ({focused}) => (
                        <Image
                        source={icons.settings}
                        resizeMode="contain"
                        style={{
                            width: 25,
                            height: 25,
                            tintColor: focused ? '' : COLORS.secondary
                        }} />       
                    )
                }
            }
            ></Tab.Screen>
            <Tab.Screen
            name="Feedback"
            component={Feedback}
            options={
                {
                    tabBarIcon: ({focused}) => (
                        <Image
                        source={icons.feedback}
                        resizeMode="contain"
                        style={{
                            width: 25,
                            height: 25,
                            tintColor: focused ? '' : COLORS.secondary
                        }} />       
                    )
                }
            }
            >

            </Tab.Screen>
        </Tab.Navigator>
    )
}

export default Tabs
