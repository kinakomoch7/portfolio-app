import { WHITE } from "../../common/styles/colors";
import { Typo } from "../atomos/Typo";

export const Footer = () => {
  return (
    <div className="bg-indigo-200 p-7 pt-7 bg-BLACK">
      <Typo children='&copy; 2023 Koide Tomoki' align="center" sx={{ fontWeight:'lighter', color:WHITE }}/>
    </div>
  );
};
