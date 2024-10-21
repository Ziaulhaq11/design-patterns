import { QuackBehavior } from "../interfaces/QuackBehavior";

export class Squeak implements QuackBehavior {
  quack() {
    console.log("Squeak");
  }
}