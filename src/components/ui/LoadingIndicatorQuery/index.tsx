import { Box, LinearProgress, Typography } from "@mui/material";
import { useIsFetching } from "react-query";

const LoadingIndicatorQuery = () => {
  const isFetching = useIsFetching();
  const isShowing = isFetching ? "flex" : "none";

  return (
    <Box
      sx={{
        width: "100%",
        display: isShowing,
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

export default LoadingIndicatorQuery;
