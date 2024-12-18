import Observer from "../interfaces/Observer";
import Weather from "../interfaces/Weather";
import WeatherStationInterface from "../interfaces/WeatherStation";

export default class UserInterface implements Observer {
  private weatherStation: WeatherStationInterface;
  private weather: Weather;
  constructor(ws: WeatherStationInterface) {
    this.weatherStation = ws;
    this.weatherStation.registerObserver(this);
  }
  update = (w: Weather) => {
    this.weather = w;
    this.display();
  };
  display = () => {
    console.log("Displaying Weather from User Interface")
    for (let [key, value] of Object.entries(this.weather)) {
      console.log(`The ${key} value is ${value}`);
    }
    console.log("------------------------------")
  };
}