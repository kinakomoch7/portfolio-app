import { Grid } from "@mui/material";
import { ProductCard } from "../molecules/ProductCard";
import { Typo } from "../atomos/Typo";
import { headingStyle } from "../../common/styles/heading";
import { PRODUCTIONS } from "../../constants/productions";
import { ProductionType } from "../../types/productions";
import { Element } from "react-scroll";

export const Production = () => {
  return (
    <Element name="production">
      <Typo children='Production' {...headingStyle}/>
      <Grid container spacing='8'>
      {Object.values(PRODUCTIONS).map((production:ProductionType) =>
        <Grid item xs={12} md={6} key={production.url}>
          <ProductCard
            message={production.message}
            cardText={production.cardText}
            png={production.png}
            url={production.url}
          />
        </Grid>
      )}
      </Grid>
    </Element>
  );
};
