import { Link } from "react-scroll";
import { BLACK } from "../../common/styles/colors";
import { NButton } from "../atomos/NButton";

const items = ["profile", "production", "skill", "career"];

export const Sitemap = () => {
  return (
    <div>
      <ul className="flex flex-wrap">
        {items.map((item) => (
          <Link key={item} className="grow text-center" to={item}>
            <NButton color="inherit" children={item} sx={{color: BLACK}}/>
          </Link>
        ))}
      </ul>
    </div>
  );
};
