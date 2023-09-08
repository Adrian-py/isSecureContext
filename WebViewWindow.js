window.ReactNativeWebView.postMessage(
  "\n\n         Secure Context Only Features in WebView"
);
window.ReactNativeWebView.postMessage(
  "============================================="
);
// Credentials
try {
  window.ReactNativeWebView.postMessage(
    `Credentials => ${window.navigator.credentials}`
  );
} catch (err) {
  window.ReactNativeWebView.postMessage(`Credentials => Error: ${err}`);
}

// Clipboard
try {
  window.ReactNativeWebView.postMessage(
    `Clipboard => ${window.navigator.clipboard}`
  );
} catch (err) {
  window.ReactNativeWebView.postMessage(`Clipboard => Error: ${err}`);
}

// Notification
try {
  const notification = new Notification();
  window.ReactNativeWebView.postMessage(`Notification => ${notification}`);
} catch (err) {
  window.ReactNativeWebView.postMessage(`Notification => Error: ${err}`);
}

// Geolocation
try {
  const geolocationCallback = (geolocation) => {
    window.ReactNativeWebView.postMessage(
      `Geolocation => ${geolocation.coords}`
    );
  };
  window.ReactNativeWebView.postMessage(
    `Geolocation => ${window.navigator.geolocation.getCurrentPosition(
      geolocationCallback
    )}`
  );
} catch (err) {
  window.ReactNativeWebView.postMessage(`Geolocation => Error: ${err}`);
}

// Web Share API
try {
  const sharableData = {
    title: "youtube",
    url: "https://youtube.com",
  };
  window.ReactNativeWebView.postMessage(
    `Web Share => ${window.navigator.canShare(sharableData)}`
  );
} catch (err) {
  window.ReactNativeWebView.postMessage(`Web Share => Error: ${err}`);
}

try {
  window.ReactNativeWebView.postMessage(
    `Current Browser Context is Secure => ${window.isSecureContext}`
  );
  document.getElementById(
    "secure-context"
  ).innerText = `Browser is Secure Context: ${window.isSecureContext}`;
} catch (err) {
  window.ReactNativeWebView.postMessage(
    `Current Browser Context is Secure => ${err}`
  );
}
