export default class House {
  Basement: string
  Structure: string;
  Roof: string
  Interior: string;
  toString() {
    return `Basement : ${this.Basement}, Structure: ${this.Structure}, Roof : ${this.Roof}, Interior : ${this.Interior}`
  }
}