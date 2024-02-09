import { Card, CardMedia, CardContent, CardActionArea } from "@mui/material";
import { Typo } from "../atomos/Typo";
import { cardHeadingStyle } from "../../common/styles/heading";

type Props = {
  message: string;
  cardText: string;
  png: string;
  url: string;
};

export const ProductCard = (props: Props) => {
  const { message, cardText, png, url } = props;

  return (
    <>
      <Card>
        <CardActionArea href={ url } >
          <Typo children={message} align="center" {...cardHeadingStyle}/>
          <CardMedia style={{ height: 0, paddingTop: "56.25%" }} image={png} />
          <CardContent><Typo children={cardText} /></CardContent>
        </CardActionArea>
      </Card>
    </>
  );
};
