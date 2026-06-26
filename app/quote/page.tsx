import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { QuoteFormEmbed } from "@/components/Embeds";
import AboutFeatures from "@/components/AboutFeatures";
import QuoteCTA from "@/components/QuoteCTA";

export const metadata: Metadata = {
  title: "Request A Quote | Safe & Sound Security",
  description: "Get a free security assessment and quote from Safe & Sound Security.",
};

export default function QuotePage() {
  return (
    <>
      <PageHeader breadcrumb="Free Quote" title="Request A Quote" bannerImage="/images/quote-banner.jpg" />
      <div className="bodycontent">
        <div className="container">
          <div className="row clearfix">
            <div className="col-md-10 col-sm-12 col-xs-12 col-md-offset-1">
              <div className="contactpage-form">
                <QuoteFormEmbed />
              </div>
            </div>
          </div>
        </div>
      </div>
      <AboutFeatures />
      <QuoteCTA />
    </>
  );
}
