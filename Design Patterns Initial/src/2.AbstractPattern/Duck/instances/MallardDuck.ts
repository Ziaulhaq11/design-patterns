import Duck from "../interfaces/Duck";

export default class MallardDuck implements Duck {
  fly() {
    console.log("I'm flying")
  }
  quack() {
    console.log("Quack")
  }
}