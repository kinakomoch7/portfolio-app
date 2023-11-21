import { Grid, Card, CardMedia, CardContent } from "@mui/material";
import { Typo } from "../atomos/Typo";
import { cardHeadingStyle } from "../../common/styles/heading";

type Props = {
  message: string;
  cardText: string;
  png: string;
};

export const ProductCard = (props: Props) => {
  const { message, cardText, png } = props;

  return (
    <>
      <Grid item xs={12} md={6}>
        <Card>
          <Typo children={message} align="center" {...cardHeadingStyle}/>
          <CardMedia style={{ height: 0, paddingTop: "56.25%" }} image={png} />
          <CardContent><Typo children={cardText} /></CardContent>
        </Card>
      </Grid>
    </>
  );
};
