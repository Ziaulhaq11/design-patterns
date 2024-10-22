import AlertSystem from "./instances/AlertDisplay";
import LoggerWeatherStation from "./instances/LoggerDisplay";
import SimpleWeatherStation from "./instances/SimpleWeatherStation";
import UserInterface from "./instances/UserInterfaceDisplay";

export function observerChallenge() {
  const weatherForecast = new SimpleWeatherStation()
  const userInterface = new UserInterface(weatherForecast)
  const logger = new LoggerWeatherStation(weatherForecast)
  const alertSystem = new AlertSystem(weatherForecast)
  weatherForecast.setValue({ windSpeed: 45, temperature: 50, pressure: 28 })
  userInterface.display()
}