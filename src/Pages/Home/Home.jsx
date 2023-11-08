import Banner from "../../Components/Banner";
import BestDonors from "../../Components/BestDonors";
import ContactCard from "../../Components/ContactCard";
import FeaturedFoods from "../../Components/FeaturedFoods";
import HelpOther from "../../Components/HelpOther";
const Home = () => {
  document.title = "Food share ||Home";
  return (
    <div>
      <Banner></Banner>
      <FeaturedFoods></FeaturedFoods>
      <HelpOther></HelpOther>
      <ContactCard></ContactCard>
      <BestDonors></BestDonors>
    </div>
  );
};

export default Home;
