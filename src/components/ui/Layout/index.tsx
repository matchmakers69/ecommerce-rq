import { ReactNode } from "react";
import { Box, Container, CssBaseline } from "@mui/material";
import Footer from "../Footer";
import { Outlet } from "react-router-dom";
import AppBar from "../AppBar";

type LayoutProps = {
  children?: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <CssBaseline />

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          maxWidth: "100vw",
          flexGrow: 1,
        }}
      >
        <AppBar />
        <Container
          maxWidth="lg"
          sx={{
            pb: 3,
            pt: 3,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              minHeight: "100vh",
              maxWidth: "100%",
              alignItems: "flex-start",
            }}
          >
            {children || <Outlet />}
          </Box>
        </Container>
        <Footer />
      </Box>
    </>
  );
};

export default Layout;
