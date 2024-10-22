import Drone from "../interfaces/Drone";

export default class SuperDrone implements Drone {
  beep() {
    console.log("Beep beep beep")
  }
  spin_rotors() {
    console.log("Rotors are spinnig")
  }
  take_off() {
    console.log("Taking Offf")
  }
}