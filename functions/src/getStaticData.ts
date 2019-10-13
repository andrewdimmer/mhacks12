import * as functions from "firebase-functions";
import { Artist } from "../@Types";

export const getGenresFunction = functions.https.onRequest(
  (request, response) => {
    response.setHeader("Access-Control-Allow-Origin", "*"); // TODO: Make more secure later!
    response.send([
      { key: "pop", label: "Pop" },
      { key: "country", label: "Country" },
      { key: "rock", label: "Rock" },
      { key: "rap", label: "Rap" },
      { key: "dance", label: "Dance" },
      { key: "classical", label: "Classical" },
      { key: "blues", label: "Blues" }
    ]);
  }
);

export const getArtistsFunction = functions.https.onRequest(
  (request, response) => {
    // Pulled from Billboard's Top 100 list for each genre
    // TODO: Use a bot to scrap this automatically...
    const artists: { [key: string]: Artist[] } = {
      pop: [
        { key: "postmalone", label: "Post Malone" },
        { key: "dualipa", label: "Dua Lipa" },
        { key: "camilacabello", label: "Camila Cabello" },
        { key: "arianagrande", label: "Ariana Grande" },
        { key: "maroon5", label: "Maroon 5" },
        { key: "halsey", label: "Halsey" },
        { key: "drake", label: "Drake" },
        { key: "imaginedragons", label: "Imagine Dragons" },
        { key: "selenagomez", label: "Selena Gomez" },
        { key: "nf", label: "NF" }
      ],
      country: [
        { key: "chrisstapleton", label: "Chris Stapleton" },
        { key: "kanebrown", label: "Kane Brown" },
        { key: "floridageorgialine", label: "Florida Georgia Line" },
        { key: "lukecombs", label: "Luke Combs" },
        { key: "thomasrhett", label: "Thomas Rhett" },
        { key: "lukebryan", label: "Luke Bryan" },
        { key: "jasonaldean", label: "Jason Aldean" },
        { key: "danshay", label: "Dan + Shay" },
        { key: "kennychesney", label: "Kenny Chesney" },
        { key: "blakeshelton", label: "Blake Shelton" }
      ],
      rock: [
        { key: "imaginedragons", label: "Imagine Dragons" },
        { key: "portugaltheman", label: "Portugal. The Man" },
        { key: "panicatthedisco", label: "Panic! At The Disco" },
        { key: "twentyonepilots", label: "twenty one pilots" },
        { key: "fivefingerdeathpunch", label: "Five Finger Death Punch" },
        { key: "queen", label: "Queen" },
        { key: "fosterthepeople", label: "Foster The People" },
        { key: "lovelytheband", label: "lovelytheband" },
        { key: "badwolves", label: "Bad Wolves" },
        { key: "thebeatles", label: "The Beatles" }
      ],
      rap: [
        { key: "drake", label: "Drake" },
        { key: "cardib", label: "Cardi B" },
        { key: "postmalone", label: "Post Malone" },
        { key: "migos", label: "Migos" },
        { key: "kendricklamar", label: "Kendrick Lamar" },
        { key: "nickiminaj", label: "Nicki Minaj" },
        { key: "geazy", label: "G-Eazy" },
        { key: "blocboyjb", label: "BlocBoy JB" },
        { key: "richthekid", label: "Rich The Kid" },
        { key: "travisscott", label: "Travis Scott" }
      ],
      dance: [
        { key: "thechainsmokers", label: "The Chainsmokers" },
        { key: "kygo", label: "Kygo" },
        { key: "calvinharris", label: "Calvin Harris" },
        { key: "odesza", label: "ODESZA" },
        { key: "ladygaga", label: "Lady Gaga" },
        { key: "avicii", label: "Avicii" },
        { key: "davidguetta", label: "David Guetta" },
        { key: "daftpunk", label: "Daft Punk" },
        { key: "gorillaz", label: "Gorillaz" },
        { key: "majorlazer", label: "Major Lazer" }
      ],
      classical: [
        { key: "andreabocelli", label: "Andrea Bocelli" },
        { key: "lindseystirling", label: "Lindsey Stirling" },
        { key: "evanescence", label: "Evanescence" },
        { key: "thepianoguys", label: "The Piano Guys" },
        { key: "londonsymphonyorchestra", label: "London Symphony Orchestra" },
        { key: "johnwilliams", label: "John Williams" },
        {
          key: "royalphilharmonicorchestra",
          label: "Royal Philharmonic Orchestra"
        },
        { key: "elvispresley", label: "Elvis Presley" },
        { key: "shekukannehmason", label: "Sheku Kanneh-Mason" },
        { key: "foreigner", label: "Foreigner" }
      ],
      blue: [
        { key: "joebonamassa", label: "Joe Bonamassa" },
        { key: "buddyguy", label: "Buddy Guy" },
        { key: "bozscaggs", label: "Boz Scaggs" },
        { key: "billygibbons", label: "Billy Gibbons" },
        { key: "bethhart", label: "Beth Hart" },
        { key: "therollingstones", label: "The Rolling Stones" },
        { key: "wennywayneshepherd", label: "Kenny Wayne Shepherd" },
        { key: "samanthafish", label: "Samantha Fish" },
        { key: "bluesbrothers", label: "Blues Brothers" },
        { key: "paulthorn", label: "Paul Thorn" }
      ]
    };
    const genres: string = request.body.genres;
    const output: Artist[] = [];
    for (const genre of genres) {
      for (const artist of artists[genre]) {
        if (output.indexOf(artist) < 0) {
          output.splice(Math.floor(Math.random() * output.length), 0, artist);
        }
      }
    }
    response.setHeader("Access-Control-Allow-Origin", "*"); // TODO: Make more secure later!
    response.send(output);
  }
);
