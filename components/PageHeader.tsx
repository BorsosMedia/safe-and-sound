import Link from "next/link";

type PageHeaderProps = {
  breadcrumb: string;
  title: string;
  bannerImage: string;
};

export default function PageHeader({ breadcrumb, title, bannerImage }: PageHeaderProps) {
  return (
    <div className="innerpages">
      <div className="innerpages-content">
        <div className="container">
          <div className="sublink">
            <Link href="/">Home</Link> <span>&gt;</span> {breadcrumb}
          </div>
          <h1 className="title">{title}</h1>
        </div>
      </div>
      <div className="innerbanner">
        <img src={bannerImage} alt="" />
      </div>
    </div>
  );
}

export function FeatureBadges() {
  const badges = [
    { icon: "/images/midicon.png", text: "30+ Years Serving Hamilton & Simcoe" },
    { icon: "/images/midicon2.png", text: "Family-Owned & Operated" },
    { icon: "/images/midicon3.png", text: "Licensed & Fully Insured" },
    { icon: "/images/midicon4.png", text: "Hikvision & Trusted Brands Installed" },
  ];

  return (
    <div className="featblock">
      <div className="container">
        <div className="clearfix container-radius">
          {badges.map((badge, i) => (
            <div key={badge.text} className={`featbox featinner${i > 0 ? i + 1 : ""}`}>
              <img src={badge.icon} alt="" />
              {badge.text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function LocationFeatureBadges() {
  const badges = [
    { icon: "/images/midicon.png", text: "Over 25 Years of Experience" },
    { icon: "/images/midicon2.png", text: "Competitive Pricing" },
    { icon: "/images/midicon3.png", text: "Experienced Team" },
    { icon: "/images/midicon4.png", text: "Install Quality Products" },
  ];

  return (
    <div className="featblock">
      <div className="container">
        <div className="clearfix container-radius">
          {badges.map((badge, i) => (
            <div key={badge.text} className={`featbox featinner${i > 0 ? i + 1 : ""}`}>
              <img src={badge.icon} alt="" />
              {badge.text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
