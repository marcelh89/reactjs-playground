import {makeAutoObservable} from "mobx";
import type {Car} from '../types/types'
export default class CarStore {
  filter: string = "";
  cars: Car[] = [];

  constructor() {
    makeAutoObservable(this);
    this.fetchCars()
  }

  fetchCars = () => {
    const CAR_URL = 'https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json'

    fetch(CAR_URL)
        .then(res => res.json())
        .then(cars => this.setCars(cars.Results));
  }

  setFilter = (filter: string) => {
    this.filter = filter;
  };

  setCars = (cars: Car[]) => {
    this.cars = cars;
  };

  filteredCars = () => {
    return this.cars.filter((car) =>
      car.MakeName.toLowerCase().includes(this.filter.toLocaleLowerCase())
    );
  };
}
