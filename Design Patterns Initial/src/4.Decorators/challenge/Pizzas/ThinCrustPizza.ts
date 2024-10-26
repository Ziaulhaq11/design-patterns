import Pizza from "../Pizza";

export default class ThinCrustPizza extends Pizza {
  constructor() {
    super();
    this.description = "A Thin crust pizza";
  }
  cost(): number {
    return 1.25;
  }
}
