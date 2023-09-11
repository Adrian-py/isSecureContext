let testResults = "";

const addToTestResults = (string, type = 1) => {
  let textInput = string + "<br>";

  if (type == 0) {
    textInput = `<br><b>${textInput}</b>`;
  }

  document.getElementById("secure-context").innerHTML =
    document.getElementById("secure-context").innerHTML + textInput;
};

// Clipboard
addToTestResults("Clipboard", 0);
try {
  const clipboardItems = await window.navigator.clipboard.readText();
  addToTestResults(`<b>Items you recently copied</b>: <br>${clipboardItems}`);
} catch (err) {
  addToTestResults(`Error: ${err}`);
}

// Storage
addToTestResults("Storage", 0);
try {
  localStorage.setItem("item_key", "local_storage_value");
  addToTestResults(
    `Retrieved from local storage: <i>${localStorage.getItem("item_key")}</i>`
  );
} catch (err) {
  addToTestResults(`Error: ${err}`);
}

// Web Share API
addToTestResults("Web Share", 0);
try {
  const sharableData = {
    title: "youtube",
    url: "https://youtube.com",
  };
  addToTestResults(
    `Can Share Method: <i>${window.navigator.canShare(sharableData)}</i>`
  );
} catch (err) {
  addToTestResults(`Error: ${err}`);
}

// Geolocation
addToTestResults("Geolocation", 0);
try {
  const getLocation = async () => {
    const location = await new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });

    return location;
  };

  addToTestResults(`Current Location: ${await getLocation()}`);
} catch (err) {
  addToTestResults(`Error: ${err}`);
}

// Credentials
addToTestResults("Credentials", 0);
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
await navigator.credentials
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
    addToTestResults(`${window.navigator.credentials.create}`);
  })
  .catch((err) => {
    addToTestResults(`Error: ${err}`);
  })
  .finally(() => {
    addToTestResults(`Unable to get credentials`);
  });
