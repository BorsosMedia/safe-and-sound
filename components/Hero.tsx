import Link from "next/link";

export default function Hero() {
  return (
    <div className="hero_section">
      <div className="hero_content">
        <h1>
          Hamilton&apos;s Security Experts for 30+ Years — Cameras, Alarms &amp; Monitoring Done Right.
        </h1>
        <div>
          We supply and install security cameras, alarm systems, 24/7 monitoring, and access control for
          homes and businesses across Hamilton, Simcoe, and Southwestern Ontario. Family-owned, fully
          insured, and on the job for 30+ years without a single franchise.
        </div>
        <Link href="/quote" className="linkbtn2">
          Get My Free Security Assessment
        </Link>
        <p className="hero_phone_cta">
          <a href="tel:+19055222926">Call Dale directly — (905) 522-2926</a>
        </p>
      </div>
    </div>
  );
}
