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

interface GenresProps {
  genreOptions: Genre[];
  likedGenres: boolean[];
  handleLikedGenre: Function;
  handleSubmit: Function;
  setStage: Function;
  classes: any;
}

const GenresPage: React.FunctionComponent<GenresProps> = ({
  genreOptions,
  likedGenres,
  handleLikedGenre,
  handleSubmit,
  setStage,
  classes
}) => {
  return (
    <Fragment>
      <span className={classes.horizontalCenter}>
        <Typography variant="h4" className={classes.topMargined}>
          Genres:
        </Typography>
        <Typography variant="subtitle1">
          Select genres you want to hear
        </Typography>
        <List>
          {genreOptions.map((item: Genre, i: number) => {
            console.log(i);
            return (
              <Fragment key={i}>
                <ListItem
                  role={undefined}
                  dense
                  button
                  onClick={() => {
                    handleLikedGenre(i);
                  }} //Set liked genres at index i to inverse of what it is
                >
                  <Checkbox
                    tabIndex={-1}
                    disableRipple
                    checked={likedGenres[i]}
                    value={genreOptions[i].key}
                  />
                  {genreOptions[i].label}
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
