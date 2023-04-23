import React, { useState } from "react";

import openMenu from "../images/icon-menu.svg";
import MenuItems from "./MenuItems";
import SearchIcon from "./SearchIcon";
import CartIcon from "./CartIcon"
import AccountIcon from "./AccountIcon"

const Navbar = () => {
  const [active, setActive] = useState(false);
  function toggle() {
    setActive(!active);
    console.log(active);
  }
  return (
    <div className="lg:flex  justify-evenly items-center text-dimgray font-poppins w-full px-4 lg:px-0 ">
      <div>
        <p className="font-bold text-xl">E-Commerce</p>
      </div>
      <div>
        <img 
          src={openMenu}
          onClick={toggle}
          alt="Menu"
          className={
            active
              ? "hidden"
              : "lg:hidden absolute right-12 scale-150 z-20 w-6 top-7 "
          }
        />
      </div>
      <nav className="hidden lg:flex ml-14  text-dimgray  text-sm ">
        <ul className="flex gap-9 items-center ">
          <li className=" relative group" id="arrow-up-down">
            <div className="flex gap-1 items-center cursor-pointer duration-200 hover:text-black  ">
              <h1>Categories</h1>
              <svg
                width="10"
                height="6"
                xmlns="http://www.w3.org/2000/svg"
                className="ml-2 "
              >
                <path
                  stroke="currentColor"
                  stroke-width="1.5"
                  fill="none"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </div>

            {/* <div className="absolute text-sm shadow-[0_10px_20px_10px_rgba(0,0,0,0.1)] py-3 rounded-xl w-40  hidden group-hover:block cursor-pointer z-10 right-2">
              <ul>
                <li>
                  <div className="flex gap-4 px-5 mt-2 items-center">
                    <img src={todo} alt="todo" className="w-5" />
                    <h3 className="hover:text-black">Todo List</h3>
                  </div>
                </li>
                <li>
                  <div className="flex gap-4 px-5 mt-2 items-center">
                    <img src={calendar} alt="calender" className="w-5" />
                    <h3 className="hover:text-black">Calender</h3>
                  </div>
                </li>
                <li>
                  <div className="flex gap-4 px-5 mt-2 items-center">
                    <img src={remainder} alt="remainder" className="w-5" />
                    <h3 className="hover:text-black">Planning</h3>
                  </div>
                </li>
                <li>
                  <div className="flex gap-4 px-5 mt-2 mb-2 items-center">
                    <img src={planning} alt="planning" className="w-5" />
                    <h3 className="hover:text-black">Todo List</h3>
                  </div>
                </li>
              </ul>
            </div> */}
          </li>
          <li className="group relative" id="arrow-up-down">
            <div className="flex gap-1 items-center cursor-pointer hover:text-black duration-200">
              <h1>Deals</h1>
            </div>
          </li>
          <li className="cursor-pointer hover:text-black duration-200">
            What's New
          </li>
          <li className="cursor-pointer hover:text-black duration-200">
            Delivery
          </li>
        </ul>
      </nav>
      <div className="flex h-fit items-center rounded-xl  border-2 px-3 py-[1px] justify-between mt-3 lg:mt-0 ">
        <input
          type="text"
          placeholder="search"
          className=" pl-3 focus:outline-none px-2 py-1 rounded-xl"
        />
        <SearchIcon />
      </div>
      <div className="hidden lg:flex  gap-6 mr-3 text-dimgray  text-sm">
          <div className="flex items-center gap-2">
            <AccountIcon/>
            <p>Account</p>
          </div>
          <div className="flex items-center gap-2">
            <CartIcon/>
            <p>Cart</p>
          </div>
        </div>


      <MenuItems toggle={toggle} active={active} />
    </div>
  );
};

export default Navbar;
