import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Avatar,
  Menu,
  MenuHandler,
  MenuList,
} from "@material-tailwind/react";
import {} from "@material-tailwind/react";

import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo/logo.jpg";
import { AuthContext } from "../Provider/AuthProvider";
const Nav = () => {
  const { user, logOut } = useContext(AuthContext);
  // console.log(user);
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };
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
              {/* check User  */}
              <div className="flex items-center gap-x-1">
                {user ? (
                  <Menu
                    open={isMenuOpen}
                    handler={setIsMenuOpen}
                    placement="bottom-end"
                  >
                    <MenuHandler>
                      <Button
                        variant="text"
                        color="blue-gray"
                        className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
                      >
                        <Avatar
                          variant="circular"
                          size="sm"
                          alt="tania andrew"
                          className="border border-gray-900 p-0.5"
                          src={
                            user?.photoURL
                              ? user?.photoURL
                              : "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                          }
                        />
                      </Button>
                    </MenuHandler>
                    <MenuList className="p-1 max-w-96 px-12 py-3 mt-7 rounded-lg">
                      <h3 className="mt-4 text-center text-lg text-black ">
                        Welcome Back {user.displayName}
                      </h3>
                      <ul className="pl-2 space-y-4 mt-4 text-base font-medium">
                        <li>
                          <a className="hover:underline " href="#">
                            My Profile
                          </a>
                        </li>
                        <li>
                          <a className="hover:underline" href="#">
                            Edit Profile
                          </a>
                        </li>
                        <li
                          onClick={handleLogOut}
                          className="hover:underline cursor-pointer"
                        >
                          Log Out
                        </li>
                      </ul>
                    </MenuList>
                  </Menu>
                ) : (
                  <Button
                    variant="gradient"
                    size="sm"
                    className="hidden lg:inline-block"
                  >
                    <NavLink to="/login">
                      <span>Login</span>
                    </NavLink>
                  </Button>
                )}
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
          <MobileNav className="text-black" open={openNav}>
            {navList}
          </MobileNav>
        </div>
      </Navbar>
    </div>
  );
};

export default Nav;
