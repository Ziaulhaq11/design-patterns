import { Duck } from "../Duck";
import { FlyNoWay } from "../subclasses/FlyNoWay";
import { Quack } from "../subclasses/Quack";

export class ModelDuck extends Duck {
  constructor() {
    super()
    this.flyBehavior = new FlyNoWay()
    this.quackBehavior = new Quack()
  }
  display(): void {
    console.log("I'm a model duck")
  }
}