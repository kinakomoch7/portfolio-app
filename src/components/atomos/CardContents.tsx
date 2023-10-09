import { CardContent, Typography } from "@mui/material";

type Props = {
  text: string;
};

export const CardContents = (props: Props) => {
  const { text } = props;

  return (
    <>
      <CardContent>
        <Typography>{text}</Typography>
      </CardContent>
    </>
  );
};
