export default interface Drone {
  beep: () => void;
  spin_rotors: () => void;
  take_off: () => void;
}