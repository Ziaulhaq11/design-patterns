import IHouseBuilder from "../Builder/IHouseBuilder";

export default class CivilEngineer {
  houseBuilder: IHouseBuilder
  constructor(hb : IHouseBuilder) {
    this.houseBuilder = hb;
  }
  changeBuilder(hb: IHouseBuilder) {
    this.acceptBuilder(hb)
  }
  build() {
    this.houseBuilder.BuildBasement()
    this.houseBuilder.BuildStructure()
    this.houseBuilder.BuildRoof()
    this.houseBuilder.BuildInterior()
    return this.houseBuilder.GetHouse()
  }
  acceptBuilder(hb: IHouseBuilder) {
    this.houseBuilder = hb;
    this.houseBuilder.Reset()
  }
}