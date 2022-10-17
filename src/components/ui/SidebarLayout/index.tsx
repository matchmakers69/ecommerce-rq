import { FC, ReactNode } from "react";
import { Box } from "@mui/material";
import * as S from "./SidebarLayout.styled";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

interface SidebarLayoutProps {
  children?: ReactNode;
}

const SidebarLayout: FC<SidebarLayoutProps> = () => {
  return (
    <>
      <S.SidebarLayoutWrapper>
        <Header />
        <Sidebar />
        <S.SidebarWrapperInner>
          <Box display="block">
            <Outlet />
          </Box>
        </S.SidebarWrapperInner>
      </S.SidebarLayoutWrapper>
    </>
  );
};

export default SidebarLayout;
