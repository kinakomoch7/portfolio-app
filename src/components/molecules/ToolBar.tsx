import { Toolbar, Button } from "@mui/material";
import { HeaderTypo } from "../atomos/HeaderTypo";
import { MIcon } from "../atomos/MIcon";

export const ToolBar = () => {
  return (
    <>
      <Toolbar>
        <MIcon />
        <HeaderTypo />
        <Button color="inherit">Login</Button>
      </Toolbar>
    </>
  );
};
