let testResults = "";

const addToTestResults = (string) => {
  document.getElementById("secure-context").innerText =
    document.getElementById("secure-context").innerText + string + "\n\n";
};

// Credentials
addToTestResults(`Credentials should show up after create credentials`);
var createCredentialDefaultArgs = {
  publicKey: {
    // Relying Party (a.k.a. - Service):
    rp: {
      name: "Acme",
    },

    // User:
    user: {
      id: new Uint8Array(16),
      name: "john.p.smith@example.com",
      displayName: "John P. Smith",
    },

    pubKeyCredParams: [
      {
        type: "public-key",
        alg: -7,
      },
    ],

    attestation: "direct",

    timeout: 60000,

    challenge: new Uint8Array([
      // must be a cryptographically random number sent from a server
      0x8c, 0x0a, 0x26, 0xff, 0x22, 0x91, 0xc1, 0xe9, 0xb9, 0x4e, 0x2e, 0x17,
      0x1a, 0x98, 0x6a, 0x73, 0x71, 0x9d, 0x43, 0x48, 0xd5, 0xa7, 0x6a, 0x15,
      0x7e, 0x38, 0x94, 0x52, 0x77, 0x97, 0x0f, 0xef,
    ]).buffer,
  },
};

// sample arguments for login
var getCredentialDefaultArgs = {
  publicKey: {
    timeout: 60000,
    // allowCredentials: [newCredential] // see below
    challenge: new Uint8Array([
      // must be a cryptographically random number sent from a server
      0x79, 0x50, 0x68, 0x71, 0xda, 0xee, 0xee, 0xb9, 0x94, 0xc3, 0xc2, 0x15,
      0x67, 0x65, 0x26, 0x22, 0xe3, 0xf3, 0xab, 0x3b, 0x78, 0x2e, 0xd5, 0x6f,
      0x81, 0x26, 0xe2, 0xa6, 0x01, 0x7d, 0x74, 0x50,
    ]).buffer,
  },
};

// register / create a new credential
navigator.credentials
  .create(createCredentialDefaultArgs)
  .then((cred) => {
    console.log("NEW CREDENTIAL", cred);

    // normally the credential IDs available for an account would come from a server
    // but we can just copy them from above...
    var idList = [
      {
        id: cred.rawId,
        transports: ["usb", "nfc", "ble"],
        type: "public-key",
      },
    ];
    getCredentialDefaultArgs.publicKey.allowCredentials = idList;
    return navigator.credentials.get(getCredentialDefaultArgs);
  })
  .then((assertion) => {
    addToTestResults(`Credentials => ${window.navigator.credentials.create}`);
  })
  .catch((err) => {
    addToTestResults(`Credentials => Error: ${err}`);
  });

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
