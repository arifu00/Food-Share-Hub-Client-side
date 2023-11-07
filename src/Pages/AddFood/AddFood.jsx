import { Button, Card, Input, Typography } from "@material-tailwind/react";

import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import useAxios from "../../hooks/useAxios";
import toast from "react-hot-toast";

const AddFood = () => {
  const { user } = useContext(AuthContext);
  const axios = useAxios();
  //   console.log(user);
  const handleAddFood = (e) => {
    e.preventDefault();
    const form = e.target;
    const foodName = form.foodName.value;
    const foodImage = form.foodImg.value;
    const foodQuantity = form.foodQuantity.value;
    const pickupLocation = form.pickupLocation.value;
    const expiredDate = form.expiredDate.value;
    const additionalNotes = form.additionalNotes.value;

    const addFood = {
      foodName,
      foodImage,
      foodQuantity,
      pickupLocation,
      expiredDate,
      additionalNotes,
      donatorImage: user?.photoURL
        ? user?.photoURL
        : "https://i.ibb.co/bmWq5VV/user6.jpg",
      donatorName: user?.displayName,
      donatorEmail: user?.email,
      foodStatus: "Available",
    };
    console.log(addFood);
    const toastId = toast.loading("Please wait ...");
    axios.post("/foods", addFood).then((res) => {
      console.log();
      if (res.data.insertedId) {
        toast.success("Your Donate Successful", { id: toastId });
      }
    });
  };
  return (
    <div className="my-20 flex justify-center items-center">
      <Card
        color="transparent"
        shadow={true}
        className="border p-10 shadow-xl border-blue-gray-200 "
      >
        <Typography
          variant="h4"
          className="text-center text-2xl font-black"
          color="blue-gray"
        >
          Add Food
        </Typography>
        {/* form  */}
        <form onSubmit={handleAddFood} className="mt-8 mb-2 w-96 md:w-[900px]">
          <div className="mb-1 flex flex-col gap-6">
            {/* form 1st line */}
            <div className="md:flex gap-4 justify-center items-center w-full">
              {/* food Name  */}
              <div className="w-full">
                <Typography variant="h6" color="blue-gray" className="mb-3">
                  Food Name
                </Typography>
                <Input
                  size="lg"
                  name="foodName"
                  placeholder="Food Name"
                  className=" !border-t-blue-gray-200  focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
              </div>
              {/* food img  */}
              <div className="w-full">
                <Typography variant="h6" color="blue-gray" className="mb-3">
                  Food Image
                </Typography>
                <Input
                  size="lg"
                  name="foodImg"
                  placeholder="Food Image"
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
              </div>
            </div>
            {/* form 2nd line */}
            <div className="md:flex gap-4 justify-center items-center w-full">
              {/* Food Quantity  */}
              <div className="w-full">
                <Typography variant="h6" color="blue-gray" className="mb-3">
                  Food Quantity
                </Typography>
                <Input
                  size="lg"
                  type="number"
                  name="foodQuantity"
                  placeholder="Food Quantity"
                  className=" !border-t-blue-gray-200  focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
              </div>
              {/* Pickup Location  */}
              <div className="w-full">
                <Typography variant="h6" color="blue-gray" className="mb-3">
                  Pickup Location
                </Typography>
                <Input
                  size="lg"
                  name="pickupLocation"
                  placeholder="Pickup Location"
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
              </div>
            </div>
            {/* form 3rd line */}
            <div className="md:flex gap-4 justify-center items-center w-full">
              {/*  Expired Date */}
              <div className="w-full">
                <Typography variant="h6" color="blue-gray" className="mb-3">
                  Expired Date
                </Typography>
                <Input
                  size="lg"
                  type="date"
                  name="expiredDate"
                  placeholder="Expired Date/"
                  className=" !border-t-blue-gray-200  focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
              </div>
              {/* Additional Notes  */}
              <div className="w-full">
                <Typography variant="h6" color="blue-gray" className="mb-3">
                  Additional Notes
                </Typography>
                <Input
                  size="lg"
                  name="additionalNotes"
                  placeholder="Additional Notes"
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
              </div>
            </div>
          </div>

          <Button className="mt-6" fullWidth type="submit">
            ADD FOOD
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default AddFood;
