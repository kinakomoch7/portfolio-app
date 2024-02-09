import { headingStyle } from "../../common/styles/heading";
import { Typo } from "../atomos/Typo";
import { Email } from "../molecules/Email";


export const Contact = () => {


  return (
    <>
      <Typo children='Contact' {...headingStyle} />
      <Email />
    </>
  );
};
