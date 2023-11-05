import { useEffect, useState } from "react";
import memberIcon from "../assets/icon/members.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {
  Autoplay,
  Pagination,
  EffectCoverflow,
} from "swiper/modules";

const BestDonors = () => {
  const [doners, setDoners] = useState(null);
  console.log(doners);
  useEffect(() => {
    fetch("DonerData.json")
      .then((res) => res.json())
      .then((data) => setDoners(data));
  }, []);
  return (
    <div className="bg-bestDonorsBg relative  bg py-10 my-10">

      <div className="container mx-auto px-2 md:px-5 my-5 md:my-20">
        <div className="">
          <div className="flex justify-center items-center text-[#1C1C1C]">
            <img src={memberIcon} alt="" />
          </div>
          <div className="text-center mt-2">
            <h6 className="text-xl font-semibold italic">This week </h6>
            <h2 className="text-2xl font-bold hover:underline">
              Our Best donors
            </h2>
          </div>
        </div>
        <div className="">
          <Swiper 
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="3"
            loop={true}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 0,
              modifier: 0,
              
            }}
            // navigation={true}
            pagination={true}
            modules={[Autoplay, EffectCoverflow, Pagination]}
            className="mySwiper  mt-12"
          >
            {doners?.map((donor) => (
              <SwiperSlide key={donor.id}>
                <div className="bg-[#FFFFFF] rounded-2xl shadow-xl ml-4">
                  <div className="flex justify-center">
                    <img
                      className="rounded-full w-[200px] h-[200px] mt-16 border-2 border-blue-300"
                      src={donor.donorImg}
                      alt={donor.donorName}
                    />
                  </div>
                  <div className="pl-10 mt-8 font-serif">
                    <h4 className="text-[#D59B2D] text-xl font-semibold">
                      {donor.donorName}
                    </h4>
                    <h6 className="text-[#6E7C90] text-xl pl-4 font-medium">
                      {donor.occupation}
                    </h6>
                    <h6 className="text-end pr-4 pb-10 ">
                      --------{" "}
                      <span className="text-[#93a8c7] hover:text-[#D59B2D]">
                        Read More
                      </span>
                    </h6>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default BestDonors;
