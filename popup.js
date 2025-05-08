const executeScript = async () => {
  // inject content.js whenever user clicks on the extension
  const tab = await chrome.tabs.query({ active: true, currentWindow: true });
  if (!tab) {
    return;
  }

  const tabId = tab[0].id;
  console.log("injecting tab", tabId);
  await chrome.scripting
    .executeScript({
      target: { tabId },
      files: ["content.js"],
    })
    .then(() => console.log("script injected"));
};


executeScript();