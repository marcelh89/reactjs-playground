import React, {useEffect} from 'react';

import { createStore } from 'redux';
import {Provider, connect} from 'react-redux';

import './App.css';

// declare constants
const CAR_URL = 'https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json'

// Define action types
const types = {
  SETFILTER: 'SETFILTER',
  SETCARS: 'SETCARS'
};

// define a reducer
const reducer = (state, action) => {
  if (action.type === types.SETFILTER) {
    return { ...state, filter: action.data };
  }
  if (action.type === types.SETCARS) {
    return { ...state, cars: action.data };
  }
  // If the reducer doesn't care about this action type,
  // return the existing state unchanged
  return state;
};

// define initial state
const initialState = {
  filter: "",
  cars: []
}

// create the redux's store
const store = createStore(reducer, initialState);


// define React components.

const FilterInput = connect(s => s)((props) => {
  const {filter} = props;
 
  return (
    <input value={filter} onChange={(evt) => store.dispatch({ type: types.SETFILTER, data: evt.target.value })} />
  );
})

const CarTable = connect(s => s)((props) => {
  const {filter, cars} = props;

  return (
    <table width="100%" >
      <tbody>
        {
          cars
          .filter((car => car.MakeName.toLowerCase().includes(filter.toLocaleLowerCase())) )
          .map(({MakeId, MakeName, VehicleTypeName }) => (
            <tr key={MakeId}>
              <td>{MakeName}</td>
              <td>{VehicleTypeName}</td>
            </tr>
  ))
        }

      </tbody>
    </table>
  )
})

function App() {

  useEffect(() => {
    fetch(CAR_URL)
    .then(res => res.json())
    .then(cars => store.dispatch({ type: types.SETCARS, data: cars.Results }))
  }, [])

  return (
    <Provider store={store}>
      <div className="App">
        <div>
          <FilterInput />
        </div>
        <h1>List of Cars</h1>
        <CarTable />
      </div>
    </Provider>
  );
}

export default App;
