import DroneAdapter from "./adapters/DroneAdapter";
import DuckAdapter from "./adapters/DuckAdapter";
import TurkeyAdapter from "./adapters/TurkeyAdapter";
import MallardDuck from "./instances/MallardDuck";
import SuperDrone from "./instances/SuperDrone";
import WildTurkey from "./instances/WildTurkey";
import Duck from "./interfaces/Duck";

export const abstractPatternTest = () => {
  //Ducks and Turkey Basic Test
  /*const mallard = new MallardDuck();
  mallard.fly();
  mallard.quack();
  const wild = new WildTurkey();
  wild.gobble();
  wild.fly();*/

  //DUCK TEST WITH ADAPTERS
  /*const duck = new MallardDuck();
  const turkey = new WildTurkey();
  
  const turkeyAdapter = new TurkeyAdapter(turkey);

  console.log("The Turkey says...")
  turkey.gobble()
  turkey.fly()

  console.log("\nThe Duck says.....")
  testDuck(duck)

  console.log("\nThe Turkey Adapter says.....");
  testDuck(turkeyAdapter);*/

  //TURKEY TEST WITH ADAPTERS
  /*const duck = new MallardDuck();
  const duckAdapter = new DuckAdapter(duck)

  for (let i = 0; i < 10; i++) {
    console.log("The Duck Adapter says....")
    duckAdapter.gobble()
    console.log(duckAdapter.random)
    duckAdapter.fly()
  }*/

  //CHALLENGE
  const drone = new SuperDrone()
  const droneAdapter = new DroneAdapter(drone);
  testDuck(droneAdapter)
};

//Testing Function of Ducks
const testDuck = (duck: Duck) => {
  duck.quack()
  duck.fly()
}