import React, {Component} from 'react';
import {Text, View, TextInput, StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './Home';
import MtrScreen from './Mtr';


const Stack = createStackNavigator();

export default class App extends Component {
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        name="Home"
                        component={HomeScreen}
                    />
                    <Stack.Screen
                        name="Mtr"
                        component={MtrScreen}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}








