import { Typography, TypographyProps } from "@mui/material"

export const Typo = (props:TypographyProps) => {
  return <Typography {...props} >{props.children}</Typography>
};
