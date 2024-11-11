import House from "../House";

export default interface IHouseBuilder {
  BuildBasement: () => void;
  BuildStructure: () => void;
  BuildRoof: () => void;
  BuildInterior: () => void;
  Reset: () => void;
  GetHouse : () => House
}