import { Links } from "../atomos/Links";

type Props = {
  message: string;
  link: string;
  linkTxt: string;
};

export const LinkText = (props: Props) => {
  const { message, link, linkTxt } = props;

  return (
    <div className="flex">
      <p>{message}</p>
      <Links link={link} linkText={linkTxt} />
    </div>
  );
};
