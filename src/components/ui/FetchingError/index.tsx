import { Box, Typography } from "@mui/material";

type FetchingError = {
  errorType?: string | boolean | undefined;
  errorMessage: string;
};

const FetchingError = ({ errorMessage, errorType }: FetchingError) => {
  return (
    <Box>
      <Typography component="h3" variant="h3">
        {errorMessage}
      </Typography>
      <Typography component="h4" variant="h4">
        {errorType}
      </Typography>
    </Box>
  );
};

export default FetchingError;
