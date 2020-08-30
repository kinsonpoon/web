import React, {Component} from 'react';
import {Text, View, TextInput, StyleSheet, Button} from 'react-native';
import MtrInput from './components/mtrInput.js'
import SelectLine from './components/selectLine.js'
import MtrStation from './components/mtrStation.js';

export default class Mtr extends Component {
    render() {
        return (
            <view>
                <SelectLine/>
                <Button
                    title="Back to home"
                    onPress={() =>
                        this.props.navigation.navigate('Home')
                    }
                />
            </view>
        );
    }
}
