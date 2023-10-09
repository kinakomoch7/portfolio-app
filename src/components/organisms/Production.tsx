import { Card, Container, Grid } from "@mui/material";
import { HeadingTxt } from "../atomos/HeadingTxt";
import { ProductCard } from "../molecules/ProductCard";

export const Production = () => {
  return (
    <>
      <Container>
        <Card>
          <HeadingTxt message="Production" />
          <Grid container spacing={{ xs: 1, md: 2 }}>
            <ProductCard message="todoApp" cardText="これはtodoアプリです" />
            <ProductCard
              message="dicord-clone-app"
              cardText="これはdicordのクローンです"
            />
          </Grid>
        </Card>
      </Container>
    </>
  );
};
