import Banner from "../../Components/Banner";
import loadingImg from "../../assets/loading/loading.gif";
const Home = () => {
  return (
    <div>
     <Banner></Banner>
      <div className="text-red-700">Ami aci vhai, apni koi</div>
      <div className="flex justify-center">
        <img src={loadingImg} alt="" />
      </div>
    </div>
  );
};

export default Home;
