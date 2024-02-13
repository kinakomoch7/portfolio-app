import { Element } from "react-scroll";
import { headingStyle } from "../../common/styles/heading";
import { Typo } from "../atomos/Typo";

export const Career = () => {
  return (
    <Element name="career">
      <Typo children='Career' {...headingStyle} />
    </Element>
  );
};
