import IHouseBuilder from "../Builder/IHouseBuilder";
import House from "../House";

export default class WoodenHouseBuilder implements IHouseBuilder {
  private house:House
  constructor() {
    this.house = new House()
  }
  BuildBasement () {
    this.house.Basement = "Wooden Bars"
  };
  BuildStructure () {
    this.house.Structure = "Wooden Blocks"
  };
  BuildRoof () {
    this.house.Roof = "Wooden Roof"
  };
  BuildInterior () {
    this.house.Interior = "Wooden Decoration"
  };
  Reset () {
    this.house = new House()
  };
  GetHouse () {
    return this.house
  };
  
}