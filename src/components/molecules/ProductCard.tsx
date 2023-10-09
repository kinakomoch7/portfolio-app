import { Grid, Card, CardMedia } from "@mui/material";
import { HeadingTxt } from "../atomos/HeadingTxt";
import { CardContents } from "../atomos/CardContents";
import icon from "../../common/images/icon.png";

type Props = {
  message: string;
  cardText: string;
};

export const ProductCard = (props: Props) => {
  const { message, cardText } = props;

  return (
    <>
      <Grid item xs={12} md={6}>
        <Card>
          <HeadingTxt message={message} />
          <CardMedia style={{ height: 0, paddingTop: "56.25%" }} image={icon} />
          <CardContents text={cardText} />
        </Card>
      </Grid>
    </>
  );
};
