import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, TouchableWithoutFeedback, Keyboard} from 'react-native';
import Header from './components/header';
import Note from './components/note';
import AddForm from './components/addForm';
import axios from 'axios';

export default function App() {

    const [data, setData] = useState([]);
    useEffect(() => {

        fetch();
    }, [])

    const fetch = async () => {
        const {data} = await axios.get('https://react-native-notes-7dc69.firebaseio.com/notes.json');



        const arr = Object.keys(data).map(key=>{
            return data[key];
        })
        setData(arr);
    }

    const addNote = (title) => {
        axios.post('https://react-native-notes-7dc69.firebaseio.com/notes.json',{
            title: title
        })
        fetch();
    }

    //todo: add scroll to content
    return (
        <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
            <View style={styles.container}>
                <Header/>
                <AddForm add={addNote}/>
                <View style={styles.content}>
                    {data.map(el => {
                        if (el != null) {
                            return <Note text={el.title}/>
                        }
                    })}
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#333',
    },
    content: {
        marginTop: 150
    }
});
