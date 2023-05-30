import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import logo1 from "../public/images/logo1.png";
// import "boxicons";

const Navbar: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState<string>("");
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    const pathname = router.pathname;
    if (pathname === "/") {
      setActiveMenu("");
    } else {
      setActiveMenu(pathname.substr(1));
    }
  }, [router.pathname]);

  const handleMenuToggle = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuClick = (menuName: string): void => {
    setActiveMenu(menuName);
    setIsMenuOpen(false);
  };

  return (
    <nav
      className="navbar aos-init aos-animate"
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="1500"
    >
      <div
        className="navbar-header aos-init aos-animate"
        data-aos="fade-down"
        data-aos-delay="100"
      >
        <Link href="/">
          <Image src={logo1} alt="Logo" className="navbar-logo" />
        </Link>
        <button className="navbar-toggler" onClick={handleMenuToggle}>
          {isMenuOpen ? <i className="bx bx-x"></i> : <i className="bx bx-menu"></i>}
        </button>
      </div>
      <ul
        className={`navbar-nav ${isMenuOpen ? "open" : ""} aos-init aos-animate`}
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        <li
          className={activeMenu === "" ? "active" : ""}
          data-aos="fade-down"
          data-aos-delay="100"
        >
          <Link href="/" onClick={() => handleMenuClick("")} className="nav_li">
            Home
          </Link>
        </li>
        <li
          className={activeMenu === "aboutus" ? "active" : ""}
          data-aos="fade-down"
          data-aos-delay="100"
        >
          <Link
            href="/aboutus"
            onClick={() => handleMenuClick("aboutus")}
            className="nav_li"
          >
            About
          </Link>
        </li>
        <li
          className={activeMenu === "contact" ? "active" : ""}
          data-aos="fade-down"
          data-aos-delay="100"
        >
          <Link
            href="/contact"
            onClick={() => handleMenuClick("contact")}
            className="nav_li"
          >
            Contact
          </Link>
        </li>
        <li
          className={activeMenu === "game" ? "active" : ""}
          data-aos="fade-down"
          data-aos-delay="100"
        >
          <Link
            href="/game"
            onClick={() => handleMenuClick("game")}
            className="nav_li"
          >
            Game
          </Link>
        </li>
        <li
          className={activeMenu === "recruit" ? "active" : ""}
          data-aos="fade-down"
          data-aos-delay="100"
        >
          <Link
            href="/recruit"
            onClick={() => handleMenuClick("recruit")}
            className="nav_li"
          >
            Recruit
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;