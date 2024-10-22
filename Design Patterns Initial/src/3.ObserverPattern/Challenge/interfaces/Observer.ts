import Weather from "./Weather";

export default interface Observer {
  update: (weather: Weather) => void;
}