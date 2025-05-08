const cameraSetup = async () => {
  const cameraElement = document.querySelector("#camera");
  console.log("cameraElement", cameraElement);

  const permissions = await navigator.permissions.query({
    name: "camera",
  });

  if (permissions.state === "prompt") {
    await navigator.mediaDevices.getUserMedia({ audio: true, video: true });
    return;
  } else if (permissions.state === "denied") {
    alert("camera permissions denied");
    return;
  }

  console.log(permissions);

  const startCamera = async () => {
    const videoElement = document.createElement("video");
    videoElement.setAttribute(
      "style",
      `  
         height: 200px;
         border-radius : 100px; 
         transform : scaleX(-1);
        `
    );

    videoElement.setAttribute("autoplay", true);
    videoElement.setAttribute("muted", true);
    const cameraStream = await navigator.mediaDevices.getUserMedia({
      audio: false,
      video: true,
    });

    videoElement.srcObject = cameraStream;

    cameraElement.appendChild(videoElement);
  };
  startCamera();
};
cameraSetup();
