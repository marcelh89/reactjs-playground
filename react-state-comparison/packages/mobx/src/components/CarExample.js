import FilterInput from "./FilterInput";
import CarTable from "./CarTable";
import React from "react";

const CarExample = () =><div className="App">
            <div>
                <FilterInput/>
            </div>
            <h1>List of Cars</h1>
            <CarTable/>
        </div>

export default CarExample