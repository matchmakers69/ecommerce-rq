import { ReactNode } from "react";
import * as S from "./AppBarList.styled";

type DisplayType = "row" | "flex" | "block";

type AppBarListProps = {
  children: ReactNode;
  type: DisplayType;
};

export type StyledProps = Pick<AppBarListProps, "type">;

const AppBarList = ({ children, type }: AppBarListProps) => {
  return <S.AppBarList type={type}>{children}</S.AppBarList>;
};

export default AppBarList;
