import { Avatar, Card, Container } from "@mui/material";
import { HeadingTxt } from "../atomos/HeadingTxt";
import { Name } from "../atomos/Name";
import { LinkText } from "../molecules/LinkText";

export const Profile = () => {
  return (
    <>
      <Container>
        <Card>
          <div className="flex-col">
            <HeadingTxt message="Profile" />
            <div className="flex justify-center">
              <Avatar />
              <div className="flex-col">
                <Name />
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
