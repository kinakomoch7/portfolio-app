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
          <SkillCard message="React" cardText="経験歴：1年" icon={<ReactIcon size={100} />} />
          <SkillCard message="python" cardText="経験歴：半年" icon={<PythonIcon size={100} />}/>
          <SkillCard message="C言語" cardText="経験歴：1年" icon={<CIcon size={100} />}/>
          <SkillCard message="Java" cardText="経験歴：1年" icon={<JavaIcon size={100} />}/>
        </Grid>
        <Box sx={{ m:5 }} />
      </Container>
    </Box>
  );
};
