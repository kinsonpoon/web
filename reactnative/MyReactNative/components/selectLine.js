import React, {Component} from "react";
import {Text, View, StyleSheet, Alert, Picker, TouchableOpacity} from 'react-native';
import stationList from '../source/mtrStation.json';
class SelectLine extends Component {
    state = {
        PickerValueHolder: [],
        selectedValue1: "Kwun Tong Line",
        selectedValue2: "Kwun Tong Line",
        selectedStation1:'',
        selectedStation2:'',
    }
    result = (startPoint, endPoint) => {
        alert('Start: ' + startPoint + ' End: ' + endPoint)
    }
    componentDidMount() {
        let PickerValueHolder = stationList;
        this.setState({PickerValueHolder});
    }
    render() {

        return (
            <View>
                <View style={styles.row}>
                    <Text style={styles.text}>Starting point: </Text>
                <Picker style = {styles.input}
                    selectedValue={this.state.selectedValue1}
                    onValueChange={(itemValue, itemIndex) => this.setState({selectedValue1: itemValue})} >
                    { this.state.PickerValueHolder.map((item)=>
                        <Picker.Item label={item.name} value={item.name}  />
                    )}
                </Picker>
                    <Picker style = {styles.input}
                            selectedValue={this.state.selectedStation1}
                            onValueChange={(itemValue, itemIndex) => this.setState({selectedStation1: itemValue})} >
                        { this.state.PickerValueHolder.filter(({name}) => name === this.state.selectedValue1).map(({stations})=>
                            stations.map((item) =><Picker.Item label={item} value={item}  />
                            ))}
                    </Picker>
                </View>

                    <View style={styles.row}>
                        <Text style={styles.text}>Ending point: </Text>
                <Picker style = {styles.input}
                    selectedValue={this.state.selectedValue2}
                    onValueChange={(itemValue, itemIndex) => this.setState({selectedValue2: itemValue})} >
                    { this.state.PickerValueHolder.map((item)=>
                        <Picker.Item label={item.name} value={item.name}  />
                    )}
                </Picker>
                        <Picker style = {styles.input}
                                selectedValue={this.state.selectedStation2}
                                onValueChange={(itemValue, itemIndex) => this.setState({selectedStation2: itemValue})} >
                            { this.state.PickerValueHolder.filter(({name}) => name === this.state.selectedValue2).map(({stations})=>
                                stations.map((item) =><Picker.Item label={item} value={item}  />
                                ))}
                        </Picker>
                    </View>


                <TouchableOpacity
                    style = {styles.submitButton}
                    onPress = {
                        () => this.result(this.state.selectedStation1, this.state.selectedStation2)
                    }>
                    <Text style = {styles.submitButtonText}> Submit </Text>
                </TouchableOpacity>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    row: { flex: 1, flexDirection: "row" } ,
    text: {
        margin: 25,
        height: 40,
        width:100,

    },
    input: {
        margin: 15,
        height: 40,
        width:300,
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

});

export default SelectLine;