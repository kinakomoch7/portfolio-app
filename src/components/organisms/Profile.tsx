import { Avatar, Card, Container } from "@mui/material";
import { LinkText } from "../molecules/LinkText";
import { Typo } from "../atomos/Typo";
import icon from '../../common/images/icon.png'
import { headingStyle } from "../../common/styles/heading";

export const Profile = () => {
  return (
    <>
      <Container>
        <Card>
          <div className="flex-col bg-WHITE">
            <Typo children='Profile' {...headingStyle} />

            <div className="flex justify-center">
              <Avatar src={icon} sx={{ width:200,  height:200 }}/>

              <div className="flex-col" >
                <Typo children='小出朋希' align="center" sx={{ fontWeight:'bolder' }} fontFamily='-moz-initial' />
                <LinkText
                  message="GitHub"
                  link="https://github.com/kinakomoch7"
                  linkTxt="kinakomoch7"
                />
                <LinkText
                  message="Zenn"
                  link="https://zenn.dev/k_tomoki"
                  linkTxt="きなこ"
                />
              </div>

            </div>

          </div>
        </Card>
      </Container>
    </>
  );
};
