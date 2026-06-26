import Link from "next/link";

export default function QuoteCTA() {
  return (
    <div className="wrap7">
      <div className="container">
        <h1 className="page-title2">Looking to upgrade your security?</h1>
        <div>
          Consider Safe &amp; Sound Security as your system contractors. We have the resources and
          expertise to give you access to a broad range of cameras and recording systems to suit any
          application. Contact us today.
        </div>
        <div className="qtbtn">
          <Link href="/quote">Get A Free Estimate</Link>
        </div>
      </div>
    </div>
  );
}
