const items: { label: string; path: string }[] = [
  { label: "HOME", path: "/" },
  { label: "ROADMAP", path: "/" },
  { label: "TOKENOMICS", path: "/" },
  { label: "STAKING", path: "/" },
  { label: "SECURITY", path: "/security" },
  { label: "WHITEPAPER", path: "/" },
];

const NavItem = () => {
  return (
    <nav className="flex items-center justify-between">
      <ul className="flex flex-row items-center gap-4">
        {items.map((item, index) => (
          <li className="">
            <a
              href={item.path}
              className="font-bebas text-[#98D3E4] text-xl tracking-[0.1em] transition hover:text-[#48cbf3]"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavItem;
