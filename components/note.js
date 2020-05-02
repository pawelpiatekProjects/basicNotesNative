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
        color: '#fff'
    }
})
