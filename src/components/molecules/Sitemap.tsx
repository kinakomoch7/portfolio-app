import { List } from "@mui/material";
import { ListsItem } from "../atomos/ListsItem";

const items = ["Profile", "Skill", "Carrer", "Production"];

export const Sitemap = () => {
  return (
    <div className="sitemap">
      <List>
        {items.map((item) => (
          <ListsItem message={item} />
        ))}
      </List>
    </div>
  );
};
