import Dialog from "@mui/material/Dialog";
import CloseIcon from "@mui/icons-material/Close";
import * as S from "./ModalWrapper.styled";
import { ReactNode } from "react";
import { Box, Typography } from "@mui/material";

type ModalWrapperProps = {
  open: boolean;
  onClose?: () => void;
  title: string;
  children: ReactNode;
  scroll?: "paper" | "body";
  ["data-testid"]?: string;
};

const ModalWrapper = ({
  open = false,
  onClose,
  title = "",
  children,
  scroll,
  "data-testid": dataTestid,
}: ModalWrapperProps) => {
  return (
    <Dialog
      role="dialog"
      data-testid={dataTestid}
      scroll={scroll}
      open={open}
      onClose={onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <Box
        sx={{
          px: 6,
          pt: 4,
        }}
      >
        <S.ModalHeader component="header">
          <Typography sx={{ marginBottom: 0 }} variant="h3" component="h3">
            {title}
          </Typography>
          {onClose ? (
            <S.CloseModalButton disableRipple onClick={onClose}>
              <Typography
                sx={{
                  marginRight: 2,
                  fontWeight: 500,
                  color: "inherit",
                }}
                variant="body1"
                component="span"
              >
                Close
              </Typography>
              <CloseIcon fontSize="large" />
            </S.CloseModalButton>
          ) : null}
        </S.ModalHeader>
      </Box>
      {children}
    </Dialog>
  );
};

export default ModalWrapper;
