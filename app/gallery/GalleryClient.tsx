"use client";

import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import PageHeader from "@/components/PageHeader";
import AboutFeatures from "@/components/AboutFeatures";
import Testimonials from "@/components/Testimonials";
import QuoteCTA from "@/components/QuoteCTA";
import { galleryImages } from "@/content/site";

const slides = galleryImages.map((img) => ({
  src: `/images/gallery/${img}`,
}));

export default function GalleryClient() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <>
      <PageHeader breadcrumb="Gallery" title="Photo Gallery" bannerImage="/images/breadcrumb-1.jpg" />
      <div className="bodycontent">
        <div className="container">
          <div className="row clearfix" id="portfolio">
            {galleryImages.map((img, i) => (
              <div key={img} className="col-md-4 col-sm-4 col-xs-12">
                <div className="gallery-block">
                  <button
                    type="button"
                    onClick={() => {
                      setIndex(i);
                      setOpen(true);
                    }}
                    style={{ border: "none", background: "none", padding: 0, cursor: "pointer", width: "100%" }}
                  >
                    <img src={`/images/gallery/${img}`} alt={`Security installation ${i + 1}`} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Lightbox open={open} close={() => setOpen(false)} index={index} slides={slides} />
      <AboutFeatures />
      <Testimonials />
      <QuoteCTA />
    </>
  );
}
