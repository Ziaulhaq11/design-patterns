import { ShareBehavior } from "../interface/ShareBehavior";

export class SocialMediaShare implements ShareBehavior {
  share() {
    console.log("Sharing by Social Media");
  }
}
