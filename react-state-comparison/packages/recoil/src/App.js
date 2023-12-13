import React, {useEffect} from 'react';
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

import './App.css';

// declare constants
const CAR_URL = 'https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json'

// create the recoil's state
const filterState = atom({
  key: "filter",
  default: ""
});

const carsState = atom({
  key: "cars",
  default: []
});


// define React components.

const FilterInput = () => {
  const [filter, setFilter] = useRecoilState(filterState);
 
  return (
    <input value={filter} onChange={(evt) => setFilter(evt.target.value)} />
  );
}

const CarTable = () => {
  const filter = useRecoilValue(filterState);
  const cars = useRecoilValue(carsState);

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
  const [_,setCars] = useRecoilState(carsState);

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

const providedApp = () => (
  <RecoilRoot>
    <App />
  </RecoilRoot>
)

export default providedApp;
