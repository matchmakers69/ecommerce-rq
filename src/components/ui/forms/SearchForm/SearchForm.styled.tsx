import { Box, OutlinedInput, styled } from "@mui/material";

export const SearchFormWrapper = styled(Box)({
  width: "100%",
  maxWidth: "600px",
  margin: "30px auto",
});

export const OutlinedInputWrapper = styled(OutlinedInput)(({ theme }) => ({
  backgroundColor: theme.colors.alpha.white[100],
  paddingRight: theme.spacing(0.7),
}));
