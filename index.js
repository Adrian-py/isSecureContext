let testResults = "";

const addToTestResults = (string) => {
  document.getElementById("secure-context").innerText =
    document.getElementById("secure-context").innerText + string + "\n\n";
};

// Credentials
try {
  addToTestResults(`Credentials => ${window.navigator.credentials.create}`);
} catch (err) {
  addToTestResults(`Credentials => Error: ${err}`);
}

// Clipboard
try {
  const clipboardItems = await window.navigator.clipboard.readText();
  addToTestResults(`Clipboard => ${clipboardItems}`);
} catch (err) {
  addToTestResults(`Clipboard => Error: ${err}`);
}

// Storage
try {
  addToTestResults(`Storage => ${window.navigator.storage}`);
} catch (err) {
  addToTestResults(`Storage => Error: ${err}`);
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
