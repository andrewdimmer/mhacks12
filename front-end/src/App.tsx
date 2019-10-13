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

enum STAGES {
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
    type: "info"
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

  // Initialize Dynamic Values
  const loader = () => {
    if (!loaded) {
      setLoaded(true);
      getGenres(setGenreOptions, setLikedGenres, setNotification);
      getArtists(setArtistOptions, setLikedArtists, setNotification);
    }
  };
  loader();

  // Space Handlers
  const handleChangeSpaceName = (newSpaceName: string) => {
    setSpaceName(newSpaceName);
  };

  return (
    <Fragment>
      {notification.message && (
        <CustomizedSnackbars
          message={notification.message}
          type={notification.type}
        />
      )}
      {loadingMessage && <Loading message={loadingMessage} classes={classes} />}
      {!loadingMessage && (
        <Container>
          {stage === STAGES.SPACE && (
            <Spaces
              spaceOptions={spaceOptions}
              spaceName={spaceName}
              handleChangeSpaceName={handleChangeSpaceName}
            ></Spaces>
          )}
          {stage === STAGES.GENRE && (
            <Typography variant="body1">Genre</Typography>
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
