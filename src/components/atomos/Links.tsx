import { Link } from "@mui/material";

type Props = {
  link: string;
  linkText: string;
};

export const Links = (props: Props) => {
  const { link, linkText } = props;

  return (
    <div>
      <Link href={link}>{linkText}</Link>
    </div>
  );
};
