import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import registrationImg from "../../assets/register/register.gif";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import auth from "../../firebase.config";
import { updateProfile } from "firebase/auth";
import toast from "react-hot-toast";

const Registration = () => {
  const { createUser } = useContext(AuthContext);
  // console.log(createUser);
  const location = useLocation();
  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;
    // const checkbox = form.checkbox.checked;

    // console.log(name, email, password, photo);

    // create user with firebase
    const toastId = toast.loading("Logging in ...");
    navigate(location?.state ? location?.state : "/");
    createUser(email, password)
      .then((res) => {
        const user = res.user;
        console.log(user);
        toast.success("Register Successful", { id: toastId });
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photo,
        })
          .then(() => {
            // User information updated successfully
            console.log("User created with name and photo:", user);
          })
          .catch((error) => {
            console.error("Error updating user information:", error.message);
          });
      })
      .catch((error) => {
        console.log(error.message);
        toast.error(error.message, { id: toastId });
      });
  };
  return (
    <div className="container mx-auto flex justify-center gap-4 my-12 ">
      <div className="md:flex justify-center gap-8">
        <div className="">
          <img className="h-full object-cover" src={registrationImg} alt="" />
        </div>
        <Card
          color="transparent"
          shadow={false}
          className="border p-10 shadow-xl border-blue-gray-200 "
        >
          <Typography
            variant="h4"
            className="text-center text-2xl font-black"
            color="blue-gray"
          >
            Register
          </Typography>

          <form
            onSubmit={handleRegister}
            className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
          >
            <div className="mb-1 flex flex-col gap-6">
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Your Name
              </Typography>
              <Input
                size="lg"
                name="name"
                placeholder="Your Name"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Your Email
              </Typography>
              <Input
                size="lg"
                name="email"
                placeholder="name@mail.com"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Password
              </Typography>
              <Input
                type="password"
                name="password"
                size="lg"
                placeholder="********"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Photo URL
              </Typography>
              <Input
                type="text"
                name="photo"
                size="lg"
                placeholder="Photo Url"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            </div>
            <Checkbox
              name="checkbox"
              label={
                <Typography
                  variant="small"
                  color="gray"
                  className="flex items-center font-normal"
                >
                  I agree the
                  <a
                    href="#"
                    className="font-medium transition-colors hover:text-gray-900"
                  >
                    &nbsp;Terms and Conditions
                  </a>
                </Typography>
              }
              containerProps={{ className: "-ml-2.5" }}
            />
            <Button className="mt-6" fullWidth type="submit">
              Register
            </Button>
            <Typography color="gray" className="mt-4 text-center font-normal">
              Already have an account?{" "}
              <NavLink
                to="/login"
                className=" underline text-red-500 font-bold"
              >
                Login
              </NavLink>
            </Typography>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default Registration;
