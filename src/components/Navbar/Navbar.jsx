import React, { useEffect, useState } from "react";
import { ToggleSwitch } from "../components";
import gsap from "gsap";
import { arbaz } from "../../assets/assets";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    gsap.fromTo(
      ".navbar-container",
      {
        y: -100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 px-4">
      <div className="navbar-container">
        <div className="navbar mt-4 px-4 rounded-full bg-base-200 dark:bg-base-300">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden mr-2 relative w-16 h-16 flex justify-center items-center"
                onClick={() => setIsOpen(!isOpen)}
              >
                <div
                  className={`w-6 flex flex-col gap-1.5 transition-all duration-300 ${
                    isOpen ? "rotate-[45deg]" : ""
                  }`}
                >
                  <div
                    className={`h-0.5 bg-current transition-all duration-300 ${
                      isOpen ? "translate-y-2" : ""
                    }`}
                  ></div>
                  <div
                    className={`h-0.5 bg-current transition-all duration-300 ${
                      isOpen ? "opacity-0" : ""
                    }`}
                  ></div>
                  <div
                    className={`h-0.5 bg-current transition-all duration-300 ${
                      isOpen ? "-translate-y-2 -rotate-90" : ""
                    }`}
                  ></div>
                </div>
              </div>
              {isOpen ? (
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 left-0"
                  onBlur={() => setIsOpen(false)}
                >
                  <li>
                    <a>Home</a>
                  </li>
                  <li>
                    <a>About</a>
                  </li>
                  <li>
                    <a>Projects</a>
                  </li>
                  <li>
                    <a>Contact</a>
                  </li>
                  <li>
                    <a>Testimonials</a>
                  </li>
                  <li>
                    <a>Contact Me</a>
                  </li>
                </ul>
              ) : (
                ""
              )}
            </div>
            <img src={arbaz} alt="arbaz" className="w-10 h-10 rounded-full" />
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>About</a>
              </li>
              <li>
                <a>Projects</a>
              </li>
              <li>
                <a>Contact</a>
              </li>
              <li>
                <a>Testimonials</a>
              </li>
              <li>
                <a>Contact Me</a>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            <ToggleSwitch />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
