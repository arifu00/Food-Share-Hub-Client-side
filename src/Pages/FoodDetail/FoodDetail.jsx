import { useLoaderData } from "react-router-dom";
import {
  Button,
  Dialog,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
} from "@material-tailwind/react";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import useAxios from "../../hooks/useAxios";
import toast from "react-hot-toast";
const FoodDetail = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen((cur) => !cur);
  const food = useLoaderData();
  //   console.log(food);
  const { user } = useContext(AuthContext);
  const axios = useAxios();

  // console.log();
  //   handle request food
  const handleRequestFood = (e) => {
    document.title = "Food share ||Food Detail";
    e.preventDefault();
    const form = e.target;
    console.log(form);

    const foodName = form.foodName.value;
    const foodImage = form.foodImage.value;
    const donatorName = form.donatorName.value;
    const donatorEmail = form.donatorEmail.value;
    const requesterEmail = form.requesterEmail.value;
    const requestDate = form.requestDate.value;
    const pickupLocation = form.pickupLocation.value;
    const expiredDate = form.expiredDate.value;
    const additionalNotes = form.additionalNotes.value;
    const donationMoney = form.donationMoney.value || 0;

    const foodRequest = {
      foodName,
      foodImage,
      donatorName,
      donatorEmail,
      requesterEmail,
      requesterName: user.displayName,
      requesterImage: user.photoURL || "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
      requestDate,
      pickupLocation,
      expiredDate,
      additionalNotes,
      donationMoney,
      id: food._id,
      foodStatus: food.foodStatus || 'available',
    };
    // console.log(foodRequest);
    const toastId = toast.loading("Please wait ...");
    axios.post("/requestFood", foodRequest).then((res) => {
      if (res.data.insertedId) {
        toast.success("Your Request has been Successful", { id: toastId });
      }
    });
  };
  return (
    <div className="bg-[#F5F5F5] p-10">
      <div className="container mx-auto px-2 md:px-5 my-5 ">
        <h3 className="text-center font-bold text-4xl">Food Details Page</h3>

        {/* food info  */}
        <div className="mt-6">
          <div className="ml-16 mt-6">
            <Card className="">
              <CardHeader shadow={false} floated={false} className="h-96">
                <img
                  src={food.foodImage}
                  alt={food.foodName}
                  className="h-full w-full object-cover"
                />
              </CardHeader>
              <CardBody>
                {/* model open  */}
                <Dialog
                  size="lg"
                  open={open}
                  handler={handleOpen}
                  className="bg-transparent shadow-none"
                >
                  <Card className="mx-auto ">
                    <form onSubmit={handleRequestFood}>
                      <CardBody className="flex flex-col gap-4">
                        <Typography
                          variant="h4"
                          color="blue-gray"
                          className="text-center"
                        >
                          Request Food
                        </Typography>
                        <Typography
                          className="mb-3 font-normal text-center"
                          variant="paragraph"
                          color="gray"
                        >
                          You can donate some money ?
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
                              readOnly
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
                              readOnly
                            />
                          </div>
                        </div>
                        {/* 2nd line */}
                        <div className="flex justify-center gap-4 w-full">
                          <div className="w-full">
                            <Typography className="" variant="h6">
                              Donator Name
                            </Typography>
                            <Input
                              defaultValue={food.donatorName}
                              size="lg"
                              name="donatorName"
                              readOnly
                            />
                          </div>
                          <div className="w-full">
                            <Typography className="" variant="h6">
                              Donator Email
                            </Typography>
                            <Input
                              defaultValue={
                                food?.donatorEmail
                                  ? food.donatorEmail
                                  : "user@gmail.com"
                              }
                              name="donatorEmail"
                              size="lg"
                              readOnly
                            />
                          </div>
                        </div>
                        {/* 3rd line */}
                        <div className="flex justify-center gap-4 w-full">
                          <div className="w-full">
                            <Typography className="" variant="h6">
                              Requester Email
                            </Typography>
                            <Input
                              defaultValue={user.email}
                              size="lg"
                              name="requesterEmail"
                              readOnly
                            />
                          </div>
                          <div className="w-full">
                            <Typography className="" variant="h6">
                              Request Date
                            </Typography>
                            <Input
                              defaultValue={new Date().toLocaleString()}
                              size="lg"
                              name="requestDate"
                              readOnly
                            />
                          </div>
                        </div>
                        {/* 4th line */}
                        <div className="flex justify-center gap-4 w-full">
                          <div className="w-full">
                            <Typography className="" variant="h6">
                              Pickup Location
                            </Typography>
                            <Input
                              defaultValue={food.pickupLocation}
                              size="lg"
                              name="pickupLocation"
                              readOnly
                            />
                          </div>
                          <div className="w-full">
                            <Typography className="" variant="h6">
                              Expire Date
                            </Typography>
                            <Input
                              defaultValue={food.expiredDate}
                              name="expiredDate"
                              size="lg"
                              readOnly
                            />
                          </div>
                        </div>
                        {/* 5th line */}
                        <div className="flex justify-center gap-4 w-full">
                          <div className="w-full">
                            <Typography className="" variant="h6">
                              Additional Notes
                            </Typography>
                            <Input
                              label="Additional Notes"
                              name="additionalNotes"
                              size="lg"
                            />
                          </div>
                          <div className="w-full">
                            <Typography className="" variant="h6">
                              Donation Money
                            </Typography>
                            <Input
                              label="Donation Money"
                              name="donationMoney"
                              size="lg"
                              type="number"
                            />
                          </div>
                        </div>
                      </CardBody>
                      <CardFooter className="pt-0">
                        <Button
                          variant="gradient"
                          type="submit"
                          onClick={handleOpen}
                          fullWidth
                        >
                          Request Food
                        </Button>
                      </CardFooter>
                    </form>
                  </Card>
                </Dialog>
                {/* model close */}
                <h3 className="font-extrabold text-3xl font-serif">
                  Food Specification:
                </h3>
                <div className="ml-14 mt-4">
                  <div className="mb-2 flex items-center justify-between">
                    <Typography
                      color="blue-gray"
                      className="font-extrabold text-xl font-serif"
                    >
                      Food Name : {food.foodName}
                    </Typography>
                    <Typography
                      color="blue-gray"
                      className="font-medium font-serif"
                    >
                      Expired Date:{" "}
                      <strong className="">{food.expiredDate}</strong>
                    </Typography>
                  </div>
                  <Typography
                    //   variant="small"
                    color="gray"
                    className="font-bold"
                  >
                    {food.additionalNotes}
                  </Typography>
                  <Typography
                    //   variant="small"
                    color="gray"
                    className="font-bold"
                  >
                    Available Food: {food.foodQuantity} person to be served
                  </Typography>
                </div>
                {/* donor info  */}
                <div className="mt-4">
                  <h3 className="font-extrabold text-3xl font-serif">
                    Donor Information:
                  </h3>
                  <div className="ml-16 mt-4">
                    <h5 className="text-xl font-bold">
                      Donor Name:{" "}
                      <span className="text-[#eeba58]">{food.donatorName}</span>
                    </h5>
                    <p className="text-lg font-bold">
                      Food Pickup Location:{" "}
                      <span className="text-[#eeba58]">
                        {food.pickupLocation}
                      </span>
                    </p>
                  </div>
                </div>
              </CardBody>
              <CardFooter className="pt-0">
                <Button
                  onClick={() => setOpen((open) => !open)}
                  ripple={false}
                  fullWidth={true}
                  className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                >
                  Request Food
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodDetail;
