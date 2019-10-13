import React, { Fragment } from "react";
import {
  Typography,
  makeStyles,
  Theme,
  createStyles,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Checkbox,
  Button
} from "@material-ui/core";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

interface SpacesProps {
  spaceOptions: string[];
  spaceName: string;
  handleChangeSpaceName: Function;
  classes: any;
}

const SpacesPage: React.FunctionComponent<SpacesProps> = ({
  spaceName,
  handleChangeSpaceName,
  spaceOptions,
  classes
}) => {
  console.log(handleChangeSpaceName);
  return (
    <Fragment>
      <span className={classes.horizontalCenter}>
        <Typography variant="h4" className={classes.topMargined}>
          Spaces:
        </Typography>
        <List>
          {spaceOptions.map((item: string, i: number) => {
            return (
              <Fragment key={i}>
                <Button
                  className={classes.topMargined}
                  variant="outlined"
                  color="primary"
                  onClick={() => {
                    handleChangeSpaceName(spaceOptions[i]);
                  }}
                >
                  {item}
                </Button>
                <br />
              </Fragment>
            );
          })}
        </List>
      </span>
    </Fragment>
  );
};

export default SpacesPage;
