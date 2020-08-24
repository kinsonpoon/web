import React, {Component} from 'react';
import {View, Text, TextInput, StyleSheet,FlatList} from 'react-native';
import stationList from '../source/mtrStation.json';
class MtrStation extends Component {
    state = {
        search: '',
    };

    filterList(list) {
        return list.filter(listItem => listItem.toLowerCase().includes(this.state.search.toLowerCase()));
    }

    render() {
        const list = ['Lam Tin', 'Kwun Tong', 'Ngau Tau Kok', 'Kowloon Bay'];

        return (
            <view>
            <View style={{flex: 1, flexDirection: 'column'}}>
                <Text >
                    stationList
                </Text>
                <FlatList
                    data={stationList}
                    showsVerticalScrollIndicator={false}
                    renderItem={({item}) =>
                        <View >
                            <Text>{item.name}</Text>
                        </View>
                    }
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
            <View style={styles.container}>
                <TextInput
                    onChangeText={(search) => this.setState({search})}
                    style={styles.searchBar}
                />
                {this.filterList(list).map((listItem, index) => (
                    <Text key={index} style={styles.itemText}>{listItem}</Text>
                ))}
            </View>
            </view>
        );
    }
}
export default MtrStation


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        alignItems: 'center',
        height: '100%',
    },
    searchBar: {
        fontSize: 24,
        margin: 10,
        width: '90%',
        height: 50,
        backgroundColor: 'white',
    },
    itemText: {
        margin: 10,
        color: 'white',
        fontSize: 24,
        backgroundColor: 'blue',
        width: '100%',
        height: 50
    }
});
