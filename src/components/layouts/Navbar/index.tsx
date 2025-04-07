import NavItem from "./NavItem";
import Button from "../../common/Button";
import { Link } from "react-router-dom";
import { BASE_URL } from "../../../constant";
import MobileNav from "./MobileNav";
import { useState } from "react";
import {useAppKit, useAppKitAccount} from "@reown/appkit/react";
import {addressFormat} from "../../../utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const {open} = useAppKit();
  const {isConnected, address} = useAppKitAccount();

  return (
    <header className="w-full py-3 px-10 border-b-2 border-[#98D3E4] bg-white/10 backdrop-blur-sm shadow-md shadow-[#73bdc7]">
      <div className="hidden lg:flex flex-row items-center justify-between w-full">
        <div className="flex flex-row items-center gap-10">
          <div className="">
            <Link to="/" className="flex flex-row items-center gap-4">
              <img
                src={BASE_URL + "/assets/logo.svg"}
                alt="Logo"
                className="w-12 h-12 shadow-md shadow-black rounded-full"
              />
              <h1 className="text-[#98D3E4] hidden xl:flex font-semibold text-2xl font-bebas tracking-[0.2em]">
                PEPESEC AI
              </h1>
            </Link>
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
          <div className="hidden xl:flex">
            <Button
              type="text"
              label={isConnected ? addressFormat(address?.toString() ?? '') : "Connect wallet"}
              icon="mdi:wallet"
              iconPosition="left"
              onClick={() => {open()}}
            />
          </div>
          <div className="hidden 2xl:hidden xl:hidden lg:flex">
            <Button type="text" icon="mdi:wallet" iconPosition="left" onClick={() => {open()}} />
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-between lg:hidden">
        <div className="flex flex-row items-center gap-10">
          <div className="">
            <Link to="/" className="flex flex-row items-center gap-4">
              <img
                src={BASE_URL + "/assets/logo.svg"}
                alt="Logo"
                className="w-12 h-12 shadow-md shadow-black rounded-full"
              />
              <h1 className="text-[#98D3E4] hidden md:flex font-semibold text-2xl font-bebas tracking-[0.2em]">
                PEPESEC AI
              </h1>
            </Link>
          </div>
        </div>
        <Button
          type="icon"
          icon="solar:sidebar-minimalistic-bold"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        />
      </div>
      <MobileNav isOpen={isOpen} onClose={setIsOpen} />
    </header>
  );
};

export default Navbar;
