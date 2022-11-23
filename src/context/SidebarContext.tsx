import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useLocation } from "react-router-dom";

type TSidebarContext = {
  sidebarToggle: boolean;
  pageType: string;
  toggleSidebar: () => void;
  closeSidebar: () => void;
};

const PAGE_TYPE = ["shop", "categories", "search"];

export const SidebarContext = createContext<TSidebarContext>(
  {} as TSidebarContext
);

export const SidebarProvider = (props: { children: JSX.Element }) => {
  const [sidebarToggle, setSidebarToggle] = useState(false);
  const [pageType, setPageType] = useState("");
  const { pathname } = useLocation();

  useEffect(() => {
    const findPath = () => {
      const [currenApp] = PAGE_TYPE.filter((page) => pathname.includes(page));
      setPageType(currenApp);
    };
    findPath();
  }, [pathname]);

  const toggleSidebar = useCallback(() => {
    setSidebarToggle(!sidebarToggle);
  }, [sidebarToggle]);

  const closeSidebar = () => {
    setSidebarToggle(false);
  };

  const value = useMemo(
    () => ({
      sidebarToggle,
      toggleSidebar,
      closeSidebar,
      pageType,
    }),
    [pageType, sidebarToggle, toggleSidebar]
  );

  return (
    <SidebarContext.Provider value={value}>
      {props.children}
    </SidebarContext.Provider>
  );
};
