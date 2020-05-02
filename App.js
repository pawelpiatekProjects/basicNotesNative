import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from './components/header';
import Note from './components/note';
import axios from 'axios';

export default function App() {

  const [data, setData] = useState([]);
  useEffect(()=>{
    const fetch = async ()=>{
      const {data} = await axios.get('https://react-native-notes-7dc69.firebaseio.com/notes.json');

      // console.log(data)

      data.map(el=>{
        console.log(el)
      })
      setData(data);
    }
    fetch();
  },[])
  return (
    <View style={styles.container}>
      {/*<Header/>*/}
      <View style={styles.content}>
        {data.map(el=>{
          if(el!=null){
            return <Note text={el.title}/>
          }
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
  },
  content: {
    marginTop:150
  }
});
