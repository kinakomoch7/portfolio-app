import { Element } from "react-scroll";
import { headingStyle } from "../../common/styles/heading";
import { Typo } from "../atomos/Typo";
import { NAcoordion } from "../atomos/NAcoordion";
import { CAREERS } from "../../constants/careers";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

export const Career = () => {

  return (
    <Element name="career">
      <Typo children='Career' {...headingStyle} />
      <Grid container justifyContent='center'>
        <Card sx={{ width:'70vw' }}>
          {CAREERS.map((career, index) => (
            <NAcoordion key={index} {...career} />
          ))}
        </Card>
      </Grid>
    </Element>
  );
};
