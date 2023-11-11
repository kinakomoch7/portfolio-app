import { Box } from "@mui/material";
import { NLink } from "../atomos/NLink";
import { Typo } from "../atomos/Typo";

type Props = {
  message: string;
  link: string;
  linkTxt: string;
};

export const LinkText = (props: Props) => {
  const { message, link, linkTxt } = props;

  return (
    <div className="flex justify-around">
      <Typo children={message} alignContent='center' fontFamily='serif' />
      <Box sx={{ m:1 }} />
      <NLink about={link} children={linkTxt} />
    </div>
  );
};
