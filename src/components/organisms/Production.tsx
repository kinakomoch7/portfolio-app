import { Grid } from "@mui/material";
import { ProductCard } from "../molecules/ProductCard";
import { Typo } from "../atomos/Typo";
import { headingStyle } from "../../common/styles/heading";
import portFolioPng from '../../common/images/products/portFolio.png'
import publicFundPng from '../../common/images/products/publicFund.png'

export const Production = () => {
  return (
    <>
      <Typo children='Production' {...headingStyle}/>
      <Grid container spacing='8'>
        <ProductCard
          message="port-folio-app"
          cardText="自分のポートフォリオのアプリです。フレキシブルデザインに対応しています"
          png={ portFolioPng }
          url='https://comforting-monstera-88ed68.netlify.app' />
        <ProductCard
          message="公金支出可視化app"
          cardText="TOKYO OPEN DATAにある東京の公金支出を可視化したアプリです。"
          png={ publicFundPng }
          url="https://comforting-monstera-88ed68.netlify.app" />
      </Grid>
    </>
  );
};
