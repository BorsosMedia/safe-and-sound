import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Testimonials from "@/components/Testimonials";
import AboutFeatures from "@/components/AboutFeatures";
import QuoteCTA from "@/components/QuoteCTA";

export const metadata: Metadata = {
  title: "Reviews | Safe & Sound Security",
  description: "Read Google reviews from Safe & Sound Security customers across Ontario.",
};

export default function ReviewsPage() {
  return (
    <>
      <PageHeader
        breadcrumb="Reviews"
        title="What Our Customers Say — And Why They Keep Coming Back"
        bannerImage="/images/testi-banner.jpg"
      />
      <div className="bodycontent">
        <div className="container">
          <div className="row clearfix text-center">
            <Testimonials showHeader={false} />
          </div>
        </div>
      </div>
      <AboutFeatures />
      <QuoteCTA />
    </>
  );
}
