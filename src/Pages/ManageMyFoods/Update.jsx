import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Input,
  Typography,
} from "@material-tailwind/react";
import { useLoaderData } from "react-router-dom";
import useAxios from "../../hooks/useAxios";
import toast from "react-hot-toast";

const Update = () => {
  const food = useLoaderData();
  const axios = useAxios();
  // console.log(food);

  const handleUpdateFood = (e) => {
    e.preventDefault();
    const form = e.target;
    // console.log(form);

    const foodName = form.foodName.value;
    const foodImage = form.foodImage.value;
    const pickupLocation = form.pickupLocation.value;
    const expiredDate = form.expiredDate.value;
    const additionalNotes = form.additionalNotes.value;

    const updatedFood = {
      foodName,
      foodImage,
      pickupLocation,
      expiredDate,
      additionalNotes,
    };
    // console.log(updatedFood);
    const toastId = toast.loading("Please wait ...");
    axios.patch(`/update/${food._id}`, updatedFood).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        toast.success("Updated Successful", { id: toastId });
      }
    });
  };
  return (
    <div>
      <div className="container mx-auto my-20">
        <Card className="mx-auto w-6/12 shadow-2xl border border-gray-500">
          <form onSubmit={handleUpdateFood}>
            <CardBody className="flex flex-col gap-4">
              <Typography
                variant="h4"
                color="blue-gray"
                className="text-center"
              >
                Update Food
              </Typography>
              {/* 1st line */}
              <div className="flex justify-center gap-4 w-full">
                <div className="w-full">
                  <Typography className="" variant="h6">
                    Food Name
                  </Typography>
                  <Input
                    defaultValue={food.foodName}
                    size="lg"
                    name="foodName"
                  />
                </div>
                <div className="w-full">
                  <Typography className="" variant="h6">
                    Food Image
                  </Typography>
                  <Input
                    defaultValue={food.foodImage}
                    size="lg"
                    name="foodImage"
                  />
                </div>
              </div>

              {/* 2nd line */}
              <div className="flex justify-center gap-4 w-full">
                <div className="w-full">
                  <Typography className="" variant="h6">
                    Pickup Location
                  </Typography>
                  <Input
                    defaultValue={food.pickupLocation}
                    size="lg"
                    name="pickupLocation"
                  />
                </div>
                <div className="w-full">
                  <Typography className="" variant="h6">
                    Expire Date
                  </Typography>
                  <Input
                    type="date"
                    defaultValue={food.expiredDate}
                    name="expiredDate"
                    size="lg"
                  />
                </div>
              </div>
              <Typography className="" variant="h6">
                Additional Notes
              </Typography>
              <Input
                defaultValue={food.additionalNotes}
                size="lg"
                name="additionalNotes"
              />
            </CardBody>
            <CardFooter className="pt-0">
              <Button variant="gradient" type="submit" fullWidth>
                Update Food
              </Button>
            </CardFooter>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default Update;
