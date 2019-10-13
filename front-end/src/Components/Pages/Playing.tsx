import {
  Checkbox,
  List,
  ListItem,
  Typography,
  Button
} from "@material-ui/core";
import React, { Fragment } from "react";
import { Genre } from "../../../@Types";
import { STAGES } from "../../App";

interface PlayingProps {
  nowPlaying: string;
  setStage: Function;
  classes: any;
}

const GenresPage: React.FunctionComponent<PlayingProps> = ({
  nowPlaying,
  setStage,
  classes
}) => {
  return (
    <Fragment>
      <span className={classes.horizontalCenter}>
        <Typography variant="h4" className={classes.topMargined}>
          Now playing:
        </Typography>
        <img
          width="50%"
          className={classes.centerStyle}
          src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/eb777e7a-7d3c-487e-865a-fc83920564a1/d7kpm65-437b2b46-06cd-4a86-9041-cc8c3737c6f0.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2ViNzc3ZTdhLTdkM2MtNDg3ZS04NjVhLWZjODM5MjA1NjRhMVwvZDdrcG02NS00MzdiMmI0Ni0wNmNkLTRhODYtOTA0MS1jYzhjMzczN2M2ZjAuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.-bP80wHw6Jb8moQRsxURQxONZvAMnJ6xLDD8Es7mHps"
        />
        <br />
        <Typography variant="h5" className={classes.topMargined}>
          {nowPlaying}
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          className={classes.centerStyle}
          onClick={() => {
            setStage(STAGES.ARTIST);
          }}
        >
          Back to Artists
        </Button>
        <Button
          variant="contained"
          color="secondary"
          className={classes.centerStyle}
          onClick={() => {
            setStage(STAGES.SPACE);
          }}
        >
          Back to spaces
        </Button>
      </span>
    </Fragment>
  );
};

export default GenresPage;
