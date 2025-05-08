// To inject the iframe on the screen

const cameraId = "camera";
const camera = document.getElementById(cameraId);

if (camera) {
  console.log("camera-found", cameraId);
} else {
  const cameraElement = document.createElement("iframe");
  cameraElement.id = cameraId;
  cameraElement.setAttribute(
    "style",
    `     
         all : initial;
         position: fixed; 
         top:10px; 
         right:10px; 
         width:200px; 
         height:200px; 
         border-radius: 50%;
         background-color: black;
         border:none;
         z-index : 1000;
         `
  );
  
  cameraElement.src = chrome.runtime.getURL('camera.html');
  // set permissions for camera and microphone;
  cameraElement.setAttribute('allow' , 'camera; microphone') 
  document.body.appendChild(cameraElement);
}
