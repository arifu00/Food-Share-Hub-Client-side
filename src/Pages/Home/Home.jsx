import Banner from "../../Components/Banner";
import BestDonors from "../../Components/BestDonors";
import ContactCard from "../../Components/ContactCard";
import HelpOther from "../../Components/HelpOther";
const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <HelpOther></HelpOther>
      <BestDonors></BestDonors>
      <ContactCard></ContactCard>
    </div>
  );
};

export default Home;
