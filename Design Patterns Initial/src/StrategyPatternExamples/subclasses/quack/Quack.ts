import { QuackBehavior } from "../../interfaces/QuackBehavior";

export class Quack implements QuackBehavior {
  quack() {
    console.log("Quack")
  }
}