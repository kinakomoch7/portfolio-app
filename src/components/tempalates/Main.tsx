import { Career } from "../organisms/Career";
import { Footer } from "../organisms/Footer";
import { Header } from "../organisms/Header";
import { Production } from "../organisms/Production";
import { Profile } from "../organisms/Profile";
import { Skill } from "../organisms/Skill";

export const Main = () => {
  return (
    <div className='bg-WHITE flex flex-col space-y-10' >
      <Header />
      <Profile />
      <Production />
      <Skill />
      <Career />
      {/* <Contact /> */}
      <Footer />
    </div>
  );
};
