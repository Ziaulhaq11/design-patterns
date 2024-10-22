import Drone from "../interfaces/Drone";
import Duck from "../interfaces/Duck";

export default class DroneAdapter implements Duck {
  drone:Drone
  constructor(drone: Drone) {
    this.drone = drone;
  }
  quack() {
    this.drone.beep()
  }
  fly() {
    this.drone.spin_rotors()
    this.drone.take_off()
  }
}