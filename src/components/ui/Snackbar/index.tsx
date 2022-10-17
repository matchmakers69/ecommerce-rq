import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import CloseIcon from "@mui/icons-material/Close";
import { Box, Typography } from "@mui/material";
import * as S from "./Snackbar.styled";
import { useSnackbar } from "notistack";
import { forwardRef, ReactNode, useCallback } from "react";

type SnackbarVariants = "success" | "error" | "warning" | "default";

type SnackbarProps = {
  id: string | number;
  message: ReactNode;
  variant: SnackbarVariants;
};

export type StyledProps = Pick<SnackbarProps, "variant">;

const Snackbar = forwardRef<HTMLDivElement, SnackbarProps>(function Snackbar(
  { id, message, variant },
  ref
) {
  const { closeSnackbar } = useSnackbar();

  const handleCloseSnackbar = useCallback(() => {
    closeSnackbar(id);
  }, [id, closeSnackbar]);

  return (
    <S.SnackbarContainer data-testid="snackbar-content" ref={ref}>
      <S.SnackbarContentBcg variant={variant}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {variant === "success" ? (
            <CheckCircleOutlinedIcon
              sx={{
                display: {
                  xs: "none",
                  sm: "block",
                },
              }}
              data-testid="success-icon"
              fontSize="large"
            />
          ) : (
            <ErrorOutlineOutlinedIcon
              sx={{
                display: {
                  xs: "none",
                  sm: "block",
                },
              }}
              data-testid="error-icon"
              fontSize="large"
            />
          )}
          <Typography
            sx={{
              paddingLeft: 4,
              color: "common.black",
            }}
            variant="body1"
            component="p"
          >
            {message}
          </Typography>
        </Box>

        <S.CloseButton
          aria-label="Close"
          size="large"
          onClick={handleCloseSnackbar}
        >
          <Typography
            sx={{
              marginRight: 2,
              fontWeight: 500,
              display: {
                xs: "none",
                sm: "block",
              },
            }}
            variant="subtitle1"
            component="p"
          >
            Close
          </Typography>
          <CloseIcon fontSize="large" />
        </S.CloseButton>
      </S.SnackbarContentBcg>
    </S.SnackbarContainer>
  );
});

export default Snackbar;
