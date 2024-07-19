import {makeAutoObservable} from "mobx";

export default class CarStore {
  filter = "";
  cars = [];

  constructor() {
    makeAutoObservable(this);
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
