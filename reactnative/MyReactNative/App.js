import React, {Component} from 'react';
import {Text, View, TextInput, StyleSheet} from 'react-native';
import MtrInput from './components/mtrInput.js'
import SelectLine from './components/selectLine.js'
import MtrStation from './components/mtrStation.js';

export default class App extends Component {
    render() {
        return (
            <view>
                <SelectLine/>
                <MtrInput/>
            </view>
        );
    }
}








