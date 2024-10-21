import { ShareBehavior } from "./interface/ShareBehavior";

export abstract class PhoneCameraApp {
  protected shareMethod:ShareBehavior
  constructor() { }
  setShareMethod(sm: ShareBehavior) {
    this.shareMethod = sm;
  }
  take() {
    console.log("Taking the photo");
  }
  save() {
    console.log("Saving the photo");
  }
  share() {
    this.shareMethod.share()
  }
  abstract edit(): void;
}
