import React, {useState} from 'react';
import {Text, StyleSheet, TextInput, View, Button} from 'react-native';
import {Icon} from "react-native-elements";


export default function Note({click, note, update}) {

    const [isDetail, setIsDetail] = useState(false);
    const [inputValue, setInputValue] = useState('');

    const testOnclik = () =>{
        setIsDetail(!isDetail);
    }

    const onUpdate = (key) =>{
        update(key, inputValue)
        console.log(inputValue)
        setIsDetail(false);
        setInputValue('');
    }

    const onDelete = (key) =>{
        click(key);
        setIsDetail(false);
    }

    const changeHandler = (val) =>{
        setInputValue(val)
    }

    return (
        <View  >
            <View style={styles.note}>
                <Text style={styles.text}>{note.title}</Text>
                <Icon name='more' color="#fff" size={30} onPress={testOnclik}/>
            </View>
            {isDetail ? (
                <View style={styles.updateContainer}>
                    <TextInput style={styles.input} placeholder="update..." onChangeText={changeHandler}/>
                    <View style={styles.buttons}>
                        <Button color="#ffc20e" title="Update" onPress={()=>onUpdate(note.key)}/>
                        <Button title="Delete" color="#ff4c4c" onPress={()=>onDelete(note.key)}/>
                    </View>
                </View>
            ) : null}

        </View>
    )
}

const styles = StyleSheet.create({
    note:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#ffc20e',
        textAlign: 'center',
        marginTop: 20,
        marginHorizontal: 30,
        padding: 20,

    },
    text:{
        textAlign: 'center',
        color: '#fff',
        fontSize: 20
    },
    updateContainer:{
        backgroundColor: "#fff",
        padding: 20,
        marginHorizontal: 30,
    },
    input: {
        marginHorizontal: 30,
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: "#ffc20e"
    },
    buttons:{
        flexDirection: 'row',
        justifyContent: 'space-between',
    }

})
