import { IconButtonProps, Toolbar } from "@mui/material";
import { NIcon } from "../atomos/NIcon";
import { Typo } from "../atomos/Typo";
import MenuIcon from "@mui/icons-material/Menu";

export const ToolBar = () => {

  const IButtonProps: IconButtonProps = {
    color: 'inherit',
    size: 'large',
    edge: 'start',
    sx: { mr: 2 }
  }

  return (
    <>
      <Toolbar>
        <NIcon IButtonProps={ {...IButtonProps} } icon={<MenuIcon />} />
        <Typo children='Koide Tomoki Portfolio' variant="h6" component="div" sx={{ flexGrow: 1 }}/>
      </Toolbar>
    </>
  );
};
