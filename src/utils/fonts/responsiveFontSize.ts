interface ILineHeights {
  sm: string;
  md: string;
  lg: string;
  xl: string;
}
interface ISizes {
  sm: number;
  md: number;
  lg: number;
  xl: number;
}
export const responsiveFontSize = (
  fontSizes: ISizes,
  lineHeights: ILineHeights
) => {
  return {
    "@media (min-width:620px)": {
      fontSize: fontSizes.sm,
      lineHeight: lineHeights.sm,
    },
    "@media (min-width:960px)": {
      fontSize: fontSizes.md,
      lineHeight: lineHeights.md,
    },
    "@media (min-width:1280px)": {
      fontSize: fontSizes.lg,
      lineHeight: lineHeights.lg,
    },
    "@media (min-width:1760px)": {
      fontSize: fontSizes.xl,
      lineHeight: lineHeights.md,
    },
  };
};
