import FilterInput from "./FilterInput";
import CarTable from "./CarTable";
import React, {useContext, useEffect} from "react";
import {MyContext} from "../App";

const CAR_URL = 'https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json'
const CarExample = () => {
    const {setCars} = useContext(MyContext)

    useEffect(() => {
        fetch(CAR_URL)
            .then(res => res.json())
            .then(cars => setCars(cars.Results));

    }, [])

    return (
        <div className="App">
            <div>
                <FilterInput/>
            </div>
            <h1>List of Cars</h1>
            <CarTable/>
        </div>
    )

}


export default CarExample