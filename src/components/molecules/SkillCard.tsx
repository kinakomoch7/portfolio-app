import { Grid, Card, CardContent, Box } from "@mui/material";
import { ReactNode } from "react";
import { Typo } from "../atomos/Typo";
import { WHITE } from "../../common/styles/colors";
import { cardHeadingStyle } from "../../common/styles/heading";
import { contentStyle } from "../../common/styles/contents";

type Props = {
  headText: string;
  careerText: string;
  revel: number;
  icon: ReactNode;
};

const starView = (props: number) => {
  let count = props;
  let stars = '';
  
  for(let i = 0; i < 5; i++){
    if(count > 0) {
      stars = stars + '★';
    } else {
      stars = stars + '☆';
    }
    count--;
  };

  return stars;
}

export const SkillCard = (props: Props) => {
  const { headText, careerText, revel , icon } = props;

  const stars = starView(revel)

  return (
    <>
      <Grid item xs={12} sm={6} md={4}>
        <Card sx={{ backgroundColor: WHITE}}>
          <Typo children={headText} {...cardHeadingStyle}/>
          <div className="flex justify-around">
            { icon }
            <CardContent>
              <Typo children={`経験歴: ${careerText}年`} {...contentStyle} />
              <Box sx={{ m:2 }} />
              <Typo children={`スキルレベル： ${stars} `} {...contentStyle} />
            </CardContent>
          </div>
          <Box sx={{ m:4 }} />
        </Card>
      </Grid>
    </>
  );
};
