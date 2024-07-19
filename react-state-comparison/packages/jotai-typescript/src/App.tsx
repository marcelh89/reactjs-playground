import {useEffect} from 'react';
import { atom, useAtom, useSetAtom } from 'jotai'


import './App.css';

// declare constants
const CAR_URL = 'https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json'

// types
type Car = {
  MakeId: number;
  MakeName: string;
  VehicleTypeId: number;
  VehicleTypeName: string;
}

// create the jotai's state
const filterState = atom('');
const carsState = atom<Car[]>([]);

// define React components.

const FilterInput = () => {
  const [filter, setFilter] = useAtom(filterState)
 
  return (
    <input value={filter} onChange={(evt) => setFilter(evt.target.value)} />
  );
}

const CarTable = () => {
  const [filter] = useAtom(filterState);
  const [cars] = useAtom(carsState);

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
  //const [_,setCars] = useAtom(carsState);
  const setCars = useSetAtom(carsState);

  useEffect(() => {
    fetch(CAR_URL)
    .then(res => res.json())
    .then(cars => setCars(cars.Results));

  }, [])

  return (
    //<Provider> can be left out - "provider-less mode" https://jotai.org/docs/core/provider
    <div className="App">
      <div>
        <FilterInput />
      </div>
      <h1>List of Cars</h1>
      <CarTable />
    </div>
    // </Provider>
  );
}

export default App;
