import Link from "next/link";
import { navLocations, navPromotions, navServices } from "@/content/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <>
      <div className="wrap8">
        <div className="container">
          <div className="row clearfix">
            <div className="col-md-4 col-sm-6 col-xs-12 block">
              <h2 className="title">What We Offer</h2>
              <ul>
                {navServices.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-md-2 col-sm-6 col-xs-12 block">
              <h2 className="title">Service Areas</h2>
              <ul>
                {navLocations.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12 block">
              <h2 className="title">Promotions</h2>
              <ul>
                {navPromotions.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12 block">
              <h2 className="title">Quick Info</h2>
              <ul>
                <li><Link href="/about">About Us</Link></li>
                <li><Link href="/quote">Get A Quote</Link></li>
                <li><Link href="/gallery">Photo Gallery</Link></li>
                <li><Link href="/contact">Contact Us</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="wrap9">
        <div className="container">
          Copyright &copy; {year}. Safe & Sound Security. All rights reserved.
          <br />
          Designed By{" "}
          <a href="https://www.borsosmedia.com/" target="_blank" rel="noopener noreferrer">
            Borsos Media
          </a>
        </div>
      </div>
    </>
  );
}
