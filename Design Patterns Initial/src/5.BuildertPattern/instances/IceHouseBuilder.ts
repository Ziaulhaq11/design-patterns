import IHouseBuilder from "../Builder/IHouseBuilder";
import House from "../House";

export default class IceHouseBuilder implements IHouseBuilder {
  private house: House;
  constructor() {
    this.house = new House();
  }
  BuildBasement() {
    this.house.Basement = "Ice Bars";
  }
  BuildInterior() {
    this.house.Interior = "Ice Decoration";
  }
  BuildStructure() {
    this.house.Structure = "Ice Blocks";
  }

  BuildRoof() {
    this.house.Roof = "Ice Roof";
  }
  GetHouse() {
    return this.house;
  }
  Reset() {
    this.house = new House();
  }
}
