import { Card, Container, Grid } from "@mui/material";
import { SkillCard } from "../molecules/SkillCard";
import { PythonIcon } from "../../common/images/PythonIcon";
import { ReactIcon } from "../../common/images/ReactIcon";
import { CIcon } from "../../common/images/CIcon";
import { JavaIcon } from "../../common/images/JavaIcon";
import { Typo } from "../atomos/Typo";

export const Skill = () => {
  return (
    <>
      <Container>
        <Card>
          <Typo children='Skill' />
          <Grid container spacing={{ xs: 1, sm: 2, md: 3 }}>
            <SkillCard message="react" cardText="1年" icon={<ReactIcon size={100} />} />
            <SkillCard message="python" cardText="半年" icon={<PythonIcon size={100} />}/>
            <SkillCard message="C言語" cardText="1年" icon={<CIcon size={100} />}/>
            <SkillCard message="Java" cardText="1年" icon={<JavaIcon size={100} />}/>
          </Grid>
        </Card>
      </Container>
    </>
  );
};
