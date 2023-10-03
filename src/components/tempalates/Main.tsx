import { Career } from "../organisms/Career";
import { Contact } from "../organisms/Contact";
import { Footer } from "../organisms/Footer";
import { Header } from "../organisms/Header";
import { Profile } from "../organisms/Profile";
import { Skill } from "../organisms/Skill";

export const Main = () => {
  return (
    <>
      <Header />
      <Profile />
      <Skill />
      <Career />
      <Contact />
      <Footer />
    </>
  );
};
