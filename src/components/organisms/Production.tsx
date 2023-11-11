import { Card, Container, Grid } from "@mui/material";
import { ProductCard } from "../molecules/ProductCard";
import { Typo } from "../atomos/Typo";
import { headingStyle } from "../../common/styles/heading";

export const Production = () => {
  return (
    <>
      <Container>
        <Card>
          <Typo children='Production' {...headingStyle}/>
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
