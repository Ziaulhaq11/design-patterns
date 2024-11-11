import CivilEngineer from "./Director/CivilEngineer"
import IceHouseBuilder from "./instances/IceHouseBuilder"
import WoodenHouseBuilder from "./instances/WoodenHouseBuilder"

export default function builderTest() {
  console.log("Builder Design Pattern")
  const builder = new IceHouseBuilder()
  const civilEngineer = new CivilEngineer(builder)

  const iceHouse = civilEngineer.build()
  /*  WE DONT NEED TO CREATE A SEPARATE BUILDER OR ENGINEER.
  const builder2 = new WoodenHouseBuilder()
  const civilEngineer2 = new CivilEngineer(builder2)*/
  civilEngineer.changeBuilder(new WoodenHouseBuilder())
  
  const woodenHouse = civilEngineer.build()

  console.log("My Ice house is ", iceHouse)
  console.log("My Wooden house is ", woodenHouse)
  console.log("--------------------------")
}