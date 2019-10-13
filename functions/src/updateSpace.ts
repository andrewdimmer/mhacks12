import * as functions from "firebase-functions";
import * as firebase from "firebase";

const firebaseApp = firebase.initializeApp(
  JSON.parse(process.env.FIREBASE_CONFIG as string)
);

export const addSpaceFunction = functions.https.onRequest(
  (request, response) => {
    try {
      const body = request.body;
      const ref = firebaseApp
        .firestore()
        .collection("spaces")
        .doc("LIST_OF_SPACES");
      ref
        .get()
        .then(value => {
          const data = value.data();
          if (data && data.LIST_OF_SPACES) {
            console.log(body.spaceOptionName);
            if (data.LIST_OF_SPACES.indexOf(body.spaceOptionName) < 0) {
              data.LIST_OF_SPACES.push(body.spaceOptionName);
              ref
                .update(data)
                .then(() => {
                  response.setHeader("Access-Control-Allow-Origin", "*"); // TODO: Make more secure later!
                  response.send("Successfully Added Space Name Option!");
                })
                .catch(() => {
                  response.setHeader("Access-Control-Allow-Origin", "*"); // TODO: Make more secure later!
                  response.status(500).send("Unable to update Firebase data!");
                });
            } else {
              response.setHeader("Access-Control-Allow-Origin", "*"); // TODO: Make more secure later!
              response.send("Space already exists, no update required!");
            }
          } else {
            response.setHeader("Access-Control-Allow-Origin", "*"); // TODO: Make more secure later!
            response.status(500).send("Firebase object has no data!");
          }
        })
        .catch(err => {
          console.log(err);
          response.setHeader("Access-Control-Allow-Origin", "*"); // TODO: Make more secure later!
          response.status(500).send("Unable to get firebase object!");
        });
    } catch (err) {
      console.log(err);
      response.setHeader("Access-Control-Allow-Origin", "*"); // TODO: Make more secure later!
      response.status(500).send("Invalid input!");
    }
  }
);

export const removeSpaceFunction = functions.https.onRequest(
  (request, response) => {
    try {
      const body = request.body;
      const ref = firebaseApp
        .firestore()
        .collection("spaces")
        .doc("LIST_OF_SPACES");
      ref
        .get()
        .then(value => {
          const data = value.data();
          if (data && data.LIST_OF_SPACES) {
            console.log(body.spaceOptionName);
            if (data.LIST_OF_SPACES.indexOf(body.spaceOptionName) >= 0) {
              data.LIST_OF_SPACES.splice(
                data.LIST_OF_SPACES.indexOf(body.spaceOptionName)
              );
              ref
                .update(data)
                .then(() => {
                  response.setHeader("Access-Control-Allow-Origin", "*"); // TODO: Make more secure later!
                  response.send("Successfully Removed Space Name Option!");
                })
                .catch(() => {
                  response.setHeader("Access-Control-Allow-Origin", "*"); // TODO: Make more secure later!
                  response.status(500).send("Unable to update Firebase data!");
                });
            } else {
              response.setHeader("Access-Control-Allow-Origin", "*"); // TODO: Make more secure later!
              response.send(
                "Space already does not exist, no update required!"
              );
            }
          } else {
            response.setHeader("Access-Control-Allow-Origin", "*"); // TODO: Make more secure later!
            response.status(500).send("Firebase object has no data!");
          }
        })
        .catch(err => {
          console.log(err);
          response.setHeader("Access-Control-Allow-Origin", "*"); // TODO: Make more secure later!
          response.status(500).send("Unable to get firebase object!");
        });
    } catch (err) {
      console.log(err);
      response.setHeader("Access-Control-Allow-Origin", "*"); // TODO: Make more secure later!
      response.status(500).send("Invalid input!");
    }
  }
);
