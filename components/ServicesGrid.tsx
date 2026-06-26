import Link from "next/link";

const services = [
  {
    image: "/images/services-img3.jpg",
    title: "24/7 Monitoring",
    description:
      "Round-the-clock professional monitoring so your home or business is protected even when you're not there. Instant alerts. Fast response. Always on.",
    href: "/services/hour-security-monitoring-services-simcoe-hamilton",
  },
  {
    image: "/images/services-img1.jpg",
    title: "Security Camera Installation",
    description:
      "HD and 4K camera systems for homes, warehouses, gyms, and commercial properties. We handle everything — design, wiring, installation, and setup. No mess, no middleman.",
    href: "/services/video-security-camera-installation-services-simcoe-hamilton",
  },
  {
    image: "/images/services-img2.jpg",
    title: "Security Systems Installation",
    description:
      "Burglar alarms, fire detection, and complete system integration for residential and commercial properties. From a single panel to a fully networked multi-site setup — we build it to fit.",
    href: "/services/security-system-installation-services-simcoe-hamilton",
  },
  {
    image: "/images/services-img4.jpg",
    title: "Security Product Sales & Service",
    description:
      "We supply, install, and service leading security brands — including Hikvision, Dahua, and DSC. Need a replacement part, an upgrade, or a full system refresh? We've got it.",
    href: "/services/security-products-sales-service",
  },
];

export default function ServicesGrid() {
  return (
    <div className="wrap4">
      <div className="container">
        <h1 className="page-title text-center">
          Everything Your Property Needs to Stay Protected — Installed Right the First Time
        </h1>
        <hr className="hr" />
        <div style={{ margin: "0 0 30px", textAlign: "center", maxWidth: 780, marginInline: "auto" }}>
          Professional design, wiring, installation, and support for homes and businesses across{" "}
          <strong>
            Simcoe, Hamilton, Mississauga, Toronto, London, Brampton, Guelph, Kitchener, Niagara Falls
          </strong>
          , and Southwestern Ontario.
        </div>
        <div className="row clearfix">
          {services.map((service) => (
            <div key={service.href} className="col-md-3 col-sm-6 col-xs-12">
              <div className="contentbox">
                <div className="imgbox">
                  <img src={service.image} alt="" />
                </div>
                <div className="descp">
                  <h1 className="title">{service.title}</h1>
                  <p>{service.description}</p>
                  <div className="more">
                    <Link href={service.href}>Read More</Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
