import Pizza from "./Pizza";

export default abstract class Decorator extends Pizza {
  abstract getDescription(): string;
}