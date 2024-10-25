export default abstract class Beverage {
  description = "Unknown Beverage"
  getDescription() {
    return this.description;
  }
  abstract cost():number;
}