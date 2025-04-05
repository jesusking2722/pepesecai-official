import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="flex flex-row items-center justify-center gap-4 p-4 border-t border-t-[#98D3E4]">
      <p className="text-[#98D3E4] font-semibold font-sans text-sm">
        Copyright {year}
      </p>
      <span className="text-[#98D3E4] font-semibold font-sans text-sm">
        Privacy Policy
      </span>
    </footer>
  );
};

export default Footer;
