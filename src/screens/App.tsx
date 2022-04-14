import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux'
import { decrementValue, incrementValue } from '../redux/actions/valueAction'
import { ValueType } from '../interfaces/valueTypes'
import { Store } from '../interfaces/storeTypes';

export default function App() {

  const value: ValueType = useSelector((state: Store) => state.value);

  const buttonIncrement = () => {
    dispatch(incrementValue('INCREMENT'));
  };

  const buttonDecrement = () => {
    dispatch(decrementValue('DECREMENT'));
    };

  const dispatch = useDispatch();
  return (
    <SafeAreaView style={{backgroundColor:'#ecf0f1', flexGrow:10}}>
      <View  style={styles.containerText}>
        <Text style={styles.number}>{value.value}</Text>
      </View>
      <View  style={styles.containerButtons}>
        <TouchableOpacity onPress={() => {
            buttonIncrement();
          }}>
          <Text style={styles.text}>Incrementar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { buttonDecrement();}}>
          <Text style={styles.text}>Decrementar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  containerText:{
    alignItems:'center',
    justifyContent: 'center',
    flexGrow:1,
  },
  containerButtons: {
    flexDirection:'row-reverse',
    alignItems:'flex-end',
    justifyContent:'space-evenly',
    flexGrow:1,
  },
  text: {
    padding: '10%',
    marginBottom: '20%',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#f5f6fa',
    backgroundColor: '#1abc9c',
    borderRadius: 36,
  },
  number: {
    top: '50%',
    position: 'absolute',
    fontSize: 250,
    color: '#1abc9c',
  },
});