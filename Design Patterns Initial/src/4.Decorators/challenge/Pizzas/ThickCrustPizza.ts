import Pizza from "../Pizza";

export default class ThickCrustPizza extends Pizza {
  constructor() {
    super();
    this.description = "A Thick crust pizza";
  }
  cost(): number {
    return 1.5;
  }
}
