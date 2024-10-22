import Observer from "../interfaces/Observer";
import Subject from "../interfaces/Subject";

export default class SimpleSubject implements Subject {
  private observers: Observer[] = []
  private value: Number;
  registerObserver = (observer: Observer) => {
    this.observers.push(observer)
  };
  removeObserver = (observer: Observer) => {
    let index = this.observers.indexOf(observer)
    if (index >= 0) {
      this.observers.splice(index, 1)
    }
  };
  notifyObservers = () => {
    for (let observer of this.observers) {
      observer.update(this.value)
    }
  }
  setValue = (value:Number) => {
    this.value = value;
    this.notifyObservers()
  }
}