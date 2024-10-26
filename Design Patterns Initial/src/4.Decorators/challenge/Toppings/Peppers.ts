import ToppingDecorator from "../ToppingDecorator";
import Pizza from "../Pizza";

export default class Peppers extends ToppingDecorator {
  pizza: Pizza;
  constructor(pza: Pizza) {
    super();
    this.pizza = pza;
    this.description = this.pizza.description + ", peppers";
  }

  getDescription(): string {
    return this.description;
  }
  cost(): number {
    return this.pizza.cost() + 0.15;
  }
}
