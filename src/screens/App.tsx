import React, {useReducer} from 'react';
import {SafeAreaView, StyleSheet, Text, TouchableOpacity} from 'react-native';

interface Action {
  type: string;
}

interface State {
  count: number;
}

const App = () => {
  const initialState = {count: 0};

  const reducer = (state: State, action: Action) => {
    switch (action.type) {
      case 'SOMA':
        return {count: state.count + 1};
      case 'SUBTRACAO':
        return {count: state.count - 1};
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          dispatch({type: 'SOMA'});
        }}>
        <Text style={styles.text}>Clique para incrementar o state do número</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          dispatch({type: 'SUBTRACAO'});
        }}>
        <Text style={styles.text}>Clique para decrementar o state do número</Text>
      </TouchableOpacity>


      <Text style={styles.number}>{state.count}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#273c75',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    marginHorizontal: '5%',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#f5f6fa',
  },
  number: {
    textAlign: 'center',
    fontSize: 100,
    fontWeight: 'bold',
    color: '#f5f6fa',
  },
});
export default App;
