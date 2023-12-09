//Your OneSignal Code Here
window.OneSignal = window.OneSignal || [];
OneSignal.push(function () {
  OneSignal.SERVICE_WORKER_PARAM = { scope: "/mbaye/" };
  OneSignal.SERVICE_WORKER_PATH = "mbaye/OneSignalSDKWorker.js";
  OneSignal.init({
    appId: "be18a344-2f26-4152-a30c-dcb813f8905d",
    notifyButton: {
      enable: true,
      size: "small",
      position: "bottom-left",
    },
    persistNotification: true,
    autoResubscribe: true,
  });
});
