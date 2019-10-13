import { CircularProgress, Typography } from "@material-ui/core";
import React from "react";

interface LoadingProps {
  message: string;
  classes: any;
}

/**
 * TODO: Add Documentation
 */
const Loading: React.FunctionComponent<LoadingProps> = ({
  message,
  classes
}) => {
  return (
    <div className={classes.loadingContainer}>
      <div className={classes.loadingContent}>
        <CircularProgress color="primary" className={classes.loadingCircle} />
        <Typography variant="h3">{message}</Typography>
      </div>
    </div>
  );
};

export default Loading;
