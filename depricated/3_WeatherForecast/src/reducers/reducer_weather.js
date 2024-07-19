import {FETCH_WEATHER} from '../actions/index';

export default function(state = [], action){

  switch (action.type) {
    case FETCH_WEATHER:
        return state.concat([action.payload.data]);
        //return [action.payload.data, ...state];  //es6 the same as upper line
  }

  return state;
}
