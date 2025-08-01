import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Logo from "../assets/Logo";
import { NavLink } from "react-router";
import navItems from "../constants/NavItems";

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#07303f] text-white text-[15.5px] font-semibold shadow-md border-b border-b-[#3e6575]">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5">
        <div>
          <NavLink to="/">
            <Logo />
          </NavLink>
        </div>
        <ul className="flex items-center gap-6">
          {navItems.map((item) => (
            <li
              key={item.label}
              className="relative group py-[18px]"
              onMouseEnter={() => setOpenDropdown(item.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              {item.dropdown ? (
                <button className="flex items-center gap-1 text-gray-300 hover:text-gray-200 transition-colors duration-200 cursor-pointer">
                  {item.label}
                  <ChevronDown
                    className={`w-4 h-4 transform transition-transform duration-200 ${
                      openDropdown === item.label
                        ? "rotate-180 text-gray-200"
                        : ""
                    }`}
                  />
                </button>
              ) : (
                <NavLink
                  to={`/${item.href}`}
                  className={({ isActive }) =>
                    `transition-colors duration-200 ${
                      isActive
                        ? "text-gray-50"
                        : "text-gray-300 hover:text-gray-200"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              )}

              {item.dropdown && openDropdown === item.label && (
                <ul className="absolute top-full left-0 -mt-1.5 w-56 rounded-xl bg-[#3e6575] shadow-xl border border-[#3e6590] overflow-hidden z-50 animate-fade-in-down">
                  {item.dropdown.map((subItem) => (
                    <li key={subItem}>
                      <NavLink
                        to={`/${subItem.toLowerCase().replace(/\s+/g, "-")}`}
                        className="block px-5 py-3 text-sm text-gray-300 hover:bg-[#172B32] hover:text-gray-200 transition duration-150"
                      >
                        {subItem}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
