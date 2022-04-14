import { ValueType } from "../../interfaces/valueTypes";


const initialState: ValueType = {
  value:0
}

export const valueReducer = (
  state: ValueType = initialState,
  action: {type: string},
) => {
  switch (action.type) {
    case 'INCREMENT':
      console.log(state.value + 1)
      return {value: state.value + 1};
    case 'DECREMENT':
      console.log(state.value + -1)
      return {value: state.value - 1};
    default:
      return state;
  }
};