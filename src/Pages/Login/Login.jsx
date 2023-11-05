import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { AiFillGoogleCircle } from "react-icons/ai";
import loginImg from "../../assets/login/Login.gif";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";
import toast from "react-hot-toast";

const Login = () => {
  const { loginUser, googleSignIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email);
    const toastId = toast.loading("Logging in ...");

    // firebase login
    loginUser(email, password)
      .then((res) => {
        console.log(res.user);
        toast.success("Login Successful", { id: toastId });
        navigate(location?.state ? location?.state : "/");
      })
      .catch((error) => {
        console.log(error.message);
        toast.error(`Login Failed ${error.message}`, { id: toastId });
      });
  };
  // google sign in
  const provider = new GoogleAuthProvider();
  const handleGoogleLogin = () => {
    const toastId = toast.loading("Logging in ...");
    googleSignIn(provider)
      .then((res) => {
        console.log(res.user);
        toast.success("Login Successful", { id: toastId });
        navigate(location?.state ? location?.state : "/");
      })
      .catch((error) => {
        console.log(error.message);
        toast.error(`Login failed. ${error.message}`, { id: toastId });
      });
  };
  return (
    <div className="container mx-auto flex justify-center gap-4 my-12 ">
      <div className="md:flex justify-center gap-8">
        <div className="flex items-center">
          <img className="" src={loginImg} alt="" />
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
            Login
          </Typography>

          <form
            onSubmit={handleLogin}
            className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
          >
            <div className="mb-1 flex flex-col gap-6">
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
            </div>

            <Button className="mt-6" fullWidth type="submit">
              Login
            </Button>
            <h5 className="mt-7 text-lg font-medium text-center">
              Or Login With
            </h5>
            <div className="text-center">
              <button
                onClick={handleGoogleLogin}
                className="p-2 bg-[#F5F5F8]  hover:bg-blue-100 my-3 hover:text-red-400 text-6xl rounded-full"
              >
                <AiFillGoogleCircle></AiFillGoogleCircle>
              </button>
            </div>
            <Typography color="gray" className="mt-4 text-center font-normal">
              New user?
              <NavLink
                to="/registration"
                className=" underline text-red-500 font-bold ml-1"
              >
                Register Here
              </NavLink>
            </Typography>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default Login;
