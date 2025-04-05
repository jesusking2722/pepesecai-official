import { motion, AnimatePresence } from "motion/react";
import { NAV_ITEMS } from "../../../constant";
import { Link } from "react-router-dom";
import Button from "../../common/Button";

const MobileNav = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: (val: boolean) => void;
}) => {
  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.nav
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 100 }}
          exit={{ x: 300, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full fixed min-h-screen right-0 top-[75px] bg-[#0a2229] backdrop-blur-sm py-8 px-14"
        >
          <ul className="flex flex-col items-center gap-4 w-full">
            {NAV_ITEMS.map((item, index) => (
              <li
                key={index}
                onClick={() => {
                  onClose(false);
                }}
              >
                <Link
                  to={item.path}
                  className="font-bebas text-[#98D3E4] text-xl tracking-[0.1em] transition hover:text-[#48cbf3]"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <Button
              type="primary"
              label="Connect wallet"
              icon="mdi:wallet"
              iconPosition="left"
            />
          </ul>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

export default MobileNav;
