import React, { Fragment } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Typography, Container } from "@material-ui/core";
import Spaces from "./Components/Pages/Spaces";
enum stages {
  "Space",
  "Genre",
  "Artist",
  "Playing"
}

const App: React.FunctionComponent = () => {
  const [busyMessage, setBusyMessage] = React.useState(
    "Loading Local Locations..."
  );

  const [stage, setStage] = React.useState(stages.Space);

  const [spaceName, setSpaceName] = React.useState("");

  function handleSpaceNameChange(newSpaceName: string) {
    setSpaceName(newSpaceName);
  }

  return (
    <Container>
      {busyMessage && <Typography variant="body1">Test</Typography>}
      {stage === stages.Space && (
        <Spaces
          spaceName={spaceName}
          setSpaceName={handleSpaceNameChange}
        ></Spaces>
      )}
      {stage === stages.Genre && <Typography variant="body1">Genre</Typography>}
    </Container>
  );
};

export default App;
