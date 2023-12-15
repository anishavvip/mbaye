import "./App.css";
// import OneSignal from 'react-onesignal';
import { useEffect } from "react";
function App() {
  useEffect(() => {
    window.OneSignal = window.OneSignal || [];
    const OneSignal = window.OneSignal;
    OneSignal.push(() => {
      OneSignal.setExternalUserId("89898");
      OneSignal.init({
        appId: "be18a344-2f26-4152-a30c-dcb813f8905d", //STEP 9
        promptOptions: {
          slidedown: {
            enabled: true,
            actionMessage: "Incoming call...",
            acceptButtonText: "Accept",
            cancelButtonText: "Decline",
          },
        },
        // welcomeNotification: {
        //   title: "One Signal",
        //   message: "Thanks for subscribing!",
        // },
      });
    });
  }, []);
  return (
    <h1> </h1>
  );
}

export default App;
