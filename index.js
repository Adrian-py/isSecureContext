let testResults = `Browser is Secure Context: ${window.isSecureContext}\n`;

const addToTestResults = (string) => {
  document.getElementById("secure-context").innerText =
    document.getElementById("secure-context").innerText + string + "\n\n";
};

addToTestResults("Secure Context Only Features");
addToTestResults("=======================================");
// Credentials
try {
  addToTestResults(`Credentials => ${window.navigator.credentials}`);
} catch (err) {
  addToTestResults(`Credentials => Error: ${err}`);
}

// Clipboard
try {
  addToTestResults(`Clipboard => ${window.navigator.clipboard}`);
} catch (err) {
  addToTestResults(`Clipboard => Error: ${err}`);
}

// Notification
try {
  const notification = new Notification("test");
  addToTestResults(`Notification => ${notification}`);
} catch (err) {
  addToTestResults(`Notification => Error: ${err}`);
}

// Geolocation
try {
  const geolocationCallback = async (geolocation) => {
    addToTestResults(`Geolocation => ${geolocation.coords}`);
  };

  addToTestResults(
    `Geolocation => ${await window.navigator.geolocation.getCurrentPosition(
      geolocationCallback
    )}`
  );
} catch (err) {
  addToTestResults(`Geolocation => Error: ${err}`);
}

// Web Share API
try {
  const sharableData = {
    title: "youtube",
    url: "https://youtube.com",
  };
  addToTestResults(`Web Share => ${window.navigator.canShare(sharableData)}`);
} catch (err) {
  addToTestResults(`Web Share => Error: ${err}`);
}

addToTestResults(
  `Current Browser Context is Secure => ${window.isSecureContext}`
);
// document.getElementById("secure-context").innerText = testResults;
