import React, { FC } from "react";
import { Icon } from "@iconify/react";

interface ButtonProps {
  type: "default" | "primary" | "text" | "icon";
  label?: string;
  icon?: string;
  iconPosition?: "left" | "right";
  width?: number;
  height?: number;
  onClick?: () => void;
}

const Button: FC<ButtonProps> = ({
  type,
  label,
  icon,
  iconPosition,
  width,
  height,
  onClick,
}) => {
  if (type === "icon" && icon) {
    return (
      <button
        className="bg-transparent transition hover:scale-105 p-2 hover:shadow-md hover:shadow-black rounded-full"
        onClick={onClick}
      >
        <Icon icon={icon} className="text-white w-6 h-6" />
      </button>
    );
  }

  return (
    <button
      className={`transition-all duration-300 ease-in-out text-lg font-bebas tracking-[0.1em] ${
        !width && "px-3 py-2"
      } rounded-lg flex flex-row items-center justify-center gap-2 ${
        type === "primary" && "bg-[#4163D7] text-[#8CCFFF]"
      } ${
        type === "text" &&
        "bg-transparent text-[#9DD7E7] hover:bg-[#4971f3] hover:bg-opacity-40"
      } hover:scale-105`}
      style={{ width, height }}
      onClick={onClick}
    >
      {iconPosition === "left" && icon && (
        <Icon icon={icon} className="text-[#9DD7E7] w-6 h-6" />
      )}
      <span className="mt-1">{label}</span>
      {iconPosition === "right" && icon && (
        <Icon icon={icon} className="text-[#9DD7E7] w-6 h-6" />
      )}
    </button>
  );
};

export default Button;
