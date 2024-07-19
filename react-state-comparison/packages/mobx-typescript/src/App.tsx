import React, {createContext} from 'react';
import './App.css';
import CarStore from "./store/CarStore";
import CarExample from "./components/CarExample";

// create the mobx's store instance
const carStore = new CarStore();
export const MyContext = createContext(carStore)

function App() {
    return (
        <MyContext.Provider value={carStore}>
            <CarExample />
        </MyContext.Provider>
    );
}

export default App;
