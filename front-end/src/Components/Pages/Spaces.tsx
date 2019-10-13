import React, { Fragment } from "react";
import { Typography, makeStyles, Theme, createStyles } from "@material-ui/core";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(3)
    }
  })
);

interface SpacesProps {
  spaceOptions: string[];
  spaceName: string;
  handleChangeSpaceName: Function;
}

const SpacesPage: React.FunctionComponent<SpacesProps> = ({
  spaceName,
  handleChangeSpaceName
}) => {
  const classes = useStyles();
  console.log(handleChangeSpaceName);
  return (
    <Fragment>
      <Typography variant="h1">Spaces</Typography>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Spaces</FormLabel>
        <RadioGroup
          aria-label="gender"
          name="Space"
          value={spaceName}
          onChange={(event, value) => {
            console.log("value", value);
            handleChangeSpaceName(value);
          }}
        >
          <FormControlLabel value="female" control={<Radio />} label="Female" />
        </RadioGroup>
      </FormControl>
    </Fragment>
  );
};

export default SpacesPage;
