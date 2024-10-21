import { Duck } from "../Duck";
import { FlyWithWings } from "../subclasses/fly/FlyWithWings";
import { Quack } from "../subclasses/quack/Quack";

export class RedHeadDuck extends Duck {
  constructor() {
    super();
    this.flyBehavior = new FlyWithWings();
    this.quackBehavior = new Quack();
  }
  display(): void {
    console.log("I'm a Red headed duck");
  }
}
