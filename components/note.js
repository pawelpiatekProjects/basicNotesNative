import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

export default function Note({text}) {
    return (
        <TouchableOpacity>
            <Text style={styles.note}>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    note:{
        color: '#fff',
        backgroundColor: '#ffc20e',
        textAlign: 'center',
        marginTop: 20,
        marginHorizontal: 30,
        padding: 10,
        fontSize: 20
    }
})
