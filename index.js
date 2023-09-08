// const WebViewWindow = [
//   "window",
//   "self",
//   "document",
//   "name",
//   "location",
//   "customElements",
//   "history",
//   "locationbar",
//   "menubar",
//   "personalbar",
//   "scrollbars",
//   "statusbar",
//   "toolbar",
//   "status",
//   "closed",
//   "frames",
//   "length",
//   "top",
//   "opener",
//   "parent",
//   "frameElement",
//   "navigator",
//   "origin",
//   "external",
//   "screen",
//   "innerWidth",
//   "innerHeight",
//   "scrollX",
//   "pageXOffset",
//   "scrollY",
//   "pageYOffset",
//   "visualViewport",
//   "screenX",
//   "screenY",
//   "outerWidth",
//   "outerHeight",
//   "devicePixelRatio",
//   "clientInformation",
//   "screenLeft",
//   "screenTop",
//   "defaultStatus",
//   "defaultstatus",
//   "styleMedia",
//   "onsearch",
//   "isSecureContext",
//   "performance",
//   "onappinstalled",
//   "onbeforeinstallprompt",
//   "crypto",
//   "indexedDB",
//   "webkitStorageInfo",
//   "sessionStorage",
//   "localStorage",
//   "onbeforexrselect",
//   "onabort",
//   "onblur",
//   "oncancel",
//   "oncanplay",
//   "oncanplaythrough",
//   "onchange",
//   "onclick",
//   "onclose",
//   "oncontextlost",
//   "oncontextmenu",
//   "oncontextrestored",
//   "oncuechange",
//   "ondblclick",
//   "ondrag",
//   "ondragend",
//   "ondragenter",
//   "ondragleave",
//   "ondragover",
//   "ondragstart",
//   "ondrop",
//   "ondurationchange",
//   "onemptied",
//   "onended",
//   "onerror",
//   "onfocus",
//   "onformdata",
//   "oninput",
//   "oninvalid",
//   "onkeydown",
//   "onkeypress",
//   "onkeyup",
//   "onload",
//   "onloadeddata",
//   "onloadedmetadata",
//   "onloadstart",
//   "onmousedown",
//   "onmouseenter",
//   "onmouseleave",
//   "onmousemove",
//   "onmouseout",
//   "onmouseover",
//   "onmouseup",
//   "onmousewheel",
//   "onpause",
//   "onplay",
//   "onplaying",
//   "onprogress",
//   "onratechange",
//   "onreset",
//   "onresize",
//   "onscroll",
//   "onsecuritypolicyviolation",
//   "onseeked",
//   "onseeking",
//   "onselect",
//   "onslotchange",
//   "onstalled",
//   "onsubmit",
//   "onsuspend",
//   "ontimeupdate",
//   "ontoggle",
//   "onvolumechange",
//   "onwaiting",
//   "onwebkitanimationend",
//   "onwebkitanimationiteration",
//   "onwebkitanimationstart",
//   "onwebkittransitionend",
//   "onwheel",
//   "onauxclick",
//   "ongotpointercapture",
//   "onlostpointercapture",
//   "onpointerdown",
//   "onpointermove",
//   "onpointerup",
//   "onpointercancel",
//   "onpointerover",
//   "onpointerout",
//   "onpointerenter",
//   "onpointerleave",
//   "onselectstart",
//   "onselectionchange",
//   "onanimationend",
//   "onanimationiteration",
//   "onanimationstart",
//   "ontransitionrun",
//   "ontransitionstart",
//   "ontransitionend",
//   "ontransitioncancel",
//   "onafterprint",
//   "onbeforeprint",
//   "onbeforeunload",
//   "onhashchange",
//   "onlanguagechange",
//   "onmessage",
//   "onmessageerror",
//   "onoffline",
//   "ononline",
//   "onpagehide",
//   "onpageshow",
//   "onpopstate",
//   "onrejectionhandled",
//   "onstorage",
//   "onunhandledrejection",
//   "onunload",
//   "alert",
//   "atob",
//   "blur",
//   "btoa",
//   "cancelAnimationFrame",
//   "cancelIdleCallback",
//   "captureEvents",
//   "clearInterval",
//   "clearTimeout",
//   "close",
//   "confirm",
//   "createImageBitmap",
//   "fetch",
//   "find",
//   "focus",
//   "getComputedStyle",
//   "getSelection",
//   "matchMedia",
//   "moveBy",
//   "moveTo",
//   "open",
//   "postMessage",
//   "print",
//   "prompt",
//   "queueMicrotask",
//   "releaseEvents",
//   "reportError",
//   "requestAnimationFrame",
//   "requestIdleCallback",
//   "resizeBy",
//   "resizeTo",
//   "scroll",
//   "scrollBy",
//   "scrollTo",
//   "setInterval",
//   "setTimeout",
//   "stop",
//   "structuredClone",
//   "webkitCancelAnimationFrame",
//   "webkitRequestAnimationFrame",
//   "originAgentCluster",
//   "onorientationchange",
//   "orientation",
//   "trustedTypes",
//   "navigation",
//   "onpointerrawupdate",
//   "crossOriginIsolated",
//   "scheduler",
//   "onbeforematch",
//   "ontouchcancel",
//   "ontouchend",
//   "ontouchmove",
//   "ontouchstart",
//   "ReactNativeWebView",
//   "isNativeApp",
// ];

// const DomWindow = Object.keys(window);

// let KeyExists = new Map();

// DomWindow.forEach((key) => {
//   KeyExists[key] = true;
// });

// const WebViewWindowHas = [],
//   WindowDOMHas = [];

// WebViewWindow.forEach((key) => {
//   if (!KeyExists[key]) WebViewWindowHas.push(key);
// });
// console.log("WebView Has:", WebViewWindowHas);

// KeyExists = new Map();

// WebViewWindow.forEach((key) => {
//   KeyExists[key] = true;
// });
// DomWindow.forEach((key) => {
//   if (!KeyExists[key]) WindowDOMHas.push(key);
// });

// console.log("Window Dom Has:", WindowDOMHas);

// console.log(WebViewWindow.length);
// console.log(DomWindow.length);
// console.log(window.navigator);
// console.log(window.credentialless);
// // window.location = ("https://youtube.com");

let testResults = `Browser is Secure Context: ${window.isSecureContext}\n`;

const addToTestResults = (string) => {
  document.getElementById("secure-context").innerText =
    document.getElementById("secure-context").innerText + string + "\n";
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
