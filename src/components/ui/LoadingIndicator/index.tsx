import { Box, LinearProgress, Typography } from "@mui/material";

const LoadingIndicator = () => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Typography component="h5" variant="h5">
        Data is loading...
      </Typography>
      <LinearProgress color="success" />
    </Box>
  );
};

export default LoadingIndicator;
