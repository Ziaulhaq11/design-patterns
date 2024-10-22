import Turkey from "../interfaces/Turkey";
import Duck from '../interfaces/Duck'

export default class DuckAdapter implements Turkey {
  duck: Duck;
  random: number;
  constructor(duck: Duck) {
    this.duck = duck;
    this.random = parseInt((Math.random() * 10).toFixed(0))
  }
  gobble() {
    this.duck.quack()
  }
  fly() {
    if (this.random === 0) {
      this.duck.fly()
    }
  }
}