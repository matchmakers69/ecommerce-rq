import { ReactNode } from "react";
import * as S from "./AppBarContainer.styled";

type AppBarContainerProps = {
  children: ReactNode;
};

const AppBarContainer = ({ children }: AppBarContainerProps) => {
  return <S.AppbarContainer>{children}</S.AppbarContainer>;
};

export default AppBarContainer;
