import { QuackBehavior } from "../../interfaces/QuackBehavior";

export class MuteQuack implements QuackBehavior {
  quack() {
    console.log("Silence")
  }
}