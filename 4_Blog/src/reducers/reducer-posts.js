import _ from 'lodash';
import {FETCH_POSTS,FETCH_POST, DELETE_POST} from '../actions';

export default function(state = {}, action){
  switch (action.type) {
    case DELETE_POST:
      return _.omit(state, action.payload);
      //return _.reject(state, post => post === action.payload);

    case FETCH_POST:
      const post = action.payload.data;
      //const newState =  { ...state, }
      //newState[post.id] = post;
      //return newState;
      return {...state, [action.payload.data.id] : action.payload.data}
    case FETCH_POSTS:
      console.log(action.payload.data); // [post1, post2]
      // mapKeys turns that posts list [post1, post2] into
      // a list with id as a key like[1:post1, 2: post2]...
      // so you can easily access the array by the id posts["1"]
      return _.mapKeys(action.payload.data, 'id');

    default:
      return state;
  }
}
