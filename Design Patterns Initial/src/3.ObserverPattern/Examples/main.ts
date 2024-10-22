import SimpleObserver from "./instances/SimpleObserver";
import SimpleSubject from "./instances/SimpleSubject";

export function observerPattern() {
  const simpleSubject = new SimpleSubject();
  const simpleObserver = new SimpleObserver(simpleSubject);
  const simpleObserver2 = new SimpleObserver(simpleSubject);
  const simpleObserver3 = new SimpleObserver(simpleSubject);
  
  simpleSubject.removeObserver(simpleObserver2)
  simpleSubject.setValue(80); //When this set function calls notifyObservers invokes, which will loop all observers and in observers update method will be called. So, three consoles will be printed.
  simpleObserver.update(4); //This value will specific to its observer only
}
