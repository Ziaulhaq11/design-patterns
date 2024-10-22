import { Duck } from "../Duck";
import { FlyNoWay } from "../subclasses/fly/FlyNoWay";
import { Quack } from "../subclasses/quack/Quack";

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