import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from '../assets/logo/logo.jpg'
const Nav = () => {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col font-medium text-base gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <li className="p-1 hover:text-lg hover:font-bold hover:text-[#85B935] ">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#85B935]" : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li className="p-1 hover:text-lg hover:font-bold hover:text-[#85B935] ">
        <NavLink
          to="/availableFoods"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#85B935]" : ""
          }
        >
          Available Foods
        </NavLink>
      </li>
      <li className="p-1 hover:text-lg hover:font-bold hover:text-[#85B935] ">
        <NavLink
          to="/addFood"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#85B935]" : ""
          }
        >
          Add Food
        </NavLink>
      </li>
      <li className="p-1 hover:text-lg hover:font-bold hover:text-[#85B935] ">
        <NavLink
          to="/manageMyFoods"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#85B935]" : ""
          }
        >
          Manage My Foods
        </NavLink>
      </li>
      <li className="p-1 hover:text-lg hover:font-bold hover:text-[#85B935] ">
        <NavLink
          to="/myFoodRequest"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#85B935]" : ""
          }
        >
           My Food Request
        </NavLink>
      </li>
      
    </ul>
  );
  return (
    <div className="m-0  max-h-[768px]  ">
      <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-between text-blue-gray-900">
            <div className="flex items-center gap-4">
                <img className="rounded-full w-16 h-16" src={logo} alt="" />
            <Typography
              as="a"
              href="#"
              className="text-[#363636] cursor-pointer py-1.5 font-bold text-3xl "
            >
              Food <span className="text-lg">Share Hub</span>
            </Typography>
            </div>
            <div className="flex items-center gap-4">
              <div className="mr-4 hidden lg:block">{navList}</div>
              <div className="flex items-center gap-x-1">
                <Button
                  variant="gradient"
                  size="sm"
                  className="hidden lg:inline-block"
                >
                  <span>Log In</span>
                </Button>
              </div>
              <IconButton
                variant="text"
                className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                ripple={false}
                onClick={() => setOpenNav(!openNav)}
              >
                {openNav ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </IconButton>
            </div>
          </div>
          <MobileNav open={openNav}>
            {navList}
            <div className="flex items-center gap-x-1">
              <Button fullWidth variant="gradient" size="sm" className="">
                <span>Log In</span>
              </Button>
            </div>
          </MobileNav>
        </div>
      </Navbar>
    </div>
  );
};

export default Nav;
