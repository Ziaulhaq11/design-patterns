import Beverage from "./Beverage";

//As this class is also abstract it doesn't need to implement Beverage cost method. But Concrete Decorators have to implement.
export default abstract class CondimentDecorator extends Beverage {
  abstract getDescription(): string;
}
