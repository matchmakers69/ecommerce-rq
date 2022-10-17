import { createContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

type TSidebarContext = {
  sidebarToggle: boolean;
  pageType: string;
  appType: string;
  toggleSidebar: () => void;
  closeSidebar: () => void;
};

const PAGE_TYPE = ["lazy-spa", "posts", "users"];
const APP_TYPE = ["products", "react-query"];

export const SidebarContext = createContext<TSidebarContext>(
  {} as TSidebarContext
);

export const SidebarProvider = (props: { children: JSX.Element }) => {
  const [sidebarToggle, setSidebarToggle] = useState(false);
  const [pageType, setPageType] = useState("");
  const [appType, setAppType] = useState("");
  const { pathname } = useLocation();

  useEffect(() => {
    const findPath = () => {
      const [currentPage] = PAGE_TYPE.filter((page) => pathname.includes(page));
      setPageType(currentPage);
    };
    findPath();
  }, [pathname]);

  useEffect(() => {
    const findPath = () => {
      const [currenApp] = APP_TYPE.filter((page) => pathname.includes(page));
      setAppType(currenApp);
    };
    findPath();
  }, [pathname]);

  const toggleSidebar = () => {
    setSidebarToggle(!sidebarToggle);
  };
  const closeSidebar = () => {
    setSidebarToggle(false);
  };

  return (
    <SidebarContext.Provider
      value={{ sidebarToggle, toggleSidebar, closeSidebar, pageType, appType }}
    >
      {props.children}
    </SidebarContext.Provider>
  );
};
