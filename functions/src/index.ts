import * as functions from "firebase-functions";
import { getGenresFunction, getArtistsFunction } from "./getStaticData";
import { addSpaceFunction, removeSpaceFunction } from "./updateSpace";

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
export const helloWorld = functions.https.onRequest((request, response) => {
  response.setHeader("Access-Control-Allow-Origin", "*"); // TODO: Make more secure later!
  response.send("Hello from Firebase!");
});

export const getGenres = getGenresFunction;
export const getArtists = getArtistsFunction;
export const addSpace = addSpaceFunction;
export const removeSpace = removeSpaceFunction;
