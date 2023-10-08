import { Career } from "../organisms/Career";
import { Contact } from "../organisms/Contact";
import { Footer } from "../organisms/Footer";
import { Header } from "../organisms/Header";
import { Production } from "../organisms/Production";
import { Profile } from "../organisms/Profile";
import { Skill } from "../organisms/Skill";

export const Main = () => {
  return (
    <>
      <Header />
      <Profile />
      <Production />
      <Skill />
      <Career />
      <Contact />
      <Footer />
    </>
  );
};
