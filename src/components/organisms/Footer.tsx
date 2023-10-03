import { Copyright } from "../atomos/Copyright";
import { Sitemap } from "../molecules/Sitemap";

export const Footer = () => {
  return (
    <div className="footer">
      <Sitemap />
      <Copyright />
    </div>
  );
};
