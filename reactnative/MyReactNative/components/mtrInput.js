import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'

class MtrInput extends Component {
    state = {
        startPoint: '',
        endPoint: ''
    }
    handleStart = (text) => {
        this.setState({ startPoint: text })
    }
    handleEnd = (text) => {
        this.setState({ endPoint: text })
    }
    result = (startPoint, endPoint) => {
        alert('Start: ' + startPoint + ' End: ' + endPoint)
    }
    render() {
        return (
            <View style = {styles.container}>
                <TextInput style = {styles.input}
                           underlineColorAndroid = "transparent"
                           placeholder = "Ending point"
                           placeholderTextColor = "#9a73ef"
                           autoCapitalize = "none"
                           onChangeText = {this.handleStart}/>

                <TextInput style = {styles.input}
                           underlineColorAndroid = "transparent"
                           placeholder = "Starting point"
                           placeholderTextColor = "#9a73ef"
                           autoCapitalize = "none"
                           onChangeText = {this.handleEnd}/>

                <TouchableOpacity
                    style = {styles.submitButton}
                    onPress = {
                        () => this.result(this.state.startPoint, this.state.endPoint)
                    }>
                    <Text style = {styles.submitButtonText}> Submit </Text>
                </TouchableOpacity>
            </View>
        )
    }
}
export default MtrInput

const styles = StyleSheet.create({
    container: {
        paddingTop: 23
    },
    input: {
        margin: 15,
        height: 40,
        borderColor: '#7a42f4',
        borderWidth: 1
    },
    submitButton: {
        backgroundColor: '#7a42f4',
        padding: 10,
        margin: 15,
        height: 40,
    },
    submitButtonText:{
        color: 'white'
    }
})