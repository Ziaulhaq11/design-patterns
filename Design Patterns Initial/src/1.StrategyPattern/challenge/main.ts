import { BasicCameraApp } from "./instances/BasicCameraApp";
import { CameraPlusApp } from "./instances/CameraPlusApp";
import { EmailShare } from "./subclasses/EmailShare";
import { SocialMediaShare } from "./subclasses/SocialMediaShare";
import { TextShare } from "./subclasses/TextShare";
import { Share } from "./interface/ShareMethodEnum";

export default function challenge(shareMethod: Share) {
  //Basic Camera App
  const basic = new BasicCameraApp();
  basic.take();
  basic.save();
  switch (shareMethod) {
    case Share.text:
      basic.setShareMethod(new TextShare());
      break;
    case Share.email:
      basic.setShareMethod(new EmailShare());
      break;
    case Share.social:
      basic.setShareMethod(new SocialMediaShare())
    default:
      basic.setShareMethod(new TextShare());
      break;
  }
  basic.share();
  basic.edit();
  console.log("-------------");

  //Camera Plus App
  const cameraPlus = new CameraPlusApp();
  cameraPlus.edit();
  cameraPlus.setShareMethod(new SocialMediaShare());
  cameraPlus.share();
}
