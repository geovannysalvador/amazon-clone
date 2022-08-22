import React from "react";
import Image from "next/image";
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";

const Header = () => {
  return (
    <header className="">
      <div className="flex items-center bg-amazon_blue  p-1 flex-grow ">
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
          <Image
            src="https://i.postimg.cc/qM47vrnm/logo.png"
            width={80}
            height={70}
            objectFit="contain"
            className="cursor-pointer"
            alt="img"
          />
          <p className="text-white font-bold text-lg pr-4">Mono Prestige</p>

        </div>

        <div className="hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-[#92D825] hover:bg-[#9BFF00]">
          <input
            type="text"
            className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4"
          />
          <SearchIcon className="h-12 p-4 " />
        </div>

        <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
          <div className="link">
            <p>Hello Gustavo</p>
            <p className="font-extrabold md:text-sm">Account & List</p>
          </div>
          <div className="link">
            <p>Return</p>
            <p className="font-extrabold md:text-sm">& Orders</p>
          </div>
          <div className="link relative flex items-center">
            <span className="absolute top-0 right-0 md:right-10 h-5 w-5  bg-[#92D825] text-center rounded-full text-black font-bold 2">
              99
            </span>
            <ShoppingCartIcon className="h-10" />
            <p className="font-extrabold md:text-sm hidden md:inline mt-2">
              Basket
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center space-x-6 p-2 pl-6 bg-amazon_blue-light text-white text-sm">
        <p className="link flex items-center">
          <MenuIcon className="h-6 mr-1" />
          All
        </p>
        <p className="link">Prime Video</p>
        <p className="link">Amazon Business</p>
        <p className="link">Today's Deals</p>
        <p className="link hidden md:inline">Electronics</p>
        <p className="link hidden md:inline">Food & Grocery</p>
        <p className="link hidden md:inline">Prime</p>
        <p className="link hidden md:inline">Buy Again</p>
        <p className="link hidden md:inline">Shopper Toolkit</p>
        <p className="link hidden md:inline">Health & Personal Care</p>
      </div>
    </header>
  );
};

export default Header;
