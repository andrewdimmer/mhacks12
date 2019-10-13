import { makeStyles, createStyles } from "@material-ui/styles";
import { Theme } from "@material-ui/core";

export const styles = makeStyles((theme: Theme) =>
  createStyles({
    padded: {
      padding: theme.spacing(2)
    },
    paper: {
      margin: theme.spacing(2),
      padding: theme.spacing(2)
    },
    margined: {
      margin: theme.spacing(2)
    },
    loadingContainer: {
      width: "100vw",
      height: "100vh",
      textAlign: "center"
    },
    loadingContent: {
      // TODO: Add Style Here to Center it Vertically
    },
    loadingCircle: {
      margin: "40px"
    }
  })
);
