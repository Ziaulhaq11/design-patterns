import { Duck } from "../Duck";
import { FlyNoWay } from "../subclasses/FlyNoWay";
import { MuteQuack } from "../subclasses/MuteQuack";

export class DecoyDuck extends Duck {
  constructor() {
    super()
    this.flyBehavior = new FlyNoWay()
    this.quackBehavior = new MuteQuack()
  }
  display(): void {
    console.log("I'm a Decoy duck")
  }
}