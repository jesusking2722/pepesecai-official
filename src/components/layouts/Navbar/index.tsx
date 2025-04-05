import React from "react";
import NavItem from "./NavItem";
import Button from "../../common/Button";

const Navbar = () => {
  return (
    <header className="flex flex-row items-center justify-between py-3 px-10">
      <div className="flex flex-row items-center gap-10">
        <div className="">
          <a href="/" className="flex flex-row items-center gap-4">
            <img
              src="./assets/logo.svg"
              alt="Logo"
              className="w-12 h-12 shadow-md shadow-black rounded-full"
            />
            <h1 className="text-[#98D3E4] font-semibold text-2xl font-bebas tracking-[0.2em]">
              PEPESEC AI
            </h1>
          </a>
        </div>
        <NavItem />
      </div>
      <div className="flex flex-row items-center gap-10">
        <div className="flex flex-row items-center gap-4">
          <Button type="icon" icon="mdi:email" />
          <Button type="icon" icon="mdi:telegram" />
          <Button type="icon" icon="mdi:discord" />
          <Button type="icon" icon="mdi:twitter" />
        </div>
        <div>
          <Button
            type="text"
            label="Connect Wallet"
            icon="mdi:wallet"
            iconPosition="left"
          />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
