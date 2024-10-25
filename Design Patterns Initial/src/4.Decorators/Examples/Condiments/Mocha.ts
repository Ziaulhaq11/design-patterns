import Beverage from "../Beverage";
import CondimentDecorator from "../DecoratorMain";

export default class Mocha extends CondimentDecorator {
  beverage : Beverage
  constructor(bvg: Beverage) {
    super()
    this.beverage = bvg
    this.description = this.beverage.description + ", Mocha"
  }
  getDescription() {
    return this.description
  }
  cost(): number {
    return this.beverage.cost() + .25
  }
}