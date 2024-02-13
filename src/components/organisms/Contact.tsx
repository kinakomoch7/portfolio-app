import { Element } from "react-scroll";
import { headingStyle } from "../../common/styles/heading";
import { Typo } from "../atomos/Typo";
import { Email } from "../molecules/Email";


export const Contact = () => {


  return (
    <Element name='contact'>
      <Typo children='Contact' {...headingStyle} />
      <Email />
    </Element>
  );
};
