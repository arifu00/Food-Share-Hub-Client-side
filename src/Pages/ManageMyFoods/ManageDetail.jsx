import { Card, Typography } from "@material-tailwind/react";
import useAxios from "../../hooks/useAxios";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";

const TABLE_HEAD = [
  "Requester Name",
  "Requester Image",
  "Requester Email",
  "Request Time",
  "Food Status",
];
const ManageDetail = () => {
  document.title = "Food share || manage Food Detail";
  const axios = useAxios();
  const { user } = useContext(AuthContext);

  const requestFood = async () => {
    const res = await axios.get(`/manageMyFoodDetail?email=${user.email}`);
    return res;
  };

  const { data, isLoading, refetch } = useQuery({
    queryKey: ["requestFood"],
    queryFn: requestFood,
  });

  //   console.log(data.data);

  const handleEditStatus = (id) => {
    const toastId = toast.loading("Please wait ...");
    const updateStatus = {
      foodStatus: "Delivered",
    };
    axios.patch(`/myFoodDetail/${id}`, updateStatus).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        toast.success("Updated Successful", { id: toastId });
        refetch();
      }
    });
  };
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
                      {food.requesterName}
                    </Typography>
                  </td>
                  <td className={`${classes} bg-blue-gray-50/50`}>
                    <img
                      src={food.requesterImage}
                      className="font-normal flex gap-4 hover:underline cursor-pointer items-center rounded-full w-10 h-10"
                    ></img>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal flex gap-4 hover:underline cursor-pointer items-center"
                    >
                      {food.requesterEmail}
                    </Typography>
                  </td>

                  <td className={`${classes} bg-blue-gray-50/50`}>
                    <Typography
                      color="blue-gray"
                      className="font-medium flex gap-4 hover:underline cursor-pointer items-center"
                    >
                      {food.requestDate}
                    </Typography>
                  </td>
                  <td className={`${classes} bg-blue-gray-50/50`}>
                    <Typography
                      color="blue-gray"
                      className="font-semibold flex gap-4  items-center text-red-900 "
                    >
                      {food.foodStatus}{" "}
                      <span
                        onClick={() => handleEditStatus(food._id)}
                        className="hover:underline cursor-pointer text-green-500"
                      >
                        (Edit)
                      </span>
                    </Typography>
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

export default ManageDetail;
