import * as functions from "firebase-functions";

export const getGenresFunction = functions.https.onRequest(
  (request, response) => {
    response.send([
      { key: "rock", label: "Rock" },
      { key: "classical", label: "Classical" },
      { key: "pop", label: "Pop" }
    ]);
  }
);

export const getArtistsFunction = functions.https.onRequest(
  (request, response) => {
    response.send([
      { key: "bob", label: "Bob" },
      { key: "joe", label: "Joe" },
      { key: "jane", label: "Jane" }
    ]);
  }
);
