import { Avatar, Card, Container } from "@mui/material";
import { LinkText } from "../molecules/LinkText";
import { Typo } from "../atomos/Typo";

export const Profile = () => {
  return (
    <>
      <Container>
        <Card>
          <div className="flex-col">
            <Typo children='Profile' />
            <div className="flex justify-center">
              <Avatar />
              <div className="flex-col">
                <Typo children='小出朋希' />
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
