import { BasicCameraApp } from "../challenge/instances/BasicCameraApp";
import { CameraPlusApp } from "../challenge/instances/CameraPlusApp";
import { EmailShare } from "../challenge/subclasses/EmailShare";
import { SocialMediaShare } from "../challenge/subclasses/SocialMediaShare";
import { TextShare } from "../challenge/subclasses/TextShare";

export default function challenge() {
  //Basic Camera App
  const basic = new BasicCameraApp();
  basic.take();
  basic.save();
  basic.setShareMethod(new TextShare());
  basic.setShareMethod(new EmailShare());
  basic.setShareMethod(new SocialMediaShare());
  basic.share();
  basic.edit();
  console.log("-------------");

  //Camera Plus App
  const cameraPlus = new CameraPlusApp();
  cameraPlus.edit();
  cameraPlus.setShareMethod(new SocialMediaShare());
  cameraPlus.share();
}

