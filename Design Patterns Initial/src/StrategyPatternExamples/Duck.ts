import { FlyBehavior } from "./interfaces/FlyBehavior";
import { QuackBehavior } from "./interfaces/QuackBehavior";

export abstract class Duck {
  protected flyBehavior: FlyBehavior;
  protected quackBehavior: QuackBehavior;

  constructor() { }
  
  setFlyBehavior(fb: FlyBehavior) {
    this.flyBehavior = fb;
  }
  setQuackBehavior(qb: QuackBehavior) {
    this.quackBehavior = qb;
  }

  abstract display(): void;

  performFly() {
    this.flyBehavior.fly()
  }
  performQuack() {
    this.quackBehavior.quack()
  }
  
  swim() {
    console.log("All ducks float, even decoys")
  }
}
