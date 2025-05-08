const cameraSetup = async () => {
  const cameraElement = document.querySelector("#camera");
  console.log("cameraElement", cameraElement);

  const permissions = await navigator.permissions.query({
    name: "camera",
  });

  if (permissions.state === "prompt") {
    await navigator.mediaDevices.getUserMedia({ audio: true, video: true });
    
  }
  else if (permissions.state === "denied") {
    alert("camera permissions denied"); 
    
  }

  console.log(permissions);
};
cameraSetup();
