export default abstract class Pizza {
  description: string;
  getDescription() {
    return this.description;
  }
  abstract cost():number
}