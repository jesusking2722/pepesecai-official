import { Link } from "react-router-dom";
import { NAV_ITEMS } from "../../../constant";

const NavItem = () => {
  return (
    <nav className="hidden lg:flex items-center justify-between">
      <ul className="flex flex-row items-center gap-4">
        {NAV_ITEMS.map((item, index) => (
          <li className="" key={index}>
            <Link
              to={item.path}
              className="font-bebas text-[#98D3E4] text-xl tracking-[0.1em] transition hover:text-[#48cbf3]"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavItem;
