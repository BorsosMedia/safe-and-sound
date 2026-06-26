import Hero from "@/components/Hero";
import ServicesGrid from "@/components/ServicesGrid";
import AboutFeatures from "@/components/AboutFeatures";
import Testimonials from "@/components/Testimonials";
import QuoteCTA from "@/components/QuoteCTA";
import { FeatureBadges } from "@/components/PageHeader";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeatureBadges />
      <ServicesGrid />
      <AboutFeatures />
      <Testimonials />
      <div className="wrap6">
        <div className="container">
          <div className="row clearfix">
            <div className="col-md-5 col-sm-12 col-xs-12" />
            <div className="col-md-7 col-sm-12 col-xs-12">
              <div className="wrap6-box">
                <h1 className="title">
                  Why Ontario Homeowners and Business Owners Choose a Professional Security System
                </h1>
                <div>
                  A professionally installed system doesn&apos;t just deter crime — it changes how you live
                  and work. You stop worrying about the warehouse overnight. You check in on the kids after
                  school from your phone. You get an insurance discount that offsets part of the cost. And
                  if something does happen, you have footage, evidence, and a system that already notified
                  monitoring.
                  <br />
                  <br />
                  That&apos;s what Safe &amp; Sound installs. Not just hardware — peace of mind with a
                  guarantee behind it.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <QuoteCTA />
    </>
  );
}
