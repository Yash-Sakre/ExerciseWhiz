import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";


const Navbar = () => {
  
  const [nav, setnav] = useState(false);

  const handleClick = () => setnav(!nav);

  const closenav = () => setnav(false);
  return (
    <div className="navBar flex justify-between items-center py-[1rem] md:px-[4rem] px-[2rem] sticky top-0 z-[1000] bg-black ">
      <div className="logoDiv">
        <h1 className="logo text-[2rem] md:text-[3rem] font-bold">
          <a href="/">Train<span className="text-primary">Mate</span></a>
        </h1>
      </div>

      <div className="flex gap-8">
        <ul className="hidden md:flex gap-8">
          <li className="menuList    ">
            {" "}
            <Link to="/" >
              Home
            </Link>
          </li>
          <li className="menuList   ">
            {" "}
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              About
            </Link>
          </li>
          <li className="menuList   ">
            {" "}
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Projects
            </Link>
          </li>
          <li className="menuList   ">
            {" "}
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Contact
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
            : "absolute top-20 left-0 h-screen  w-full flex flex-col justify-center items-center bg-black"
        }
      >
        <li className="menuList  py-6   ">
          {" "}
          <Link
            to="/"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            onClick={closenav}
          >
            Home
          </Link>
        </li>
        <li className="menuList  py-6  ">
          {" "}
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            onClick={closenav}
          >
            About
          </Link>
        </li>
        <li className="menuList  py-6  ">
          {" "}
          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            onClick={closenav}
          >
            Projects
          </Link>
        </li>
        <li className="menuList  py-6  ">
          {" "}
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            onClick={closenav}
          >
            Contact
          </Link>
        </li>

        
      </ul>
    </div>
  );
};

export default Navbar;
