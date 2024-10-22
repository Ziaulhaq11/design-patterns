import { ShareBehavior } from "../interface/ShareBehavior";

export class EmailShare implements ShareBehavior {
  share() {
    console.log("Sharing by Email");
  }
}
