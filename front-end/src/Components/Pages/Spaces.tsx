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

const SuccessPage: React.FunctionComponent<any> = ({
  spaceName,
  handleSpaceNameChange
}) => {
  const classes = useStyles();
  console.log(handleSpaceNameChange);
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
            handleSpaceNameChange(value);
          }}
        >
          <FormControlLabel value="female" control={<Radio />} label="Female" />
        </RadioGroup>
      </FormControl>
    </Fragment>
  );
};

export default SuccessPage;
