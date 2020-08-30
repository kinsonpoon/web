import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Home extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Transportation fee app for fun</Text>

                <Button
                    title="Add Mtr fee"
                    onPress={() =>
                        this.props.navigation.navigate('Mtr')
                    }
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 23
    }
})
