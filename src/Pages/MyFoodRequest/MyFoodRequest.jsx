import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import useAxios from "../../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import FoodReqSkeleton from "../../Components/SkeletonEffect/FoodReqSkeleton";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";


const MyFoodRequest = () => {
  const axios = useAxios();
  const { user } = useContext(AuthContext);

  const requestFood = async () => {
    const res = await axios.get(`/requestFood?email=${user.email}`);
    return res;
  };
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["requestFood"],
    queryFn: requestFood,
  });

  const handleDeleteRequestFood = (id) => {
    // console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`/requestFood/${id}`).then((res) => {
          console.log(res.data);
          refetch();
          const toastId = toast.loading("Logging in ...");
          if (res.data.deletedCount > 0) {
            toast.success("Request Deleted Successful", { id: toastId });
          }
        });
      }
    });
  };

  // console.log(data?.data);
  if (data?.data?.length === 0) {
    return (
      <div className="container mx-auto mt-12">
        <h3 className="text-center uppercase font-extrabold font-serif text-2xl bg-blue-gray-200">MY food request</h3>
        <div className=" h-[50vh] min-w-max flex justify-center items-center px-5">
          <div className="text-center">
            <p className="font-black text-2xl">No Food Request </p>
          </div>
        </div>
      </div>
    );
  }
  if (isLoading) {
    <div className="container mx-auto px-2 md:px-5 my-10 ">
       <h3 className="text-center uppercase font-extrabold font-serif text-2xl bg-blue-gray-200 mb-10">MY food request</h3>
      <FoodReqSkeleton></FoodReqSkeleton>
    </div>;
  }
  return (
    <div className="container mx-auto px-2 md:px-5 my-10 ">
       <h3 className="text-center uppercase font-extrabold font-serif text-2xl bg-blue-gray-200 mb-10">MY food request</h3>
      {data?.data?.map((food) => (
        <Card key={food._id} className="w-9/12 mx-auto my-10 flex-row">
          <CardHeader
            shadow={false}
            floated={false}
            className="m-0 w-2/5 shrink-0 rounded-r-none"
          >
            <img
              src={food.foodImage}
              alt="card-image"
              className="h-full w-full object-cover"
            />
          </CardHeader>
          <CardBody>
            <Typography variant="h4" color="blue-gray" className="mb-2">
              {food.foodName}
            </Typography>
            <Typography variant="h6" color="gray" className="mb-4 uppercase">
              Donator: {food.donatorName}
            </Typography>
            <div className="flex gap-8 justify-between items-center">
              <Typography color="red" className="  font-normal">
                Pickup Location : {food.pickupLocation}
              </Typography>
              <Typography color="red" className="  font-normal">
                Expired Date : {food.expiredDate}
              </Typography>
            </div>
            <div className="flex gap-8 justify-between items-center">
              <Typography color="red" className="mb-8  font-normal">
                Request Time : {food.requestDate}
              </Typography>
              <Typography color="red" className="mb-8 font-normal">
                Donate Amount : {food.donationMoney}
              </Typography>
            </div>
            <Typography color="gray" className="mb-8 font-normal">
              Status :{" "}
              <strong className="text-green-500 font-semibold">
                {food.foodStatus}
              </strong>
            </Typography>
            <p href="#" className="inline-block cursor-pointer">
              {food.foodStatus === "Delivered" ? (
                <Button
                  variant="text"
                  disabled
                  className="flex items-center gap-2 font-bold text-base"
                >
                  Cancel Request
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    className="h-4 w-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    />
                  </svg>
                </Button>
              ) : (
                <Button
                  onClick={() => handleDeleteRequestFood(food._id)}
                  variant="text"
                  className="flex items-center gap-2 font-bold text-base"
                >
                  Cancel Request
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    className="h-4 w-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    />
                  </svg>
                </Button>
              )}
            </p>
          </CardBody>
        </Card>
      ))}
    </div>
  );
};

export default MyFoodRequest;
