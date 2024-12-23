import Link from "../Link/Link";
import { RiMenu2Fill } from "react-icons/ri";
import { IoCloseOutline } from "react-icons/io5";
import { useState } from "react";
import { CgProfile } from "react-icons/cg";

const NavBar = () => {
  const [openMenu, setOpenMenu] = useState(false)
  const routes = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/about", name: "About Us" },
    { id: 3, path: "/services", name: "Services" },
    { id: 4, path: "/contact", name: "Contact Us" },
    { id: 5, path: "/profile", name: "Profile" },
  ];

  return (
    <nav className="bg-slate-300 py-2 md:px-16 px-4 flex justify-between items-center">
      <div className="md:hidden text-3xl cursor-pointer" onClick={() => setOpenMenu(!openMenu)}>
        {
          openMenu === true ?
          <IoCloseOutline />
          : <RiMenu2Fill />
        }
      </div>
      
      <ul className={`md:flex gap-4 absolute md:static
        ${openMenu ? 'top-10':'-left-60 top-10'}
         left-0 bg-slate-300 rounded-b-xl duration-1000`}>
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
      <div className="bg-blue-500 rounded-full p-2 text-2xl cursor-pointer">
        <CgProfile />
      </div>
    </nav>
  );
};

export default NavBar;
