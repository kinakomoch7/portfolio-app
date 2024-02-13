import { Box, Container, Grid } from "@mui/material";
import { SkillCard } from "../molecules/SkillCard";
import { Typo } from "../atomos/Typo";
import { headingStyle } from "../../common/styles/heading";
import { LIGHT_PINK } from "../../common/styles/colors";
import { Element } from "react-scroll";
import { skills } from "../../constants/skills";

export const Skill = () => {
  return (
    <Element name="skill">
      <Box bgcolor={LIGHT_PINK} >
        <Container>
          <Typo children='Skill' {...headingStyle}/>
          <Grid container spacing={{ xs: 1, sm: 2, md: 3 }}>
            {Object.values(skills).map((skill, index) => (
              <SkillCard key={index} headText={skill.message} careerText={skill.careerText} revel={skill.revel} icon={skill.icon} />
            ))}
          </Grid>
          <Box sx={{ m:5 }} />
        </Container>
      </Box>
    </Element>
  );
};
