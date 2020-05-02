import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Header() {

    return (
        <View style={styles.headerWrapper}>
            <Text style={styles.header}>Notes</Text>
        </View>
    )

}

const styles = StyleSheet.create({
    header: {

        marginTop: 50,
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    },
    headerWrapper: {
        height: 120,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffc20e',
    }
})
