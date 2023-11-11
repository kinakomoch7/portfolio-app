import { Grid, Card, CardContent, Box } from "@mui/material";
import { ReactNode } from "react";
import { Typo } from "../atomos/Typo";
import { WHITE } from "../../common/styles/colors";
import { cardHeadingStyle } from "../../common/styles/heading";
import { contentStyle } from "../../common/styles/contents";

type Props = {
  message: string;
  cardText: string;
  icon: ReactNode;
};

export const SkillCard = (props: Props) => {
  const { message, cardText, icon } = props;

  return (
    <>
      <Grid item xs={12} sm={6} md={4}>
        <Card sx={{ backgroundColor: WHITE}}>
          <Typo children={message} {...cardHeadingStyle}/>
          <div className="flex justify-around">
            { icon }
            <CardContent>
              <Typo children={cardText} {...contentStyle} />
              <Box sx={{ m:2 }} />
              <Typo children='スキルレベル：' {...contentStyle} />
            </CardContent>
          </div>
          <Box sx={{ m:4 }} />
        </Card>
      </Grid>
    </>
  );
};
