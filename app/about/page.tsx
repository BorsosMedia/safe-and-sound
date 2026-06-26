import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import SeoLinks from "@/components/SeoLinks";
import AboutFeatures from "@/components/AboutFeatures";
import Testimonials from "@/components/Testimonials";
import QuoteCTA from "@/components/QuoteCTA";

export const metadata: Metadata = {
  title: "About Us | Safe & Sound Security",
  description:
    "Learn about Safe & Sound Security — a family-owned Hamilton security company serving Ontario since 1996.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        breadcrumb="About Us"
        title="About Safe & Sound Security"
        bannerImage="/images/breadcrumb-about.jpg"
      />
      <div className="bodycontent">
        <div className="container">
          <div className="row clearfix">
            <div className="col-md-8 col-sm-8 block">
              <h4>Best Home and Business Security System Company</h4>
              <p>
                At Safe &amp; Sound Security, we offer high-quality, customizable security systems and alarm
                solutions for your home and commercial establishment. Our products and services are
                high-quality, guaranteed.
              </p>
              <h4>Our Aims and Goals</h4>
              <p>
                <b>What We&apos;re All About</b>
              </p>
              <p>
                Safe &amp; Sound Security is a homegrown company from Hamilton, Ontario. Since 1996,
                we&apos;ve stayed true to our goal by providing honest and exceptional work. We provide peace
                of mind with the assurance that your home or business is secured. Our years of management
                consulting and installation experience will help ensure that you are 100% satisfied with
                every job. We believe in honest pricing and exceptional service. Let us know how we can be
                of service and we&apos;ll happily assist you in any way we can.
              </p>
              <p>
                <b>Who We Are</b>
              </p>
              <p>
                Safe &amp; Sound Security is dedicated to helping you find the security system for your
                budget. Let us know what we can do for your home or office by giving us a call today!
                We&apos;re here to make sure you feel secure. We provide personalized service and remember you
                by your name.
              </p>
            </div>
            <div className="col-md-4 col-sm-4 img-holder">
              <p>
                <img src="/images/about-us-2.jpg" alt="About Safe & Sound Security" />
              </p>
            </div>
          </div>
          <SeoLinks />
        </div>
      </div>
      <AboutFeatures />
      <Testimonials />
      <QuoteCTA />
    </>
  );
}
