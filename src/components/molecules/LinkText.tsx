import { NLink } from "../atomos/NLink";
import { Typo } from "../atomos/Typo";

type Props = {
  message: string;
  link: string;
  linkTxt: string;
};

export const LinkText = (props: Props) => {
  const { message, link, linkTxt } = props;

  return (
    <div className="flex">
      <Typo children={message} />
      <NLink about={link} children={linkTxt} />
    </div>
  );
};
