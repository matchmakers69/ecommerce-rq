import { alpha, createTheme, lighten, darken } from "@mui/material";
import { responsiveFontSize } from "utils/fonts/responsiveFontSize";

export const fontDefault = "'PT Sans', sans-serif";
export const fontSecondary = "'Oswald', sans-serif";

const themeColors = {
  primary: "#0FFFFF",
  secondary: "#FFFFFF",
  black: "#000000",
  white: "#111633",
  success: "#57CA22",
  warning: "#FFA319",
  error: "#FF1943",
  info: "#0FFFFF",
  primaryAlt: "#111633",
  trueWhite: "#ffffff",
  preBackground: "#0e1d29",
  codeColor: "#EEEEEE",
  articleCodeHeaderBackground: "#142430",
  articleCodeHeaderDotBackground: "#2f3c45",
};

const colors = {
  gradients: {
    blue1: "linear-gradient(127.55deg, #054667 0%, #0FFFFF 100%)",
    blue2: "linear-gradient(135deg, #ABDCFF 0%, #0396FF 100%)",
    blue3: "linear-gradient(127.55deg, #141E30 3.73%, #243B55 92.26%)",
  },
  shadows: {
    success:
      "0px 1px 4px rgba(68, 214, 0, 0.25), 0px 3px 12px 2px rgba(68, 214, 0, 0.35)",
    error:
      "0px 1px 4px rgba(255, 25, 67, 0.25), 0px 3px 12px 2px rgba(255, 25, 67, 0.35)",
    info: "0px 1px 4px rgba(51, 194, 255, 0.25), 0px 3px 12px 2px rgba(51, 194, 255, 0.35)",
    primary:
      "0px 1px 4px rgba(85, 105, 255, 0.25), 0px 3px 12px 2px rgba(85, 105, 255, 0.35)",
    warning:
      "0px 1px 4px rgba(255, 163, 25, 0.25), 0px 3px 12px 2px rgba(255, 163, 25, 0.35)",
    card: "0px 9px 16px rgba(159, 162, 191, .18), 0px 2px 2px rgba(159, 162, 191, 0.32)",
    cardSm:
      "0px 2px 3px rgba(159, 162, 191, .18), 0px 1px 1px rgba(159, 162, 191, 0.32)",
    cardLg:
      "0 5rem 14rem 0 rgb(255 255 255 / 30%), 0 0.8rem 2.3rem rgb(0 0 0 / 60%), 0 0.2rem 0.3rem rgb(0 0 0 / 45%)",
  },
  layout: {
    general: {
      bodyBg: "#000000",
    },
    sidebar: {
      background: themeColors.primaryAlt,
      textColor: themeColors.secondary,
      dividerBg: "#272C48",
      menuItemColor: "#9EA4C1",
      menuItemColorActive: "#ffffff",
      menuItemBg: themeColors.primaryAlt,
      menuItemBgActive: "rgba(43, 48, 77, .6)",
      menuItemIconColor: "#444A6B",
      menuItemIconColorActive: "#ffffff",
      menuItemHeadingColor: darken(themeColors.secondary, 0.3),
    },
  },
  alpha: {
    white: {
      5: alpha(themeColors.white, 0.02),
      10: alpha(themeColors.white, 0.1),
      30: alpha(themeColors.white, 0.3),
      50: alpha(themeColors.white, 0.5),
      70: alpha(themeColors.white, 0.7),
      100: themeColors.white,
    },
    trueWhite: {
      5: alpha(themeColors.trueWhite, 0.02),
      10: alpha(themeColors.trueWhite, 0.1),
      30: alpha(themeColors.trueWhite, 0.3),
      50: alpha(themeColors.trueWhite, 0.5),
      70: alpha(themeColors.trueWhite, 0.7),
      100: themeColors.trueWhite,
    },
    black: {
      5: alpha(themeColors.black, 0.02),
      10: alpha(themeColors.black, 0.1),
      30: alpha(themeColors.black, 0.3),
      50: alpha(themeColors.black, 0.5),
      70: alpha(themeColors.black, 0.7),
      100: themeColors.black,
    },
  },
  secondary: {
    lighter: alpha(themeColors.secondary, 0.85),
    light: alpha(themeColors.secondary, 1),
    main: themeColors.secondary,
    dark: darken(themeColors.secondary, 0.2),
  },
  primary: {
    lighter: alpha(themeColors.primary, 0.85),
    light: alpha(themeColors.primary, 1),
    main: themeColors.primary,
    dark: darken(themeColors.primary, 0.2),
  },
  success: {
    lighter: alpha(themeColors.success, 0.85),
    light: alpha(themeColors.success, 0.3),
    main: themeColors.success,
    dark: darken(themeColors.success, 0.2),
  },
  warning: {
    lighter: alpha(themeColors.warning, 0.85),
    light: alpha(themeColors.warning, 0.3),
    main: themeColors.warning,
    dark: darken(themeColors.warning, 0.2),
  },
  error: {
    lighter: alpha(themeColors.error, 0.85),
    light: alpha(themeColors.error, 0.3),
    main: themeColors.error,
    dark: darken(themeColors.error, 0.2),
  },
  info: {
    lighter: alpha(themeColors.info, 0.85),
    light: alpha(themeColors.info, 0.3),
    main: themeColors.info,
    dark: darken(themeColors.info, 0.2),
  },
};

