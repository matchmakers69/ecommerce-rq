import * as S from "./Logo.styled";
import constanst from "../../../constants";
import { Typography, Box } from "@mui/material";
const Logo = () => {
  return (
    <Box pt={2} pb={2}>
      <S.LogoLink to={constanst.routes.HOME}>
        <Typography component="span">Ecommerce</Typography>
        <Typography
          sx={{
            fontWeight: 300,
          }}
          component="span"
        >
          Query
        </Typography>
      </S.LogoLink>
    </Box>
  );
};

export default Logo;
