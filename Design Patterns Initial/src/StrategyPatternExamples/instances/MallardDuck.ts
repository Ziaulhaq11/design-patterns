import { Duck } from "../Duck";
import { FlyWithWings } from "../subclasses/FlyWithWings";
import { Quack } from "../subclasses/Quack";

export class MallardDuck extends Duck {
  constructor() {
    super()
    this.quackBehavior = new Quack()
    this.flyBehavior = new FlyWithWings();
  }
  display() {
    console.log("I'm a real duck");
  }
}
