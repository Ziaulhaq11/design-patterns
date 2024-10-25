import Beverage from "../Beverage";
import CondimentDecorator from "../DecoratorMain";

//These are Concrete Decorators
export default class Whip extends CondimentDecorator {
  beverage:Beverage
  constructor(bvg : Beverage) {
    super()
    this.beverage = bvg;
    this.description = this.beverage.description + ", Whip";
  }
  getDescription() {
    //Here this.beverage is important else it will take description as Unknown instead of the Concrete Component.
    return this.description
  }
  cost() {
    return this.beverage.cost() + .10;
  }
}