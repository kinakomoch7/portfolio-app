import { IconButton, IconButtonProps } from "@mui/material";
import { ReactNode } from "react";

type IconProps = {
  IButtonProps: IconButtonProps;
  icon: ReactNode;
}

export const NIcon = (props: IconProps) => {

  const { IButtonProps, icon } = props

  return <IconButton {...IButtonProps} >{ icon }</IconButton>;
};
