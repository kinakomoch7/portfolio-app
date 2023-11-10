import { NButton } from "../atomos/NButton";

const items = ["Profile", "Skill", "Carrer", "Production"];

export const Sitemap = () => {
  return (
    <div>
      <ul className="flex flex-wrap">
        {items.map((item) => (
          <li key={item} className="grow text-center">
            <NButton color="inherit" children={item} />
          </li>
        ))}
      </ul>
    </div>
  );
};
