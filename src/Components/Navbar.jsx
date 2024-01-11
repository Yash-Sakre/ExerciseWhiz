import { Link, useNavigate, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [nav, setnav] = useState(false);
  const navigate = useNavigate();
  const handleClick = () => setnav(!nav);

  const closenav = () => setnav(false);

  const [isHome, setIsHome] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const currentRoute = location.pathname;
    setIsHome(currentRoute === "/");
  }, [location]);

  const scrollToSection = (id) => {
    closenav();
    navigate("/");
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth" });
  };

  const menuItems = [
    { link: "/", text: "Home", section: "Hero" },
    { link: "/#Exercises", text: "Exercises", section: "Exercises" },
  ];

  return (
    <div className="navBar flex justify-between items-center py-2 md:py-0 md:px-[4rem] px-[2rem] top-0  my-2 lg:mx-1 mx-2 ">
      <div className="logoDiv">
        <h1 className="logo text-[1.5rem] md:text-[2rem] font-bold futura ">
          <Link to="/">
            <span className="" >FLEX</span>FIT
          </Link>
        </h1>
      </div>

      <div className="flex gap-8">
        <ul className="hidden md:flex gap-1">
          {menuItems.map((item) => (
            <NavItem
              key={item.link}
              link={item.link}
              text={item.text}
              onClick={() => scrollToSection(item.section)}
            />
          ))}
        </ul>
      </div>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile View */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-16 h-[30vh] w-[50vh] flex flex-col justify-center items-center text-black bg-white rounded-2xl gap-5"
        }
      >
        {menuItems.map((item) => (
          <MobileNavItem
            key={item.link}
            link={item.link}
            text={item.text}
            onClick={() => scrollToSection(item.section)}
          />
        ))}
      </ul>
    </div>
  );
};

const NavItem = ({ link, text, onClick }) => (
  <li className="menuList py-1 px-4 font-semibold border-2 rounded-full border-primary hover:bg-primary hover:text-white">
    <Link to={link} onClick={onClick}>
      {text}
    </Link>
  </li>
);
const MobileNavItem = ({ link, text, onClick }) => (
  <li className="menuList py-1 px-4 font-semibold  border rounded-full border-primary">
    <Link to={link} onClick={onClick}>
      {text}
    </Link>
  </li>
);

export default Navbar;
