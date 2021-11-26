const videoElement = document.getElementById('video');

// Prompt user to select a media stream, pass to video element, then play

async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (e) {
    // Catch errors
    console.log('woops! error here:', e);
  }
}

button.addEventListener('click', async () => {
  // Disable button
  button.disabled = true;
  // Start PIP
  await videoElement.requestPictureInPicture();
  // Reset Button
  button.disabled = false;
});

// On Load
selectMediaStream();
