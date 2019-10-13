import * as functions from "firebase-functions";

export const getGenresFunction = functions.https.onRequest(
  (request, response) => {
    response.setHeader("Access-Control-Allow-Origin", "*"); // TODO: Make more secure later!
    response.send([
      { key: "rock", label: "Rock" },
      { key: "classical", label: "Classical" },
      { key: "pop", label: "Pop" }
    ]);
  }
);

export const getArtistsFunction = functions.https.onRequest(
  (request, response) => {
    response.setHeader("Access-Control-Allow-Origin", "*"); // TODO: Make more secure later!
    response.send([
      { key: "bob", label: "Bob" },
      { key: "joe", label: "Joe" },
      { key: "jane", label: "Jane" }
    ]);
  }
);
