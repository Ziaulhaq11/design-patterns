import Observer from "./Observer";

export default interface WeatherStationInterface {
  registerObserver: (observer: Observer) => void;
  removeObserver: (observer: Observer) => void;
  notifyObservers: () => void;
}