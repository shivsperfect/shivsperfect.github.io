import "./style.css";
import { takePhoto, setupVideo } from "./src/camera";

(async () => {
  const video = await setupVideo();
  const canvas = document.querySelector("canvas");
  const button = document.getElementById("camera");
  button.addEventListener("click", () => {
    console.log("Drawing video frame...");
    takePhoto(canvas, video);
  });
})();

// await video.play();
