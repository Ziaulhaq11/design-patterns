import AlertSystem from "./instances/AlertSystemWeatherStation";
import LoggerWeatherStation from "./instances/LoggerWeatherStation";
import SimpleWeatherStation from "./instances/SimpleWeatherStation";
import UserInterface from "./instances/UserInterfaceObserver";

export function observerChallenge() {
  const weatherForecast = new SimpleWeatherStation()
  const userInterface = new UserInterface(weatherForecast)
  const logger = new LoggerWeatherStation(weatherForecast)
  const alertSystem = new AlertSystem(weatherForecast)
  weatherForecast.setValue({ windSpeed: 45, temperature: 50, pressure: 28 })
  userInterface.display()
}