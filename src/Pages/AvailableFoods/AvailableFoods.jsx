import {
  Avatar,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Input,
  Tooltip,
  Typography,
} from "@material-tailwind/react";
import { Select, Option } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { BiSolidSearch } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const AvailableFoods = () => {
  const [foods, setFoods] = useState([]);
  console.log(foods);
  useEffect(() => {
    fetch("http://localhost:5000/foods")
      .then((res) => res.json())
      .then((data) => setFoods(data));
  }, []);
  return (
    <div className="">
      {/* top search and filter  */}
      <div className="mt my-4 bg-[#F5F5F5] py-3">
        <div className="container  mx-auto px-2 flex justify-center items-center gap-12">
          {/* search  */}
          <div className="w-72">
            <Input label="Search Food" icon={<BiSolidSearch></BiSolidSearch>} />
          </div>
          {/* filter option  */}
          <div className="w-72">
            <Select
              label="Sort Method"
              animate={{
                mount: { y: 0 },
                unmount: { y: 25 },
              }}
            >
              <Option>Food Expire Date</Option>
            </Select>
          </div>
        </div>

        {/* foods  */}
        <div className="container mx-auto px-4 my-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {foods.map((food) => (
              <Card key={food.id} className=" overflow-hidden shadow-xl ">
                <CardHeader
                  shadow={true}
                  color="transparent"
                  className="m-0 rounded-none"
                >
                  <img
                    src={food.foodImage}
                    alt={food.foodName}
                    className="h-72 w-full object-cover"
                  />
                </CardHeader>
                <CardBody className="h-[250px]">
                  <Typography variant="h4" className="text-[#D59B2D]">
                    || {food.foodName} ||
                  </Typography>
                  <Typography
                    variant="lead"
                    color="gray"
                    className="mt-3 font-medium"
                  >
                    <span className="font-bold text-[#6E7C90]">
                      Food Taste:
                    </span>{" "}
                    {food.additionalNotes}
                  </Typography>
                  <Typography
                    variant="lead"
                    color="gray"
                    className="font-medium"
                  >
                    <span className="font-bold text-[#6E7C90]">
                      Expired Date:
                    </span>{" "}
                    {food.expiredDate}
                  </Typography>
                  <Typography
                    variant="lead"
                    color="gray"
                    className="font-medium"
                  >
                    <span className="font-bold text-[#6E7C90]">
                    Food Quantity :
                    </span>{" "}
                    <strong>{food.foodQuantity}</strong> person to be served
                  </Typography>
                  <Typography
                    variant="lead"
                    color="gray"
                    className="font-medium"
                  >
                    <span className="font-bold text-[#6E7C90]">
                      Pickup Location:
                    </span>{" "}
                    {food.pickupLocation}
                  </Typography>
                </CardBody>
                <CardFooter className="flex items-center justify-between">
                  <div className="flex items-center ">
                    <Tooltip content={food.donatorName}>
                      <Avatar
                        size="lg"
                        variant="circular"
                        alt={food.donatorName}
                        src={food.donatorImage}
                        className="border-2 border-white hover:z-10 cursor-pointer"
                      />
                    </Tooltip>
                  </div>
                  <button className=" cursor-pointer font-medium text-xl hover:text-[#D59B2D] bg-amber-300 px-4 py-2 rounded-lg hover:bg-[#494a4b]">
                    <Link className="flex items-center gap-3" to={`/food/${food._id}`}><h6>More</h6>
                    <BsArrowRight className="hover:text-[#FF3811]"></BsArrowRight></Link>
                  </button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvailableFoods;
