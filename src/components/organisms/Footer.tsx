import { Typo } from "../atomos/Typo";
import { Sitemap } from "../molecules/Sitemap";

export const Footer = () => {
  return (
    <div className="bg-indigo-200 p-7 pt-4">
      <Sitemap />
      <div className="pt-3">
        <Typo children='&copy; 2023 Koide Tomoki' />
      </div>
    </div>
  );
};
