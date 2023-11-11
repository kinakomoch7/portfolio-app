import { Grid } from "@mui/material";
import { NLink } from "../atomos/NLink";
import { Typo } from "../atomos/Typo";
import { contentStyle } from "../../common/styles/contents";

type Props = {
  message: string;
  link: string;
  linkTxt: string;
};

export const LinkText = (props: Props) => {
  const { message, link, linkTxt } = props;

  return (
    <Grid container spacing={2} >
      <Grid item xs={4}>
        <Typo children={`${message}: `} {...contentStyle} />
      </Grid>
      <Grid item xs={8}>
        <NLink about={link} children={linkTxt} />
      </Grid>
    </Grid>
  );
};
