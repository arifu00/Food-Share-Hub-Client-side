import icon1 from "../assets/icon/calender.svg";
import icon2 from "../assets/icon/phone-message.svg";
import icon3 from "../assets/icon/location.svg";
const ContactCard = () => {
  return (
    <div className="bg-[#151515] ">
      <div className="container mx-auto px-2 md:px-5 my-5 md:my-20">
        <div className="text-white rounded-2xl grid grid-cols-1 md:grid-cols-2 gap-5 lg:grid-cols-3 px-16 py-24">
          <div className="flex gap-5 items-center">
            {/* icon  */}
            <div className="">
              <img src={icon1} alt="" />
            </div>
            {/* content */}
            <div className="">
              <h6 className="text-base font-medium">
                We are open monday-friday
              </h6>
              <h3 className="text-2xl font-bold">7:00 am - 9:00 pm</h3>
            </div>
          </div>
          <div className="flex gap-5 items-center">
            {/* icon  */}
            <div className="">
              <img src={icon2} alt="" />
            </div>
            {/* content */}
            <div className="">
              <h6 className="text-base font-medium">Have a question?</h6>
              <h3 className="text-2xl font-bold">+2546 251 2658</h3>
            </div>
          </div>
          <div className="flex gap-5 items-center">
            {/* icon  */}
            <div className="">
              <img src={icon3} alt="" />
            </div>
            {/* content */}
            <div className="">
              <h6 className="text-base font-medium">
                our address
              </h6>
              <h3 className="text-2xl font-bold">Banani, Dhaka</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
