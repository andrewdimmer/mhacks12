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

interface ArtistProps {
  artistOptions: Genre[];
  likedArtists: boolean[];
  handleLikedArtist: Function;
  handleSubmit: Function;
  setStage: Function;
  classes: any;
}

const GenresPage: React.FunctionComponent<ArtistProps> = ({
  artistOptions,
  likedArtists,
  handleLikedArtist,
  handleSubmit,
  setStage,
  classes
}) => {
  return (
    <Fragment>
      <span className={classes.horizontalCenter}>
        <Typography variant="h4" className={classes.topMargined}>
          Artists:
        </Typography>
        <Typography variant="subtitle1">
          Select artists you want to hear
        </Typography>
        <List>
          {artistOptions.map((item: Genre, i: number) => {
            console.log(i);
            return (
              <Fragment key={i}>
                <ListItem
                  role={undefined}
                  dense
                  button
                  onClick={() => {
                    handleLikedArtist(i);
                  }} //Set liked genres at index i to inverse of what it is
                >
                  <Checkbox
                    tabIndex={-1}
                    disableRipple
                    color="primary"
                    checked={likedArtists[i]}
                    value={artistOptions[i].key}
                  />
                  {artistOptions[i].label}
                </ListItem>
              </Fragment>
            );
          })}
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              handleSubmit();
            }}
            className={classes.topMargined}
          >
            Submit
          </Button>
          <br />
          <Button
            variant="contained"
            color="secondary"
            onClick={() => {
              setStage(STAGES.SPACE);
            }}
            className={classes.topMargined2}
          >
            Back to spaces
          </Button>
        </List>
      </span>
    </Fragment>
  );
};

export default GenresPage;
