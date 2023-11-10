import { Grid, Card, CardContent } from "@mui/material";
import { ReactNode } from "react";
import { Typo } from "../atomos/Typo";

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
        <Card>
          <Typo children={message} />
          { icon }
          <CardContent><Typo children={cardText} /></CardContent>
        </Card>
      </Grid>
    </>
  );
};
