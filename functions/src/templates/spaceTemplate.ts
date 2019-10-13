import { ArtistWtihUsers } from "../../@Types";

const spaceFirebaseObjectTemplate: {
  spaceName: string;
  nowPlaying: ArtistWtihUsers;
  artistsWithUsers: { [key: string]: ArtistWtihUsers };
} = {
  spaceName: "",
  nowPlaying: { key: "", label: "", users: [] },
  artistsWithUsers: {
    postmalone: { key: "postmalone", label: "Post Malone", users: [] },
    dualipa: { key: "dualipa", label: "Dua Lipa", users: [] },
    camilacabello: { key: "camilacabello", label: "Camila Cabello", users: [] },
    arianagrande: { key: "arianagrande", label: "Ariana Grande", users: [] },
    maroon5: { key: "maroon5", label: "Maroon 5", users: [] },
    halsey: { key: "halsey", label: "Halsey", users: [] },
    drake: { key: "drake", label: "Drake", users: [] },
    imaginedragons: {
      key: "imaginedragons",
      label: "Imagine Dragons",
      users: []
    },
    selenagomez: { key: "selenagomez", label: "Selena Gomez", users: [] },
    nf: { key: "nf", label: "NF", users: [] },
    chrisstapleton: {
      key: "chrisstapleton",
      label: "Chris Stapleton",
      users: []
    },
    kanebrown: { key: "kanebrown", label: "Kane Brown", users: [] },
    floridageorgialine: {
      key: "floridageorgialine",
      label: "Florida Georgia Line",
      users: []
    },
    lukecombs: { key: "lukecombs", label: "Luke Combs", users: [] },
    thomasrhett: { key: "thomasrhett", label: "Thomas Rhett", users: [] },
    lukebryan: { key: "lukebryan", label: "Luke Bryan", users: [] },
    jasonaldean: { key: "jasonaldean", label: "Jason Aldean", users: [] },
    danshay: { key: "danshay", label: "Dan + Shay", users: [] },
    kennychesney: { key: "kennychesney", label: "Kenny Chesney", users: [] },
    blakeshelton: { key: "blakeshelton", label: "Blake Shelton", users: [] },
    portugaltheman: {
      key: "portugaltheman",
      label: "Portugal. The Man",
      users: []
    },
    panicatthedisco: {
      key: "panicatthedisco",
      label: "Panic! At The Disco",
      users: []
    },
    twentyonepilots: {
      key: "twentyonepilots",
      label: "twenty one pilots",
      users: []
    },
    fivefingerdeathpunch: {
      key: "fivefingerdeathpunch",
      label: "Five Finger Death Punch",
      users: []
    },
    queen: { key: "queen", label: "Queen", users: [] },
    fosterthepeople: {
      key: "fosterthepeople",
      label: "Foster The People",
      users: []
    },
    lovelytheband: { key: "lovelytheband", label: "lovelytheband", users: [] },
    badwolves: { key: "badwolves", label: "Bad Wolves", users: [] },
    thebeatles: { key: "thebeatles", label: "The Beatles", users: [] },
    cardib: { key: "cardib", label: "Cardi B", users: [] },
    migos: { key: "migos", label: "Migos", users: [] },
    kendricklamar: { key: "kendricklamar", label: "Kendrick Lamar", users: [] },
    nickiminaj: { key: "nickiminaj", label: "Nicki Minaj", users: [] },
    geazy: { key: "geazy", label: "G-Eazy", users: [] },
    blocboyjb: { key: "blocboyjb", label: "BlocBoy JB", users: [] },
    richthekid: { key: "richthekid", label: "Rich The Kid", users: [] },
    travisscott: { key: "travisscott", label: "Travis Scott", users: [] },
    thechainsmokers: {
      key: "thechainsmokers",
      label: "The Chainsmokers",
      users: []
    },
    kygo: { key: "kygo", label: "Kygo", users: [] },
    calvinharris: { key: "calvinharris", label: "Calvin Harris", users: [] },
    odesza: { key: "odesza", label: "ODESZA", users: [] },
    ladygaga: { key: "ladygaga", label: "Lady Gaga", users: [] },
    avicii: { key: "avicii", label: "Avicii", users: [] },
    davidguetta: { key: "davidguetta", label: "David Guetta", users: [] },
    daftpunk: { key: "daftpunk", label: "Daft Punk", users: [] },
    gorillaz: { key: "gorillaz", label: "Gorillaz", users: [] },
    majorlazer: { key: "majorlazer", label: "Major Lazer", users: [] },
    andreabocelli: { key: "andreabocelli", label: "Andrea Bocelli", users: [] },
    lindseystirling: {
      key: "lindseystirling",
      label: "Lindsey Stirling",
      users: []
    },
    evanescence: { key: "evanescence", label: "Evanescence", users: [] },
    thepianoguys: { key: "thepianoguys", label: "The Piano Guys", users: [] },
    londonsymphonyorchestra: {
      key: "londonsymphonyorchestra",
      label: "London Symphony Orchestra",
      users: []
    },
    johnwilliams: { key: "johnwilliams", label: "John Williams", users: [] },
    royalphilharmonicorchestra: {
      key: "royalphilharmonicorchestra",
      label: "Royal Philharmonic Orchestra",
      users: []
    },
    elvispresley: { key: "elvispresley", label: "Elvis Presley", users: [] },
    shekukannehmason: {
      key: "shekukannehmason",
      label: "Sheku Kanneh-Mason",
      users: []
    },
    foreigner: { key: "foreigner", label: "Foreigner", users: [] },
    joebonamassa: { key: "joebonamassa", label: "Joe Bonamassa", users: [] },
    buddyguy: { key: "buddyguy", label: "Buddy Guy", users: [] },
    bozscaggs: { key: "bozscaggs", label: "Boz Scaggs", users: [] },
    billygibbons: { key: "billygibbons", label: "Billy Gibbons", users: [] },
    bethhart: { key: "bethhart", label: "Beth Hart", users: [] },
    therollingstones: {
      key: "therollingstones",
      label: "The Rolling Stones",
      users: []
    },
    wennywayneshepherd: {
      key: "wennywayneshepherd",
      label: "Kenny Wayne Shepherd",
      users: []
    },
    samanthafish: { key: "samanthafish", label: "Samantha Fish", users: [] },
    bluesbrothers: { key: "bluesbrothers", label: "Blues Brothers", users: [] },
    paulthorn: { key: "paulthorn", label: "Paul Thorn", users: [] }
  }
};
export default spaceFirebaseObjectTemplate;
