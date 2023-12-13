import React, {useEffect, useContext} from 'react';
import { makeAutoObservable } from "mobx"
import { observer, Provider, MobXProviderContext } from "mobx-react"

import './App.css';

// declare constants
const CAR_URL = 'https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json'

// define the mobx's store
class CarStore {
  filter = '';
  cars = [];

  constructor(){
    makeAutoObservable(this);
  }

  setFilter = (filter) => {
    this.filter = filter;
  }

  setCars = (cars) => {
    this.cars = cars
  }

}

// create the mobx's store instance
const carStore = new CarStore();


// define React components.

const FilterInput = observer(() => {
  const {carStore} = useContext(MobXProviderContext)
  const {filter, setFilter} = carStore;
  return (
    <input value={filter} onChange={(evt) => setFilter(evt.target.value)} />
  )
});

const CarTable = observer(() => {
  const {carStore} = useContext(MobXProviderContext)
  const {cars, filter} = carStore;


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

const App = () => {

  useEffect(() => {
    fetch(CAR_URL)
    .then(res => res.json())
    .then(cars => carStore.setCars(cars.Results));

  }, [])

  return (
    <Provider carStore={carStore} >
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
