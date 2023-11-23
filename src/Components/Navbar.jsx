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
    if (currentRoute === "/") {
      setIsHome(true);
    } else {
      setIsHome(false);
    }
  }, [isHome, location]);

  const scrollToSection = (id) => {
    closenav();
    navigate("/");
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="navBar flex justify-between items-center py-2 md:py-0 md:px-[4rem] px-[2rem] top-0  my-2 lg:mx-1 mx-2 ">
      <div className="logoDiv">
        <h1 className="logo text-[1.5rem] md:text-[2rem] font-extrabold futura ">
          <Link to="/">
            <span className="text-primary stroke">FLEX</span>FIT
          </Link>
        </h1>
      </div>

      <div className="flex gap-8">
        <ul className="hidden md:flex gap-8">
          <li className="menuList hover:underline font-semibold ">
            {" "}
            <Link to="/" onClick={() => scrollToSection("Hero")}>
              Home
            </Link>
          </li>
          <li className="menuList  hover:underline font-semibold ">
            {" "}
            <Link to="/#Exercises" onClick={() => scrollToSection("Exercises")}>
              Exercises
            </Link>
          </li>
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
            : "absolute top-20 left-0 h-screen  w-full flex flex-col justify-center items-center text-black bg-white"
        }
      >
        <li className="menuList  py-6 hover:underline font-semibold">
          {" "}
          <Link to="/" onClick={() => scrollToSection("Hero")}>
            Home
          </Link>
        </li>
        <li className="menuList  py-6  hover:underline font-semibold">
          {" "}
          <Link to="about" onClick={() => scrollToSection("Exercises")}>
            Exercises
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
