import { Grid, Typography } from "@mui/material";

const Status404 = () => {
  return (
    <Grid container data-testid="page-not-found-wrapper">
      <Grid item xs={12}>
        <Typography component="h1" variant="h1">
          Sorry not found
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Status404;
