import { Toolbar } from "@mui/material";
import { HeaderTypo } from "../atomos/HeaderTypo";
import { MIcon } from "../atomos/MIcon";
import { ListButton } from "../atomos/ListButton";

export const ToolBar = () => {
  return (
    <>
      <Toolbar>
        <MIcon />
        <HeaderTypo />
        <ListButton message="Login" />
      </Toolbar>
    </>
  );
};
