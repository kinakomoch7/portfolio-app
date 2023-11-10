import { Link, LinkProps } from "@mui/material";

export const NLink = (props: LinkProps) => {
  return <Link href={props.about}>{props.children}</Link>
};
