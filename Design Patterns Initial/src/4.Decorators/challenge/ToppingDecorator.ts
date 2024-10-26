import Pizza from "./Pizza";

export default abstract class ToppingDecorator extends Pizza {
  abstract getDescription(): string;
}