import { Container, Grid, Typography } from "@mui/material";
import * as S from "./Footer.styled";

const Footer = () => {
  return (
    <S.Footer>
      <Container maxWidth="lg">
        <Grid container direction="column" alignItems="center">
          <Grid item xs={12}>
            <Typography component="h5" variant="h5">
              React Starter App
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle1">
              {`${new Date().getFullYear()} | React | Material UI | React Router`}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </S.Footer>
  );
};

export default Footer;
