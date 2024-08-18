// Export the functions in this module to be called elsewhere

export const setupVideo = async () => {
  const video = document.createElement("video");
  const stream = await navigator.mediaDevices.getUserMedia({ video: true });

  try {
    // modern browsers
    video.srcObject = stream;
  } catch (err) {
    // old browsers
    video.src = window.URL.createObjectURL(stream);
    console.log("err", err);
  }
  await video.play();
  return video;
};

export function takePhoto(canvas, video) {
  const context = canvas.getContext("2d");
  context.drawImage(video, 0, 0);
}
