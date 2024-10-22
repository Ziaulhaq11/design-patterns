import Observer from "../interfaces/Observer";
import Weather from "../interfaces/Weather";
import WeatherStationInterface from "../interfaces/WeatherStation";

export default class SimpleWeatherStation implements WeatherStationInterface {
  private observers : Observer[] = []
  private weather: Weather;
  registerObserver = (observer: Observer) => {
    this.observers.push(observer)
  }
  removeObserver = (observer: Observer) => {
    const index = this.observers.indexOf(observer)
    if (index >= 0) {
      this.observers.splice(index, 1)
    }
  }
  notifyObservers = () => {
    for (let observer of this.observers) {
      observer.update(this.weather);
    }
  }
  setValue = (w:Weather) => {
    this.weather = w;
    this.notifyObservers()
  }
}