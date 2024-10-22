import Observer from "../interfaces/Observer";
import Weather from "../interfaces/Weather";
import WeatherStationInterface from "../interfaces/WeatherStation";

export default class AlertSystem implements Observer {
  private weatherStation: WeatherStationInterface;
  private weather: Weather;
  constructor(w: WeatherStationInterface) {
    this.weatherStation = w;
    this.weatherStation.registerObserver(this)
  }
  update(w : Weather) {
    this.weather = w;
    this.alert()
  }
  alert() {
    console.log("Displaying Weather from Alert System");
    for (let [key, value] of Object.entries(this.weather)) {
      console.log(`The ${key} value is ${value}`);
    }
    console.log("------------------------------");
  }
}