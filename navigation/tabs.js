

import React from 'react';
import {
    View,
    Image,
    AccessibilityInfo,
    Touchable,
} from 'react-native';
import {
    createBottomTabNavigator, 
    BottomTabBar
} from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';


import Svg, {Path} from 'react-native-svg'

import {Home, Feedback, Settings} from '../screens';

import {COLORS, icons } from '../constants';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Tab = createBottomTabNavigator();

const TabBarCustomButton = ({accessibilityState, children, onPress}) => {
    let isSelected = accessibilityState.selected;

    if (isSelected){
        return (
            <View style={{flex:1, alignItems: 'center'}}>
                <View style={{flexDirection: 'row', position: "absolute"
                , top: 0}}>
                    <View style={{flex:1, backgroundColor: COLORS.white}}></View>
                    <Svg
                        width={75}
                        height={61}
                        viewBox="0 0 75 61"
                        >
                            <Path d="" fill={COLORS.primary}></Path>
                        </Svg>
                </View>

                <TouchableOpacity
                style={{
                    top: -22.5,
                    justifyContent: 'center',
                    alignItems: 'center',
                    width:50,
                    height: 50,
                    borderRadius: 25,
                    backgroundColor: COLORS.lightOrange,
                }}
                onPress={onPress}>
                    {children}
                </TouchableOpacity>
            </View>
        );
    }else{
        return (
            <View style={{flex:1, alignItems: 'center'}}>
            <TouchableOpacity
            style={{
                justifyContent: 'center',
                alignItems: 'center',
                width:10,
                height: 50,
                borderRadius: 25,
                backgroundColor: COLORS.white
            }}
            activeOpacity={1}
            onPress={onPress}>
                {children}
            </TouchableOpacity>
            </View>
        );
    }
}

const CustomTabBar = (props) => {
    return (
        <View>
            <View style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: 30,
                backgroundColor: COLORS.white
            }}>

            </View>
        <BottomTobBar {...props.props} /> 
        </View>

    )
}

const Tabs = () => {
    return (
        <Tab.Navigator
        tabBarOptions={
            {
                showLabel:false,
                style:{
                    borderTopWidth: 0,
                    backgroundColor: "transparent",
                    elevation: 0
                },
                
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
                    ),
                    tabBarButton: (props) => {
                        return <TabBarCustomButton {...props}></TabBarCustomButton>
                    },
                    
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
                    ),
                    tabBarButton: (props) => {
                        return <TabBarCustomButton {...props}></TabBarCustomButton>
                    },
                    headerShown: true,
                    headerTintColor: 'red'

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
                    ),
                    tabBarButton: (props) => {
                        return <TabBarCustomButton {...props}></TabBarCustomButton>
                    },
                    headerShown: true,
                    headerTintColor: COLORS.darkYellow
                }
            }
            >

            </Tab.Screen>
        </Tab.Navigator>
    )
}

export default Tabs
