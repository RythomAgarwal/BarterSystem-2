import React from 'react'
import {Image} from 'react-native'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import HomeScreen from '../screens/HomeScreen'
import ExchangeScreen from '../screens/ExchangeScreen'
export const AppTabNavigator = createBottomTabNavigator({
    ExchangeScreen:{screen:ExchangeScreen,navigationOptions:{tabBarIcon:<Image source={require()} style={{width:20,height:20}}/>,tabBarlabel:"Exchange"}},
    MainScreen:{screen:HomeScreen,navigationOptions:{tabBarIcon:<Image source={require()} style={{width:20,height:20}}/>,tabBarlabel:"Home"}
}
})