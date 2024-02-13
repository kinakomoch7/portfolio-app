import { Avatar, Container, Grid } from "@mui/material";
import { LinkText } from "../molecules/LinkText";
import { Typo } from "../atomos/Typo";
import icon from '../../common/images/icon.png'
import { cardHeadingStyle, headingStyle } from "../../common/styles/heading";
import { contentStyle } from "../../common/styles/contents";
import { Element } from "react-scroll";

export const Profile = () => {
  return (
    <Element name='profile'>
      <Container>
        <div className="flex-col bg-WHITE">
          <Typo children='Profile' {...headingStyle} />
          

          <div className="flex justify-center space-x-4">
            <Avatar src={icon} sx={{ width:150,  height:150 }}/>

            <Grid container direction='column' maxWidth='15em' >
              <Grid item xs={2}>
                <Typo children='小出朋希' {...cardHeadingStyle} />
              </Grid>
              <Grid item xs={4}>
                <Typo children='日本大学 文理学部 情報科学科 2002年の神奈川県出身。' {...contentStyle} />
              </Grid>
              <Grid item xs={1}>
                <LinkText
                  message="GitHub"
                  link="https://github.com/kinakomoch7"
                  linkTxt="kinakomoch7"
                />
              </Grid>
              <Grid item>
                <LinkText
                  message="Zenn"
                  link="https://zenn.dev/k_tomoki"
                  linkTxt="きなこ"
                />
              </Grid>
            </Grid>

            </div>

          </div>
      </Container>
    </Element>
  );
};
