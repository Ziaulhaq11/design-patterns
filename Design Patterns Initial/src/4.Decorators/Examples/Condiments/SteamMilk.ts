import Beverage from "../Beverage";
import CondimentDecorator from "../DecoratorMain";

export default class SteamMilk extends CondimentDecorator {
  beverage:Beverage
  constructor(bvg : Beverage) {
    super()
    this.beverage = bvg
    this.description = this.beverage.description + ", Steam Milk";
  }
  getDescription(): string {
    return this.description;
  }
  cost(): number {
    return this.beverage.cost() + .30
  }
}