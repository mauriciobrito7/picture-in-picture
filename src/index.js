import './styles.css';
import './app.css';

const video = document.querySelector('#video');
const button = document.querySelector('#button');

async function selectMediaStream() {
 try {
  const mediaStream = await navigator.mediaDevices.getDisplayMedia();
  video.srcObject = mediaStream;
  video.onloadedmetadata = () => {
   video.play();
  };
 } catch (error) {
  console.error('Whoops, something went wrong:', error);
 }
}

button.addEventListener('click', async () => {
 button.disabled = true;
 await video.requestPictureInPicture();
 button.disabled = false;
});

selectMediaStream();
