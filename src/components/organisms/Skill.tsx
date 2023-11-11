import { Box, Container, Grid } from "@mui/material";
import { SkillCard } from "../molecules/SkillCard";
import { PythonIcon } from "../../common/images/PythonIcon";
import { ReactIcon } from "../../common/images/ReactIcon";
import { CIcon } from "../../common/images/CIcon";
import { JavaIcon } from "../../common/images/JavaIcon";
import { Typo } from "../atomos/Typo";
import { headingStyle } from "../../common/styles/heading";
import { LIGHT_PINK } from "../../common/styles/colors";

export const Skill = () => {
  return (
    <Box bgcolor={LIGHT_PINK} >
      <Container>
        <Typo children='Skill' {...headingStyle}/>
        <Grid container spacing={{ xs: 1, sm: 2, md: 3 }}>
          <SkillCard headText="React" careerText="1" revel={5} icon={<ReactIcon size={100} />} />
          <SkillCard headText="python" careerText="半" revel={1} icon={<PythonIcon size={100} />}/>
          <SkillCard headText="C言語" careerText="1" revel={3} icon={<CIcon size={100} />}/>
          <SkillCard headText="Java" careerText="1" revel={2} icon={<JavaIcon size={100} />}/>
        </Grid>
        <Box sx={{ m:5 }} />
      </Container>
    </Box>
  );
};