export const DarkTheme = createTheme({
  colors: {
    gradients: {
      blue1: colors.gradients.blue1,
      blue2: colors.gradients.blue2,
      blue3: colors.gradients.blue3,
    },
    shadows: {
      success: colors.shadows.success,
      error: colors.shadows.error,
      primary: colors.shadows.primary,
      info: colors.shadows.info,
      warning: colors.shadows.warning,
    },
    alpha: {
      white: {
        5: alpha(themeColors.white, 0.02),
        10: alpha(themeColors.white, 0.1),
        30: alpha(themeColors.white, 0.3),
        50: alpha(themeColors.white, 0.5),
        70: alpha(themeColors.white, 0.7),
        100: themeColors.white,
      },
      trueWhite: {
        5: alpha(themeColors.trueWhite, 0.02),
        10: alpha(themeColors.trueWhite, 0.1),
        30: alpha(themeColors.trueWhite, 0.3),
        50: alpha(themeColors.trueWhite, 0.5),
        70: alpha(themeColors.trueWhite, 0.7),
        100: themeColors.trueWhite,
      },
      black: {
        5: alpha(themeColors.black, 0.02),
        10: alpha(themeColors.black, 0.1),
        30: alpha(themeColors.black, 0.3),
        50: alpha(themeColors.black, 0.5),
        70: alpha(themeColors.black, 0.7),
        100: themeColors.black,
      },
    },
    secondary: {
      lighter: alpha(themeColors.secondary, 0.1),
      light: lighten(themeColors.secondary, 0.3),
      main: themeColors.secondary,
      dark: darken(themeColors.secondary, 0.2),
    },
    primary: {
      lighter: alpha(themeColors.primary, 0.1),
      light: lighten(themeColors.primary, 0.3),
      main: themeColors.primary,
      dark: darken(themeColors.primary, 0.2),
    },
    success: {
      lighter: alpha(themeColors.success, 0.1),
      light: lighten(themeColors.success, 0.3),
      main: themeColors.success,
      dark: darken(themeColors.success, 0.2),
    },
    warning: {
      lighter: alpha(themeColors.warning, 0.1),
      light: lighten(themeColors.warning, 0.3),
      main: themeColors.warning,
      dark: darken(themeColors.warning, 0.2),
    },
    error: {
      lighter: alpha(themeColors.error, 0.1),
      light: lighten(themeColors.error, 0.3),
      main: themeColors.error,
      dark: darken(themeColors.error, 0.2),
    },
    info: {
      lighter: alpha(themeColors.info, 0.1),
      light: lighten(themeColors.info, 0.3),
      main: themeColors.info,
      dark: darken(themeColors.info, 0.2),
    },
  },
  general: {
    borderRadiusSm: "6px",
    borderRadius: "10px",
    borderRadiusLg: "12px",
    borderRadiusXl: "16px",
  },
  sidebar: {
    background: colors.layout.sidebar.background,
    textColor: colors.layout.sidebar.textColor,
    dividerBg: colors.layout.sidebar.dividerBg,
    menuItemColor: colors.layout.sidebar.menuItemColor,
    menuItemColorActive: colors.layout.sidebar.menuItemColorActive,
    menuItemBg: colors.layout.sidebar.menuItemBg,
    menuItemBgActive: colors.layout.sidebar.menuItemBgActive,
    menuItemIconColor: colors.layout.sidebar.menuItemIconColor,
    menuItemIconColorActive: colors.layout.sidebar.menuItemIconColorActive,
    menuItemHeadingColor: colors.layout.sidebar.menuItemHeadingColor,
    boxShadow: "1px 0 0 #272C48",
    width: "290px",
  },
  codeArticle: {
    codeColor: themeColors.codeColor,
    preBackground: themeColors.preBackground,
    articleCodeHeaderBcg: themeColors.articleCodeHeaderBackground,
    articleCodeHeaderDotBcg: themeColors.articleCodeHeaderDotBackground,
  },

  header: {
    height: "80px",
    background: themeColors.primaryAlt,
    boxShadow: "0px 1px 0px #272C48",
    textColor: colors.secondary.main,
  },
  footer: {
    background: colors.gradients.blue1,
    textColor: colors.secondary.light,
  },
  spacing: 9,
  palette: {
    common: {
      black: colors.alpha.black[100],
      white: colors.alpha.white[100],
    },
    mode: "dark",
    primary: {
      light: colors.primary.light,
      main: colors.primary.main,
      dark: colors.primary.dark,
    },
    secondary: {
      light: colors.secondary.light,
      main: colors.secondary.main,
      dark: colors.secondary.dark,
    },
    error: {
      light: colors.error.light,
      main: colors.error.main,
      dark: colors.error.dark,
      contrastText: colors.alpha.white[100],
    },
    success: {
      light: colors.success.light,
      main: colors.success.main,
      dark: colors.success.dark,
      contrastText: colors.alpha.white[100],
    },
    info: {
      light: colors.info.light,
      main: colors.info.main,
      dark: colors.info.dark,
      contrastText: colors.alpha.white[100],
    },
    warning: {
      light: colors.warning.light,
      main: colors.warning.main,
      dark: colors.warning.dark,
      contrastText: colors.alpha.white[100],
    },
    text: {
      primary: colors.alpha.black[100],
      secondary: colors.alpha.black[70],
      disabled: colors.alpha.black[50],
    },
    background: {
      paper: colors.alpha.white[100],
      default: colors.layout.general.bodyBg,
    },
    action: {
      active: colors.alpha.black[100],
      hover: colors.primary.lighter,
      hoverOpacity: 0.1,
      selected: colors.alpha.black[10],
      selectedOpacity: 0.1,
      disabled: colors.alpha.black[50],
      disabledBackground: colors.alpha.black[5],
      disabledOpacity: 0.38,
      focus: colors.alpha.black[10],
      focusOpacity: 0.05,
      activatedOpacity: 0.12,
    },
    tonalOffset: 0.5,
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1840,
    },
  },
  components: {
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          textTransform: "none",
          marginLeft: 8,
          marginRight: 8,
          fontWeight: "bold",
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        "html, body": {
          fontSize: "62.5%",
          width: "100%",
          height: "100%",
        },
        html: {
          fontSize: "62.5%",
          display: "flex",
          flexDirection: "column",
          minHeight: "100%",
          width: "100%",
          MozOsxFontSmoothing: "grayscale",
          WebkitFontSmoothing: "antialiased",
        },
        body: {
          display: "flex",
          flexDirection: "column",
          minHeight: "100%",
          width: "100%",
          flex: 1,
          fontSize: "1.6rem",
          color: colors.primary.lighter,
        },
        "#root": {
          width: "100%",
          height: "100%",
          display: "flex",
          flex: 1,
          flexDirection: "column",
        },

        ".child-popover .MuiPaper-root .MuiList-root": {
          flexDirection: "column",
        },
        "#nprogress": {
          pointerEvents: "none",
        },
        "#nprogress .bar": {
          background: colors.primary.lighter,
        },
        "#nprogress .spinner-icon": {
          borderTopColor: colors.primary.lighter,
          borderLeftColor: colors.primary.lighter,
        },
        "#nprogress .peg": {
          boxShadow:
            "0 0 15px " +
            colors.primary.lighter +
            ", 0 0 8px" +
            colors.primary.light,
        },
        code: {
          background: colors.info.lighter,
          color: colors.info.dark,
          borderRadius: 4,
          padding: 4,
        },
        "@keyframes ripple": {
          "0%": {
            transform: "scale(.8)",
            opacity: 1,
          },
          "100%": {
            transform: "scale(2.8)",
            opacity: 0,
          },
        },
        "@keyframes float": {
          "0%": {
            transform: "translate(0%, 0%)",
          },
          "100%": {
            transform: "translate(3%, 3%)",
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "transparent",
          boxShadow: "none",
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          borderRadius: 4,
          boxShadow: `0px 4px 8px -4px rgb(0 0 0 / 48%)`,
          maxWidth: "800px",
          width: "100%",
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          minHeight: "0 !important",
          padding: "0 !important",
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          color: colors.secondary.light,
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        iconOutlined: {
          color: colors.alpha.black[50],
        },
        icon: {
          top: "calc(50% - 14px)",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "& .MuiInputAdornment-positionEnd.MuiInputAdornment-outlined": {
            paddingRight: 6,
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: colors.alpha.black[50],
          },
          "&.Mui-focused:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: colors.primary.main,
          },
        },
      },
    },
    MuiList: {
      styleOverrides: {
        root: {
          padding: 0,

          "& .MuiListItem-button": {
            transition: "all .2s",

            "& > .MuiSvgIcon-root": {
              minWidth: 34,
            },

            "& .MuiTouchRipple-root": {
              opacity: 0.2,
            },
          },
          "& .MuiListItem-root.MuiButtonBase-root.Mui-selected": {
            backgroundColor: alpha(colors.primary.lighter, 0.4),
          },
          "& .MuiMenuItem-root.MuiButtonBase-root:active": {
            backgroundColor: alpha(colors.primary.lighter, 0.4),
          },
          "& .MuiMenuItem-root.MuiButtonBase-root .MuiTouchRipple-root": {
            opacity: 0.2,
          },
        },
        padding: {
          padding: "12px",

          "& .MuiListItem-button": {
            borderRadius: 6,
            margin: "1px 0",
          },
        },
      },
    },
    MuiLink: {
      defaultProps: {
        underline: "hover",
      },
    },
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          borderRadius: 6,
          height: 6,
        },
      },
    },
    MuiCardHeader: {
      styleOverrides: {
        root: {
          color: colors.secondary.main,
        },
        subheader: {
          color: "inherit",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          padding: 0,
          color: colors.secondary.main,
        },
        elevation0: {
          boxShadow: "none",
        },
        elevation: {
          boxShadow: colors.shadows.card,
        },
        elevation2: {
          boxShadow: colors.shadows.cardSm,
        },
        elevation24: {
          boxShadow: colors.shadows.cardLg,
        },
        outlined: {
          boxShadow: colors.shadows.card,
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          background: colors.alpha.black[10],
          border: 0,
          height: 1,
        },
        vertical: {
          height: "auto",
          width: 1,

          "&.MuiDivider-flexItem.MuiDivider-fullWidth": {
            height: "auto",
          },
          "&.MuiDivider-absolute.MuiDivider-fullWidth": {
            height: "100%",
          },
        },
        withChildren: {
          "&:before, &:after": {
            border: 0,
          },
        },
        wrapper: {
          background: colors.alpha.white[100],
          fontWeight: "bold",
          height: 24,
          lineHeight: "24px",
          marginTop: -12,
          color: "inherit",
          textTransform: "uppercase",
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          "& .MuiTouchRipple-root": {
            opacity: 0.3,
          },
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        root: {
          margin: 0,
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: 8,

          "& .MuiTouchRipple-root": {
            borderRadius: 8,
          },
        },
        sizeSmall: {
          padding: 4,
        },
      },
    },
    MuiToggleButton: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          color: colors.primary.main,
          background: colors.alpha.white[100],
          transition: "all .2s",

          "&:hover, &.Mui-selected, &.Mui-selected:hover": {
            color: colors.alpha.white[100],
            background: colors.primary.main,
          },
        },
      },
    },
    MuiButton: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          fontWeight: "bold",
          textTransform: "none",
          paddingLeft: 16,
          paddingRight: 16,
          color: colors.secondary.light,
          fontSize: 14,

          ".MuiSvgIcon-root": {
            transition: "all .2s",
          },
        },
        endIcon: {
          marginRight: -8,
        },
        containedSecondary: {
          backgroundColor: colors.secondary.main,
          color: colors.alpha.white[100],
          border: "1px solid " + colors.alpha.white,
        },
        outlinedSecondary: {
          backgroundColor: colors.alpha.white[100],

          "&:hover, &.MuiSelected": {
            backgroundColor: colors.alpha.black[5],
            color: colors.alpha.black[100],
          },
        },
        sizeSmall: {
          padding: "6px 16px",
          lineHeight: 1.5,
        },
        sizeMedium: {
          padding: "8px 20px",
        },
        sizeLarge: {
          padding: "11px 24px",
        },
        textSizeSmall: {
          padding: "7px 12px",
        },
        textSizeMedium: {
          padding: "9px 16px",
        },
        textSizeLarge: {
          padding: "12px 16px",
        },
      },
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: false,
      },
      styleOverrides: {
        root: {
          borderRadius: 6,
        },
      },
    },
    MuiPaginationItem: {
      styleOverrides: {
        page: {
          fontSize: 13,
          fontWeight: "bold",
          transition: "all .2s",
        },
        textPrimary: {
          "&.Mui-selected": {
            boxShadow: colors.shadows.primary,
          },
          "&.MuiButtonBase-root:hover": {
            background: colors.alpha.black[5],
          },
          "&.Mui-selected.MuiButtonBase-root:hover": {
            background: colors.primary.main,
          },
        },
      },
    },
  },
  shape: {
    borderRadius: 10,
  },
  typography: {
    fontFamily: fontDefault,
    h1: {
      fontFamily: fontSecondary,
      color: colors.primary.light,
      ...responsiveFontSize(
        { sm: 48, md: 60, lg: 64, xl: 72 },
        { sm: "61px", md: "77px", lg: "81px", xl: "91px" }
      ),
    },
    h2: {
      fontFamily: fontSecondary,
      color: colors.secondary.light,
      ...responsiveFontSize(
        { sm: 34, md: 34, lg: 42, xl: 48 },
        { sm: "43px", md: "43px", lg: "54px", xl: "61px" }
      ),
    },
    h3: {
      fontFamily: fontSecondary,
      color: colors.secondary.light,
      ...responsiveFontSize(
        { sm: 19, md: 21, lg: 28, xl: 34 },
        { sm: "27px", md: "27px", lg: "36px", xl: "43px" }
      ),
    },
    h4: {
      fontWeight: 500,
      color: colors.secondary.light,
      ...responsiveFontSize(
        { sm: 19, md: 19, lg: 21, xl: 24 },
        { sm: "32px", md: "32px", lg: "38px", xl: "40px" }
      ),
    },
    h5: {
      fontWeight: 400,
      color: colors.secondary.light,
      ...responsiveFontSize(
        { sm: 19, md: 19, lg: 21, xl: 24 },
        { sm: "32px", md: "32px", lg: "38px", xl: "40px" }
      ),
    },
    h6: {
      fontWeight: 400,
      ...responsiveFontSize(
        { sm: 19, md: 19, lg: 21, xl: 24 },
        { sm: "32px", md: "32px", lg: "38px", xl: "40px" }
      ),
    },
    caption: {
      color: colors.secondary.light,
      fontWeight: 300,
      ...responsiveFontSize(
        { sm: 18, md: 19, lg: 21, xl: 24 },
        { sm: "32px", md: "32px", lg: "38px", xl: "40px" }
      ),
    },
    body1: {
      color: colors.secondary.light,
      ...responsiveFontSize(
        { sm: 16, md: 16, lg: 19, xl: 19 },
        { sm: "32px", md: "32px", lg: "36px", xl: "36px" }
      ),
      "& a": {
        color: colors.secondary.light,
        textDecoration: "underline",
      },
    },
    body2: {
      ...responsiveFontSize(
        { sm: 14, md: 14, lg: 16, xl: 16 },
        { sm: "26px", md: "26px", lg: "30px", xl: "30px" }
      ),
      "& a": {
        color: colors.secondary.light,
        textDecoration: "underline",
      },
    },
    subtitle1: {
      ...responsiveFontSize(
        { sm: 19, md: 19, lg: 21, xl: 24 },
        { sm: "30px", md: "30px", lg: "36px", xl: "36px" }
      ),
      "& a": {
        color: colors.secondary.light,
        textDecoration: "underline",
      },
    },
    subtitle2: {
      fontSize: 16,
      fontWeight: 300,
      ...responsiveFontSize(
        { sm: 14, md: 14, lg: 16, xl: 16 },
        { sm: "26px", md: "26px", lg: "30px", xl: "30px" }
      ),
      "& a": {
        fontWeight: 300,
        color: colors.secondary.light,
        textDecoration: "underline",
      },
    },

    button: {
      fontSize: 16,
    },
    overline: {
      fontSize: 13,
      fontWeight: 700,
      textTransform: "uppercase",
    },
  },
});
