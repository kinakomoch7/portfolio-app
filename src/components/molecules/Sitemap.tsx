import { ListButton } from "../atomos/ListButton";

const items = ["Profile", "Skill", "Carrer", "Production"];

export const Sitemap = () => {
  return (
    <div>
      <ul className="flex flex-wrap">
        {items.map((item) => (
          <li key={item} className="grow">
            <ListButton message={item} />
          </li>
        ))}
      </ul>
    </div>
  );
};
