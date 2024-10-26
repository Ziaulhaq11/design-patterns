import ThickCrustPizza from "./Pizzas/ThickCrustPizza";
import ThinCrustPizza from "./Pizzas/ThinCrustPizza";
import Cheese from "./Toppings/Cheese";
import Olives from "./Toppings/Olives";
import Peppers from "./Toppings/Peppers";

export default function DecoratorChallenge() {
  let thinCrustPizza = new ThinCrustPizza();
  thinCrustPizza = new Cheese(thinCrustPizza);
  thinCrustPizza = new Cheese(thinCrustPizza);
  thinCrustPizza = new Olives(thinCrustPizza);
  thinCrustPizza = new Peppers(thinCrustPizza);
  console.log(thinCrustPizza.getDescription());
  console.log(thinCrustPizza.cost());

  console.log("---------------")

  let thickCrustPizza = new ThickCrustPizza()
  thickCrustPizza = new Olives(thickCrustPizza)
  thickCrustPizza = new Cheese(thickCrustPizza)
  console.log(thickCrustPizza.getDescription());
  console.log(thickCrustPizza.cost());
}
