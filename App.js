import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, TouchableWithoutFeedback, Keyboard} from 'react-native';
import Header from './components/header';
import Note from './components/note';
import AddForm from './components/addForm';
import axios from 'axios';
import firebase from './firebase';

const db = firebase.database();

export default function App() {

    const [data, setData] = useState([]);
    useEffect(() => {

        fetch();
    }, [])

    const fetch = async () => {
        db.ref('/notes').once('value')
            .then(snapshot=>{
               // Object.keys(snapshot).map(el=>console.log(el))
                const items = snapshot.val();
               const arr = Object.keys(items).map(el=>{
                   return items[el];
               })
                setData(arr);
               console.log(arr)
            })
    }


    const deleteNote = (key) => {
        console.log(key)
       let noteRef = db.ref(`notes/${key}`);
       noteRef.remove();
       fetch();
    }

    //firebase

    const addNoteFire = (title) =>{
       const key = db.ref().child('notes').push().key;
       db.ref(`notes/${key}`).set({
           key: key,
           title: title
       })
        fetch();
    }

    //todo: add scroll to content
    return (
        <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
            <View style={styles.container}>
                <Header/>
                <AddForm add={addNoteFire}/>
                <View style={styles.content}>
                    {data.map(el => {
                        if (el != null) {
                            return <Note
                                click={deleteNote}
                                note={el}
                            />
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
