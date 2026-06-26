"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navLocations, navServices } from "@/content/site";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const linkClass = (href: string) =>
    isActive(pathname, href) ? "current" : "menulink";

  return (
    <div className="navwrap">
      <div className="container">
        <div className="row clearfix nav-container-1">
          <div className="col-md-10 col-sm-12 col-xs-12 nav-container-1__nav">
            <nav role="navigation" className="navbar navbar-default">
              <div className="navbar-header">
                <button
                  type="button"
                  className={`navbar-toggle mobile-nav-toggle${open ? " is-active" : " collapsed"}`}
                  onClick={() => setOpen(!open)}
                  aria-expanded={open}
                  aria-controls="navbarCollapse"
                >
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                </button>
                <span className="menutxt">
                  <Link href="/" title="Safe & Sound Security" onClick={closeMenu}>
                    <img src="/images/logo.png" alt="Safe and Sound logo" className="main-logo" />
                  </Link>
                </span>
              </div>
              <div
                className={`navbar-collapse mobile-nav-panel${open ? " is-open" : ""}`}
                id="navbarCollapse"
              >
                <ul className="nav navbar-nav">
                  <li className="logo_sm_none">
                    <Link href="/" title="Safe & Sound Security" onClick={closeMenu}>
                      <img src="/images/logo.png" alt="Safe and Sound logo" className="main-logo" />
                    </Link>
                  </li>
                  <li>
                    <Link href="/" className={linkClass("/")} onClick={closeMenu}>
                      Home
                    </Link>
                  </li>
                  <li className="dropdown">
                    <a data-toggle="dropdown" href="#" className="menulink dropdown-toggle">
                      Security Solutions <span className="caret" />
                    </a>
                    <ul className="dropdown-menu">
                      {navServices.map((item) => (
                        <li key={item.href}>
                          <Link href={item.href} onClick={closeMenu}>
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a data-toggle="dropdown" href="#" className="menulink dropdown-toggle">
                      Service Areas <span className="caret" />
                    </a>
                    <ul className="dropdown-menu">
                      {navLocations.map((item) => (
                        <li key={item.href}>
                          <Link href={item.href} onClick={closeMenu}>
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                  <li>
                    <Link href="/reviews" className={linkClass("/reviews")} onClick={closeMenu}>
                      reviews
                    </Link>
                  </li>
                  <li>
                    <Link href="/gallery" className={linkClass("/gallery")} onClick={closeMenu}>
                      Gallery
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" className={linkClass("/about")} onClick={closeMenu}>
                      About us
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className={linkClass("/contact")} onClick={closeMenu}>
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
          <div className="col-md-2 col-sm-12 col-xs-12 quotebtn">
            <Link href="/quote" onClick={closeMenu}>
              Request a Quote
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
