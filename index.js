let testResults = "";

const addToTestResults = (string) => {
  document.getElementById("secure-context").innerText =
    document.getElementById("secure-context").innerText + string + "\n\n";
};

addToTestResults(`Secure Context => ${window.isSecureContext}`);

// Credentials
try {
  addToTestResults(`Credentials => ${window.navigator.credentials}`);
} catch (err) {
  addToTestResults(`Credentials => Error: ${err}`);
}

// Clipboard
try {
  const clipboardItems = await window.navigator.clipboard.read();
  addToTestResults(`Clipboard => ${clipboardItems}`);
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

// Geolocation
try {
  let geoLocationResults;
  const geolocationCallback = async (geolocation) => {
    geoLocationResults = geolocation.coords;
    addToTestResults(`Geolocation => ${geoLocationResults}`);
  };
  window.navigator.geolocation.getCurrentPosition(geolocationCallback);
  addToTestResults(
    "Geolocation \n(should showup after location permission granted)"
  );
} catch (err) {
  addToTestResults(`Geolocation => Error: ${err}`);
}
