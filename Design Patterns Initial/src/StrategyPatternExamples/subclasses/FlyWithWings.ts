import { FlyBehavior } from "../interfaces/FlyBehavior";

export class FlyWithWings implements FlyBehavior {
  fly(): void {
    console.log("I'm flying")
  }
}