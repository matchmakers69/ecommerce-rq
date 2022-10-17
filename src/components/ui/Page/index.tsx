import { Box, Typography } from "@mui/material";
import { ReactNode } from "react";

type PageProps = {
  children: ReactNode;
  title: string;
};

const Page = ({ children, title = "Post title" }: PageProps) => {
  return (
    <>
      <Box
        sx={{
          mb: 2,
        }}
      >
        <Typography component="h1" variant="h1">
          {title}
        </Typography>
      </Box>
      {children}
    </>
  );
};

export default Page;
