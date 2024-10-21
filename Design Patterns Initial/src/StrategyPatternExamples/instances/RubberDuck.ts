import { Duck } from "../Duck";
import { FlyBehavior } from "../interfaces/FlyBehavior";
import { QuackBehavior } from "../interfaces/QuackBehavior";
import { FlyNoWay } from "../subclasses/fly/FlyNoWay";
import { Squeak } from "../subclasses/quack/Squeak";

export class RubberDuck extends Duck {
  //Here we're by default assigning FlyNoway and Squeak, but then user can overwrite this.
  constructor(flyBehavior?: FlyBehavior, quackBehavior?: QuackBehavior) {
    super();
    if (flyBehavior && quackBehavior) {
      this.flyBehavior = flyBehavior;
      this.quackBehavior = quackBehavior
    } else {
      this.flyBehavior = new FlyNoWay();
      this.quackBehavior = new Squeak()
    }
  }
  display() {
    console.log("I'm a Rubber Duckie");
  }
}
