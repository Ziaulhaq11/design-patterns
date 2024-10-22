import Turkey from "../interfaces/Turkey";

export default class WildTurkey implements Turkey {
  fly() {
    console.log("I'm flying a short distance")
  }
  gobble() {
    console.log("Gobble gobble")
  }
}