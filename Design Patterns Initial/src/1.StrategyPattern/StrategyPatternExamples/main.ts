import { MallardDuck } from "./instances/MallardDuck";
import { ModelDuck } from "./instances/ModelDuck";
import { FlyRocketPowered } from "./subclasses/fly/FlyRocketPowered";
import { FlyBehavior } from "./interfaces/FlyBehavior";
import { QuackBehavior } from "./interfaces/QuackBehavior";
import { RubberDuck } from "./instances/RubberDuck";
import { DecoyDuck } from "./instances/DecoyDuck";

export default function strategyPattern() {
  //Mallard Duck
  const mallard = new MallardDuck();
  mallard.display();
  mallard.performQuack();
  mallard.performFly();
  mallard.swim();
  console.log("----------------");

  //Decoy Duck
  const decoy = new DecoyDuck();
  decoy.performFly();

  //Model Duck -- Here we're setting the flyBehavior
  const model = new ModelDuck(); //With Model Duck initially it won't fly
  model.performFly();
  model.setFlyBehavior(new FlyRocketPowered()); //But after some days it will fly, so added here. So we can do runtime changes
  model.performFly();
  console.log("------------------");

  //Rubber Duck -- Here we're passing fly methods its optional these will override existing methods.
  const cantFly: FlyBehavior = {
    fly: () => console.log("I can't fly"),
  };
  const squeak: QuackBehavior = {
    quack: () => console.log("Squeak"),
  };
  const rubberDuckie = new RubberDuck(cantFly, squeak);
  rubberDuckie.performQuack();
  rubberDuckie.performFly();
}

