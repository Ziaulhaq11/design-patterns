import { FlyBehavior } from "../../interfaces/FlyBehavior";

export class FlyRocketPowered implements FlyBehavior {
  fly() {
    console.log("I'm flying with a rocket");
  }
}
