import { Button, ButtonProps } from "@mui/material";

export const NButton = (props: ButtonProps) => {
  return <Button {...props} >{props.children}</Button>
};
