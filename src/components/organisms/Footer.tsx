import { Copyright } from "../atomos/Copyright";
import { Sitemap } from "../molecules/Sitemap";

export const Footer = () => {
  return (
    <div className="bg-indigo-200 p-7 pt-4">
      <Sitemap />
      <div className="pt-3">
        <Copyright />
      </div>
    </div>
  );
};
