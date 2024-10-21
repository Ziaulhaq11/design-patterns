import { ShareBehavior } from "../interface/ShareBehavior";

export class TextShare implements ShareBehavior {
  share() {
    console.log("Sharing by Text");
  }
}
