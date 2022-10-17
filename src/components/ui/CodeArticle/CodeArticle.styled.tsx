import { Box, styled } from "@mui/material";

export const CodeArticle = styled("article")(({ theme }) => ({
  width: "100%",
  margin: "1rem 0",

  [theme.breakpoints.up("md")]: {
    gridColumn: 2,
  },
}));

export const CodeArticleleHeader = styled("header")(({ theme }) => ({
  width: "100%",
  padding: "12px 22px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  background: theme.codeArticle.articleCodeHeaderBcg,

  [theme.breakpoints.up("md")]: {
    borderRadius: "1rem 1rem 0 0",
  },
}));

export const CodeArticleleHeaderDotsWrapper = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "flexStart",
});

export const CodeArticleleHeaderDotsWrapperInner = styled(Box)({
  display: "flex",
  alignItems: "center",
  marginRight: "2rem",
});

export const CodeArticleleHeaderDot = styled(Box)(({ theme }) => ({
  backgroundColor: theme.codeArticle.articleCodeHeaderDotBcg,
  borderRadius: "100%",
  width: "1.2rem",
  height: "1.2rem",

  "&:not(:last-of-type)": {
    marginRight: "0.7rem",
  },
}));

export const CodeArticlePre = styled("pre")(({ theme }) => ({
  lineHeight: 1.7,
  width: "100%",
  alignSelf: "center",
  justifySelf: "center",
  gridColumn: "1/4",
  backgroundColor: theme.codeArticle.preBackground,
  color: theme.codeArticle.codeColor,
  border: "none",
  hypnes: "none",
  tabSize: 2,
  direction: "lpr",
  textAlign: "left",
  whiteSpace: "pre",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 1,
  margin: 0,

  [theme.breakpoints.up("md")]: {
    borderRadius: "0 0 1rem 1rem",
    height: "auto",
    padding: "2.2rem",
    display: "block",
    fontSize: "1.8rem",
  },
}));

export const CodeArticleCode = styled("code")(({ theme }) => ({
  fontWeight: 500,
  overflow: "auto",
  display: "block",
  padding: 0,
  paddingBottom: "1rem",
  backgroundColor: theme.codeArticle.preBackground,
  color: theme.codeArticle.codeColor,
  borderRadius: 0,
}));
