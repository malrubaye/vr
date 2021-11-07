function connectStreamToVideo(agoraStream, video) {
  video.srcObject = agoraStream.stream;// add video stream to video element as source
  video.onloadedmetadata = () => {
    // ready to play video
    video.play();
  }
}
