import { Toolbar } from "@mui/material";
import { Typo } from "../atomos/Typo";
import { BLACK } from "../../common/styles/colors";
import { Sitemap } from "./Sitemap";

export const ToolBar = () => {

  return (
    <>
      <Toolbar>
        <Typo children='Koide Tomoki Portfolio' variant="h6" component="div" sx={{ flexGrow: 1, color:BLACK }}/>
        <Sitemap />
      </Toolbar>
    </>
  );
};
