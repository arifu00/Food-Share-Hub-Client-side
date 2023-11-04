import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { NavLink } from "react-router-dom";
import { AiFillGoogleCircle } from "react-icons/ai";
import loginImg from "../../assets/login/Login.gif";

const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    console.log(email);
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
              <button className="p-2 bg-[#F5F5F8]  hover:bg-blue-100 my-3 hover:text-red-400 text-6xl rounded-full">
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
