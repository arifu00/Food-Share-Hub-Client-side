import { useEffect, useState } from "react";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Avatar,
  Tooltip,
} from "@material-tailwind/react";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SkeletonEffect from "./SkeletonEffect/SkeletonEffect";
import { useQuery } from "@tanstack/react-query";
import useAxios from "../hooks/useAxios";

const FeaturedFoods = () => {
  const axios = useAxios();

  const getFoods = async () => {
    const res = await axios.get("/foods?sortField=foodQuantity&&sortOrder=desc");
    return res;
  };

  const {
    data,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["food",],
    queryFn: getFoods,
  });

  console.log(isLoading, isError, );
  if (isLoading) {
    return (
      <div className="container mx-auto px-4 my-8">
        <SkeletonEffect></SkeletonEffect>
      </div>
    );
  }

  const motionVariants = {
    hover: { scale: 1 },
    initial: { scale: 0.9 },
  };
  return (
    <div className="my-12  md:mt-32 container mx-auto px-2 md:px-5 md:my-20">
      <div className="">
        <h2 className="text-xl md:text-2xl lg:text-5xl font-bold mb-12 md:mb-20 text-center hover:underline font-serif">
          Featured Foods
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data?.data.slice(0, 6).map((food) => (
          <motion.div
            key={food.id}
            variants={motionVariants}
            initial="initial"
            whileHover="hover"
          >
            <Card className=" overflow-hidden shadow-xl ">
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
              <CardBody className="h-[200px]">
                <Typography variant="h4" className="text-[#D59B2D]">
                  || {food.foodName} ||
                </Typography>
                <Typography
                  variant="lead"
                  color="gray"
                  className="mt-3 font-medium"
                >
                  <span className="font-bold text-[#6E7C90]">Food Taste:</span>{" "}
                  {food.additionalNotes}
                </Typography>
                <Typography variant="lead" color="gray" className="font-medium">
                  <span className="font-bold text-[#6E7C90]">
                    Food Quantity:
                  </span>{" "}
                  {food.foodQuantity}
                </Typography>
                <Typography variant="lead" color="gray" className="font-medium">
                  <span className="font-bold text-[#6E7C90]">
                    Expired Date:
                  </span>{" "}
                  {food.expiredDate}
                </Typography>
                <Typography variant="lead" color="gray" className="font-medium">
                  <span className="font-bold text-[#6E7C90]">
                    Pickup Location:
                  </span>{" "}
                  {food.pickupLocation}
                </Typography>
              </CardBody>
              <CardFooter className="flex items-center justify-between mt-10">
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
                <button className="flex items-center gap-3 cursor-pointer font-medium text-xl hover:text-[#D59B2D] bg-amber-300 px-4 py-2 rounded-lg hover:bg-[#494a4b]">
                <Link
                      className="flex items-center gap-3"
                      to={`/food/${food._id}`}
                    >
                      <h6>More</h6>
                      <BsArrowRight className="hover:text-[#FF3811]"></BsArrowRight>
                    </Link>
                </button>
              </CardFooter>
            </Card>{" "}
          </motion.div>
        ))}
      </div>
      <div className="text-center mt-20">
        <button className="text-lg font-semibold px-4 py-3 rounded-lg text-[#D59B2D] border-2 border-[#D59B2D] hover:text-white hover:bg-[#FF3811] hover:border-0 ">
          <Link to="/availableFoods">All Foods</Link>
        </button>
      </div>
    </div>
  );
};

export default FeaturedFoods;
