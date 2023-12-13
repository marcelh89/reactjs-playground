import React, {useContext, useState, useEffect, setState} from 'react';

import './App.css';

// declare constants
const CAR_URL = 'https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json'

// create the context's store
const CarContext = React.createContext()

// define React components.
const FilterInput = () => {
  const {filter, setFilter} = useContext(CarContext);
 
  return (
    <input value={filter} onChange={(evt) => setFilter(evt.target.value)} />
  );
}

const CarTable = () => {
  const {cars, filter} = useContext(CarContext);

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

  const [cars, setCars] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    fetch(CAR_URL)
    .then(res => res.json())
    .then(cars => setCars(cars.Results));
  }, [])

  return (
    <CarContext.Provider value={{filter, cars, setFilter, setCars}}>
      <div className="App">
        <div>
          <FilterInput />
        </div>
        <h1>List of Cars</h1>
        <CarTable />
      </div>
    </CarContext.Provider>
  );
}

export default App;
