import { Avatar } from "@mui/material";
import { Introduce } from "../molecules/Introduce";
import { HeadingTxt } from "../atomos/HeadingTxt";

export const Profile = () => {
  return (
    <div className="flex flex-col">
      <HeadingTxt message="Profile" />
      <div className="flex">
        <Avatar />
        <Introduce />
      </div>
    </div>
  );
};
