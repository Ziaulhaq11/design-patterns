import Decorator from "../Decorator";
import Pizza from "../Pizza";

export default class Cheese extends Decorator {
  pizza: Pizza;
  constructor(pza: Pizza) {
    super()
    this.pizza = pza;
    this.description = this.pizza.description + ", cheese"
  }

  getDescription(): string {
    return this.description
  }
  cost(): number {
    return this.pizza.cost() + 0.25;
  }
}