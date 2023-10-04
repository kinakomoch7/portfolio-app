import { Box, AppBar } from "@mui/material";
import { ToolBar } from "../molecules/ToolBar";

export const Header = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <ToolBar />
        </AppBar>
      </Box>
    </>
  );
};
