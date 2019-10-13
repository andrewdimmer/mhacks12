import * as firebase from "firebase/app";
import "firebase/firestore";

const firebaseInit = (
  handleChangeSpaceOptions: Function,
  handleChangeNowPlaying: Function,
  displayErrorMessage: Function
) => {
  const firebaseApp = firebase.initializeApp({
    apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASEURL,
    projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID,
    appId: process.env.REACT_APP_FIREBASE_APPID
  });

  //Both Google Cloud PubSub and Firebase Messaging don't work for client side react,
  // therefore use a listen for firestore directly.
  const firestore = firebaseApp.firestore();

  const spaces_ref = firestore.collection("spaces").doc("LIST_OF_SPACES");
  spaces_ref.onSnapshot(
    snapshot => {
      const data = snapshot.data();
      if (data) {
        handleChangeSpaceOptions(data.LIST_OF_SPACES);
      } else {
        displayErrorMessage({
          message:
            "Unable to read spaces from Firebase. Please refresh the page.",
          type: "error",
          open: true,
          update: displayErrorMessage
        });
      }
    },
    err => {
      console.log(err);
      displayErrorMessage({
        message:
          "Unable to read spaces from Firebase. Please refresh the page.",
        type: "error",
        open: true,
        update: displayErrorMessage
      });
    }
  );
};

export default firebaseInit;
