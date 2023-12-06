//Your OneSignal Code Here
window.OneSignal = window.OneSignal || [];
OneSignal.push(function () {
  OneSignal.SERVICE_WORKER_PARAM = { scope: "/mbaye/push/" };
  OneSignal.SERVICE_WORKER_PATH = "mbaye/push/OneSignalSDKWorker.js";
  OneSignal.init({
    appId: "835258e4-e7b5-4c3b-a87f-b65121118dbb",
    safari_web_id: "web.onesignal.auto.4dbe0dd2-36c1-4474-980b-740086f7dd0e",
    notifyButton: {
      enable: true,
      size: "small",
      position: "bottom-left",
    },
    allowLocalhostAsSecureOrigin: true,
    subdomainName: "mbaye12",
  });
});
