import Observer from "../interfaces/Observer";
import Subject from "../interfaces/Subject";

export default class SimpleObserver implements Observer {
  private value: Number;
  private simpleSubject: Subject;
  constructor(subject: Subject) {
    this.simpleSubject = subject;
    this.simpleSubject.registerObserver(this)
  }
  update = (value: Number) => {
    this.value = value;
    this.display()
  };

  display = () => {
    console.log("Value : " + this.value)
  }
}