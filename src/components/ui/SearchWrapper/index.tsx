import { Box, Typography } from "@mui/material";
import { ReactNode } from "react";

type SearchWrapperProps = {
  children: ReactNode;
  title: string;
};

const SearchWrapper = ({ children, title }: SearchWrapperProps) => {
  return (
    <Box
      width="100%"
      minHeight="100vh"
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Typography component="h1" variant="h1">
        {title}
      </Typography>
      {children}
    </Box>
  );
};

export default SearchWrapper;
