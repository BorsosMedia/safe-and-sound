"use client";

import Script from "next/script";

type TestimonialsProps = {
  showHeader?: boolean;
};

export default function Testimonials({ showHeader = true }: TestimonialsProps) {
  return (
    <div className="testiwrap text-center">
      <div className="container">
        {showHeader && (
          <>
            <h1 className="page-title text-center">
              What Our Customers Say — And Why They Keep Coming Back
            </h1>
            <hr className="hr" />
          </>
        )}
        <p className="google-reviews-intro">
          4.8 stars across 18 Google reviews — and counting.{" "}
          <a
            href="https://www.google.com/maps/search/Safe+%26+Sound+Security+330+Caroline+Street+South+Hamilton+ON"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read all reviews on Google →
          </a>
        </p>
        <Script src="https://elfsightcdn.com/platform.js" strategy="lazyOnload" />
        <div
          className="elfsight-app-b4ef7f55-5881-4d60-a92b-5d16a0de1a6f"
          data-elfsight-app-lazy
        />
      </div>
    </div>
  );
}
