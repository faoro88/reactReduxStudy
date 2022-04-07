import {ReducersType} from '../../interfaces/reducersTypes';

const valueState: ReducersType = {
    value: 0,
  };


export const valueReducer = (
    state: ReducersType = valueState,
    action:{type:string, payload: Number},
) => {
    switch (action.type) {
        case 'counter/incremented':
          return (valueState.value + 1);
        case 'DELETE_USER':
          return valueState;
        default:
          return state;
      }
};