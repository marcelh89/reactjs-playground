import React, {useEffect} from 'react';
import create from 'zustand';
import {mountStoreDevtool} from 'simple-zustand-devtools';

import './App.css';

// declare constants
const CAR_URL = 'https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json'

// create the zustand's store
const useStore = create((set) => ({

  filter: "",
  cars: [],
  setFilter: (filter) => set((state) => ({
    ...state,
    filter,
  })),
  setCars: (cars) => set((state) => ({cars})) // zustand already spreads the cars object - no need to do it manually

}));


// on dev environment use zustand dev tools within React dev tools to see the global state
if(process.env.NODE_ENV === 'development'){
  mountStoreDevtool('Store', useStore);
}


// define React components.

const FilterInput = () => {
  const [filter, setFilter] = useStore((state) => [state.filter, state.setFilter]);
 
  return (
    <input value={filter} onChange={(evt) => setFilter(evt.target.value)} />
  );
}

const CarTable = () => {
  const [filter,cars] = useStore((state) => [state.filter, state.cars]);

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
}

function App() {
  const setCars = useStore((state) => state.setCars);

  useEffect(() => {
    fetch(CAR_URL)
    .then(res => res.json())
    .then(cars => setCars(cars.Results));

  }, [])

  return (
    <div className="App">
      <div>
        <FilterInput />
      </div>
      <h1>List of Cars</h1>
      <CarTable />
    </div>
  );
}

export default App;
