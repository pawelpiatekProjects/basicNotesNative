import React, {useState} from 'react';
import {TextInput, Button, View, StyleSheet} from 'react-native';

export default function AddForm({add}) {

    const [inputValue, setInputValue] = useState('');

    const changeHandler = (val) =>{
        setInputValue(val)
    }
    return(
        <View style={styles.form}>
            <TextInput
                onChangeText={changeHandler}
                placeholderTextColor="#eee"
                style={styles.input}
                placeholder="Add note..."/>
            <Button title="Add" color="#ffc20e" onPress={()=>add(inputValue)}/>
        </View>
    )
}

const styles = StyleSheet.create({
    form: {

    },
    input: {
        color: '#fff',
        marginTop: 40,
        marginHorizontal: 30,
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: "#ffc20e"
    }
})
