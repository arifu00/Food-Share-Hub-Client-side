import { Card, Typography } from "@material-tailwind/react";
import { useContext } from "react";
import useAxios from "../../hooks/useAxios";
import { AuthContext } from "../../Provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import FoodReqSkeleton from "../../Components/SkeletonEffect/FoodReqSkeleton";
import { MdAutoDelete, MdManageHistory } from "react-icons/md";
import { BiEdit } from "react-icons/bi";
import { Link } from "react-router-dom";

import toast from "react-hot-toast";
import Swal from "sweetalert2";

const TABLE_HEAD = ["Food Name", "Manage Food", "Delete Food", "Update Food"];

const ManageMyFoods = () => {
  const axios = useAxios();
  const { user } = useContext(AuthContext);

  const requestFood = async () => {
    const res = await axios.get(`/manageMyFood?email=${user.email}`);
    return res;
  };
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["requestFood"],
    queryFn: requestFood,
  });

  const handleDelete = (id) => {
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
        axios.delete(`/manageMyFood/${id}`).then((res) => {
          console.log(res.data);
          refetch();
          const toastId = toast.loading("Logging in ...");
          if (res.data.deletedCount > 0) {
            toast.success(" Deleted Successful", { id: toastId });
          }
        });
      }
    });
  };

  // console.log(data.data);
  if (data?.data?.length === 0) {
    return (
      <div className="container mx-auto mt-12">
        <h3 className="text-center uppercase font-extrabold font-serif text-2xl bg-blue-gray-200">
          MY food request
        </h3>
        <div className=" h-[50vh] min-w-max flex justify-center items-center px-5">
          <div className="text-center">
            <p className="font-black text-2xl">No Food </p>
          </div>
        </div>
      </div>
    );
  }
  if (isLoading) {
    <div className="container mx-auto px-2 md:px-5 my-10 ">
      <h3 className="text-center uppercase font-extrabold font-serif text-2xl bg-blue-gray-200 mb-10">
        MY food request
      </h3>
      <FoodReqSkeleton></FoodReqSkeleton>
    </div>;
  }
  return (
    <div className="container mx-auto px-2 md:px-5 my-10 ">
      <Card className="h-full w-full ">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-bold text-center leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data?.data?.map((food, index) => {
              const isLast = index === data?.data?.length - 1;
              const classes = isLast
                ? "p-4"
                : "p-4 border-b border-blue-gray-50";

              return (
                <tr key={food._id}>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {food.foodName}
                    </Typography>
                  </td>
                  <td className={`${classes} bg-blue-gray-50/50`}>
                    <Link to={`/manage/${food._id}`}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal flex gap-4 hover:underline cursor-pointer items-center"
                      >
                        Manage{" "}
                        <MdManageHistory className="text-xl"></MdManageHistory>
                      </Typography>
                    </Link>
                  </td>
                  <td className={classes}>
                    <Typography
                      onClick={() => handleDelete(food._id)}
                      variant="small"
                      color="blue-gray"
                      className="font-normal flex gap-4 hover:underline cursor-pointer items-center"
                    >
                      Delete <MdAutoDelete className="text-xl"></MdAutoDelete>
                    </Typography>
                  </td>
                  {/* update part */}
                  <td className={`${classes} bg-blue-gray-50/50`}>
                    <Link to={`/update/${food._id}`}>
                      <button
                        color="blue-gray"
                        className="font-medium flex gap-4 hover:underline cursor-pointer items-center"
                      >
                        Edit <BiEdit className="text-xl"></BiEdit>
                      </button>
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Card>
    </div>
  );
};

export default ManageMyFoods;
