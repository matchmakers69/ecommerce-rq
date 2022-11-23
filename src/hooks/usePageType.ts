import { FC } from "react";
import HeaderMenu from "components/ui/SidebarLayout/Header/HeaderMenu";
import SearchMenu from "components/ui/SidebarLayout/Header/SearchMenu";

type mapperValue = {
  component: FC;
};

const headerComponentMapper: Record<string, mapperValue> = {
  shop: {
    component: HeaderMenu,
  },
  search: {
    component: SearchMenu,
  },
};

export const usePageType = (pageType: string) => {
  const HeaderMenuComponent = headerComponentMapper[pageType]?.component;

  return {
    HeaderMenuComponent,
  };
};
