import DarkRoast from "./Beverages/DarkRoast";
import Espresso from "./Beverages/Espresso";
import Mocha from "./Condiments/Mocha";
import SteamMilk from "./Condiments/SteamMilk";
import Whip from "./Condiments/Whip";

export default function decoratorTest() {
  let darkRoast = new DarkRoast();

  darkRoast = new Whip(darkRoast);
  darkRoast = new Whip(darkRoast);
  darkRoast = new Mocha(darkRoast);
  darkRoast = new SteamMilk(darkRoast);
  console.log(darkRoast.getDescription())
  console.log(darkRoast.cost())

  console.log("----------------------")

  let espresso = new Espresso()
  espresso = new Whip(espresso)
  espresso = new Mocha(espresso)
  espresso = new Mocha(espresso)
  console.log(espresso.getDescription())
  console.log(espresso.cost())
}
