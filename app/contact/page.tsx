import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { ContactFormEmbed } from "@/components/Embeds";
import Testimonials from "@/components/Testimonials";
import QuoteCTA from "@/components/QuoteCTA";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact Us | Safe & Sound Security",
  description: "Contact Safe & Sound Security for residential and commercial security services in Ontario.",
};

export default function ContactPage() {
  return (
    <>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2926.889328014851!2d-80.37914508507771!3d42.811824714445095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882c9b736325e517%3A0x65ff476c7b0ac46d!2sSafe%20%26%20Sound%20Security!5e0!3m2!1sen!2snp!4v1628856119960!5m2!1sen!2snp"
        width="100%"
        height="350"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        title="Safe & Sound Security location"
      />
      <div className="bodycontent">
        <div className="container">
          <div className="row clearfix">
            <div className="col-md-4 col-sm-5 block">
              <div className="contact-left">
                <div className="txt3 text-uppercase">Let&apos;s Talk</div>
                <h2 className="page-title2" style={{ fontSize: 28, margin: "0 0 15px", color: "#fff", lineHeight: "35px" }}>
                  Speak with an expert
                </h2>
                <div className="ma-1">
                  <div className="row clearfix">
                    <div className="col-md-3 col-sm-3 col-xs-3">
                      <i className="fa fa-phone" />
                    </div>
                    <div className="col-md-9 col-sm-9 col-xs-9" style={{ fontSize: 17 }}>
                      <strong>Phone:</strong>
                      <br />
                      {siteConfig.phone}
                      <br />
                      <br />
                      <strong>Toll-Free:</strong>
                      <br />
                      {siteConfig.tollFree}
                    </div>
                  </div>
                </div>
                <div className="ma-1">
                  <div className="row clearfix">
                    <div className="col-md-3 col-sm-3 col-xs-3">
                      <i className="fa fa-envelope" />
                    </div>
                    <div className="col-md-9 col-sm-9 col-xs-9">
                      <strong>Email:</strong>
                      <br />
                      {siteConfig.email}
                    </div>
                  </div>
                </div>
                <div className="ma-1">
                  <div className="row clearfix">
                    <div className="col-md-3 col-sm-3 col-xs-3">
                      <i className="fa fa-map-marker" />
                    </div>
                    <div className="col-md-9 col-sm-9 col-xs-9">
                      <strong>Address:</strong>
                      <br />
                      {siteConfig.address}
                    </div>
                  </div>
                </div>
              </div>
              <div className="contact-left">
                <h2 className="page-title2" style={{ fontSize: 22, color: "#fff", margin: "0 0 15px", lineHeight: "35px" }}>
                  Follow Us On
                </h2>
                <div style={{ display: "flex", gap: "1rem" }}>
                  <a href="https://www.facebook.com/Safe-Sound-Security-164680663591435/" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-facebook" />
                  </a>
                  <a href="https://ca.linkedin.com/company/safe-%26-sound-security" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-linkedin" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-8 col-sm-7">
              <div className="contactpage-form">
                <h1 className="page-title" style={{ fontSize: 35 }}>
                  Get in Touch With Our Team
                </h1>
                <hr className="hr" style={{ margin: "0 0 20px", width: "10%" }} />
                <p style={{ margin: "0 0 30px" }}>
                  Have a question about residential or commercial security services? Fill out the form below
                  and a member of our team will get back to you soon.
                </p>
                <ContactFormEmbed />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Testimonials />
      <QuoteCTA />
    </>
  );
}
