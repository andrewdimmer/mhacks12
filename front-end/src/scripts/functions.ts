import axios from "axios";
import rp from "request-promise";
import { Genre, Artist } from "../../@Types";

const urlRoot = "https://us-central1-mhacks12-gcp.cloudfunctions.net";
export const getGenres = (
  setGenreOptions: Function,
  setLikedGenres: Function,
  displayErrorMessage: Function
): void => {
  // FIXME: Hard Coded now because the cache needs to be fixed for the function call/
  const newGenres = {
    data: [
      { key: "pop", label: "Pop" },
      { key: "country", label: "Country" },
      { key: "rock", label: "Rock" },
      { key: "rap", label: "Rap" },
      { key: "dance", label: "Dance" },
      { key: "classical", label: "Classical" },
      { key: "blues", label: "Blues" }
    ]
  };
  // axios(`${urlRoot}/getGenres?time=${Date.now()}`)
  //  .then(newGenres => {
  setGenreOptions(newGenres.data);
  setLikedGenres(
    newGenres.data.map(() => {
      return false;
    })
  );
  /*})
    .catch(err => {
      console.log("Unable to get genres, ", err);
      displayErrorMessage({
        message: "Unable to get genres. Please refresh the page.",
        type: "error",
        open: true,
        update: displayErrorMessage
      });
    }); */
};

export const getArtists = (
  setArtistOptions: Function,
  setLikedArtists: Function,
  displayErrorMessage: Function,
  genres: Genre[],
  liked: boolean[]
): void => {
  // FIXME: Replace with functions again once I figure out what is wrong with the cache
  const artistList: { [key: string]: Artist[] } = {
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
  const output: Artist[] = [];
  for (let i = 0; i < genres.length; i++) {
    if (liked[i]) {
      for (const artist of artistList[genres[i].key]) {
        if (output.indexOf(artist) < 0) {
          output.splice(Math.floor(Math.random() * output.length), 0, artist);
        }
      }
    }
  }
  const newArtists = { data: output };
  /* var options = {
    method: "POST",
    uri: `${urlRoot}/getArtists?time=${Date.now()}`,
    body: {
      liked
    },
    json: true // Automatically stringifies the body to JSON
  };
  rp(options)
    .then(newArtists => { */
  setArtistOptions(newArtists.data);
  setLikedArtists(
    newArtists.data.map(() => {
      return false;
    })
  );
  /*})
    .catch(err => {
      console.log("Unable to get artists, ", err);
      displayErrorMessage({
        message: "Unable to get artists. Please refresh the page.",
        type: "error",
        open: true,
        update: displayErrorMessage
      });
    }); */
};
