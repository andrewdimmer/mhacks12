import axios from "axios";

const urlRoot = "https://us-central1-mhacks12-gcp.cloudfunctions.net";
export const getGenres = (
  setGenreOptions: Function,
  setLikedGenres: Function,
  displayErrorMessage: Function
): void => {
  axios(`${urlRoot}/getGenres`)
    .then(newGenres => {
      console.log("newGenres", newGenres);
      setGenreOptions(newGenres.data);
      setLikedGenres(
        newGenres.data.map(() => {
          return false;
        })
      );
    })
    .catch(err => {
      console.log("Unable to get genres, ", err);
      displayErrorMessage({
        message: "Unable to get genres. Please refresh the page.",
        type: "error"
      });
    });
};

export const getArtists = (
  setArtistOptions: Function,
  setLikedArtists: Function,
  displayErrorMessage: Function
): void => {
  axios(`${urlRoot}/getArtists`)
    .then(newArtists => {
      console.log("newArtists", newArtists);
      setArtistOptions(newArtists.data);
      setLikedArtists(
        newArtists.data.map(() => {
          return false;
        })
      );
    })
    .catch(err => {
      console.log("Unable to get artists, ", err);
      displayErrorMessage({
        message: "Unable to get artists. Please refresh the page.",
        type: "error"
      });
    });
};
