import {makeAutoObservable} from "mobx";

export default class CarStore {
  filter = "";
  cars = [];

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

  setFilter = (filter) => {
    this.filter = filter;
  };

  setCars = (cars) => {
    this.cars = cars;
  };

  filteredCars = () => {
    return this.cars.filter((car) =>
      car.MakeName.toLowerCase().includes(this.filter.toLocaleLowerCase())
    );
  };
}
