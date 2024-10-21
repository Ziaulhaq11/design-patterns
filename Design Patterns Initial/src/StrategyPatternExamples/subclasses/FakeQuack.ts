import { QuackBehavior } from "../interfaces/QuackBehavior";

export class FakeQuack implements QuackBehavior {
  quack() {
    console.log("FakeQuack");
  }
}