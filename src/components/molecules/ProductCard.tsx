import { Grid, Card, CardMedia, CardContent } from "@mui/material";
import icon from "../../common/images/icon.png";
import { Typo } from "../atomos/Typo";

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
          <Typo children={message} align="center"/>
          <CardMedia style={{ height: 0, paddingTop: "56.25%" }} image={icon} />
          <CardContent><Typo children={cardText} /></CardContent>
        </Card>
      </Grid>
    </>
  );
};
