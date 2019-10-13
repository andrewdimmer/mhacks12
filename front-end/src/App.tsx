import { Container, Typography, Snackbar } from "@material-ui/core";
import React, { Fragment } from "react";
import Loading from "./Components/Notifications/Loading";
import Spaces from "./Components/Pages/Spaces";
import { styles } from "./Styles";
import { THEME } from "./Styles/theme";
import { getGenres, getArtists } from "./scripts/functions";
import CustomizedSnackbars, {
  MessageProps
} from "./Components/Notifications/Snackbars";
import { Genre, Artist } from "../@Types";
import firebaseInit from "./scripts/firebase";
import Genres from "./Components/Pages/Genres";
import Artists from "./Components/Pages/Artists";

export enum STAGES {
  "SPACE",
  "GENRE",
  "ARTIST",
  "PLAYING"
}

const App: React.FunctionComponent = () => {
  // Styles
  const classes = styles(THEME);

  // State and Props
  const [loadingMessage, setLoadingMessage] = React.useState(
    "Loading Nearby Spaces..."
  );
  const [notification, setNotification] = React.useState<MessageProps>({
    message: "",
    type: "info",
    open: false,
    update: () => {}
  });
  const [loaded, setLoaded] = React.useState(false);
  const [stage, setStage] = React.useState(STAGES.SPACE);
  const [spaceOptions, setSpaceOptions] = React.useState<string[]>([]);
  const [spaceName, setSpaceName] = React.useState("");
  const [genreOptions, setGenreOptions] = React.useState<Genre[]>([]);
  const [likedGenres, setLikedGenres] = React.useState<boolean[]>([]);
  const [artistOptions, setArtistOptions] = React.useState<Artist[]>([]);
  const [likedArtists, setLikedArtists] = React.useState<boolean[]>([]);
  const [artistNumber, setArtistNumber] = React.useState(0);
  const [nowPlaying, setNowPlaying] = React.useState("");

  // Space Handlers
  const handleChangeSpaceOptions = (newSpaceOptions: string[]) => {
    if (newSpaceOptions.length > 0) {
      if (newSpaceOptions.indexOf(spaceName) > -1 || !spaceName) {
        // Current Space is still in options
        if (newSpaceOptions !== spaceOptions) {
          setSpaceOptions(newSpaceOptions);
          setNotification({
            message: "New spaces may be available!",
            type: "info",
            open: true,
            update: setNotification
          });
        }
      } else {
        // Current space is no longer available
        setSpaceOptions(newSpaceOptions);
        setSpaceName("");
        setStage(STAGES.SPACE);
        setNotification({
          message: "Your old space is no longer available!",
          type: "warning",
          open: true,
          update: setNotification
        });
      }
    } else {
      setNotification({
        message:
          "Unable to find any spaces! Please try moving closer to the transmitter, or check that it is on.",
        type: "warning",
        open: false,
        update: setNotification
      });
    }
  };
  const handleChangeSpaceName = (newSpaceName: string) => {
    console.log(newSpaceName);
    setSpaceName(newSpaceName);
    setStage(STAGES.GENRE);
  };

  // Initialize Dynamic Values
  const loader = () => {
    if (!loaded) {
      setLoaded(true);
      firebaseInit(handleChangeSpaceOptions, setNowPlaying, setNotification);
      getGenres(setGenreOptions, setLikedGenres, setNotification);
      getArtists(setArtistOptions, setLikedArtists, setNotification);
      setLoadingMessage("");
    }
  };
  loader();

  //Genres Handlers
  const handleLikedGenre = (i: number) => {
    const newArray = likedGenres.slice();
    newArray[i] = !newArray[i];
    setLikedGenres(newArray);
  };

  const handleSubmit = () => {
    setStage(STAGES.ARTIST);
  };

  return (
    <Fragment>
      <CustomizedSnackbars
        message={notification.message}
        type={notification.type}
        open={notification.open}
        update={setNotification}
      />
      {loadingMessage && <Loading message={loadingMessage} classes={classes} />}
      {!loadingMessage && (
        <Container>
          {stage === STAGES.SPACE && (
            <Spaces
              spaceOptions={spaceOptions}
              spaceName={spaceName}
              handleChangeSpaceName={handleChangeSpaceName}
              classes={classes}
            ></Spaces>
          )}
          {stage === STAGES.GENRE && (
            <Genres
              genreOptions={genreOptions}
              likedGenres={likedGenres}
              handleLikedGenre={handleLikedGenre}
              handleSubmit={handleSubmit}
              setStage={setStage}
              classes={classes}
            ></Genres>
          )}
          {stage === STAGES.ARTIST && (
            <Typography variant="body1">Artist</Typography>
          )}
          {stage === STAGES.PLAYING && (
            <Typography variant="body1">Playing</Typography>
          )}
        </Container>
      )}
    </Fragment>
  );
};

export default App;
