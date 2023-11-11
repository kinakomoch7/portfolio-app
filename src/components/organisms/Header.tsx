import { Box, AppBar } from "@mui/material";
import { ToolBar } from "../molecules/ToolBar";
import { WHITE } from "../../common/styles/colors";

export const Header = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ backgroundColor:WHITE }} >
          <ToolBar />
        </AppBar>
      </Box>
    </>
  );
};
