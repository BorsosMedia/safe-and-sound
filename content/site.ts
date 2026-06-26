export const siteConfig = {
  name: "Safe & Sound Security",
  phone: "(905) 522-2926",
  phoneHref: "tel:+19055222926",
  tollFree: "1-888-424-7175",
  email: "info@safeandsound-security.com",
  address: "1410 McDowell Rd E, Simcoe, ON N3Y 4K5, Canada",
  defaultTitle:
    "Safe & Sound Security | Home, Business Security Company Simcoe",
  defaultDescription:
    "Safe & Sound Security provides Commercial and Residential Security System Services to clients across Simcoe, Mississauga, Toronto, Hamilton, London, Guelph, Brampton.",
};

export type ServicePage = {
  slug: string;
  legacyPath: string;
  title: string;
  breadcrumb: string;
  bannerImage: string;
  layout: "two-column" | "full-width";
  sections: { heading?: string; content: string }[];
  images?: string[];
};

export const services: ServicePage[] = [
  {
    slug: "hour-security-monitoring-services-simcoe-hamilton",
    legacyPath: "hour-security-monitoring-services-simcoe-hamilton.php",
    title: "24 Hour Security System Services",
    breadcrumb: "Services",
    bannerImage: "/images/breadcrumb-7.jpg",
    layout: "full-width",
    sections: [
      {
        heading: "Professional and Knowledgeable Security System Specialists",
        content: `<strong>At Safe & Sound Security, we offer high-quality, customizable security systems and alarm solutions for your home and commercial establishment. Our products and services are high-quality, guaranteed.</strong><br><br>A home security system guarantees the peace of mind that comes with knowing your home and family are protected. Knowing they are safe is valuable, but seeing is believing. With 24/7 monitoring, you are directly connected with your home security system around the clock. Any triggered detector sends an immediate signal or message to you via text message, email, phone call—or whichever communication mode you choose, so you can size up the situation and take the appropriate action. Whether this message comes to you directly from your system or from a monitoring service, 24 hour a day security monitoring provides uninterrupted protection.`,
      },
    ],
  },
  {
    slug: "residential-security-system-services-simcoe-hamilton",
    legacyPath: "residential-security-system-services-simcoe-hamilton.php",
    title: "Residential Security System",
    breadcrumb: "Services",
    bannerImage: "/images/breadcrumb-4.jpg",
    layout: "two-column",
    sections: [
      {
        heading: "Home Safety to Protect Property & Loved Ones",
        content:
          "Protecting loved ones and property is your utmost concern. In order to safeguard that which you hold most dear, you must ensure you're receiving the highest level of security—even when you aren't home. But it's more than merely having access to security, it's also crucial to understand which features and benefits are best for your individual property.",
      },
      {
        heading: "Protect Your Home and Your Family",
        content: `Our home security systems can be customized to monitor both the interior and exterior of your ON residence. Whether you need something simple or require a more complex solution, we will make you feel secure at home.<br><br>Safe & Sound Security has been protecting homes and businesses throughout <strong>Simcoe, Mississauga, Toronto, Hamilton, London, Brampton, Guelph, Kitchener, Niagara Falls, Ontario</strong>. Home alarm systems designed and installed by Supreme utilize the industry's most reliable and effective components to keep your family, home, and property safe. We customize our home surveillance systems to meet the needs of each homeowner. And, if you are moving, let us know early, so we can protect you quickly at your new address.`,
      },
    ],
    images: ["/images/residential-img.jpg", "/images/residential-img2.jpg"],
  },
  {
    slug: "commercial-security-system-services-simcoe-hamilton",
    legacyPath: "commercial-security-system-services-simcoe-hamilton.php",
    title: "Commercial Security System",
    breadcrumb: "Services",
    bannerImage: "/images/breadcrumb-4.jpg",
    layout: "two-column",
    sections: [
      {
        heading: "You need a commercial security system as unique as your business.",
        content: `For almost 23 years, Safe & Sound Security has developed a solid reputation for designing the most advanced commercial security solutions for ON companies with a wide variety of security requirements. Regardless of the size or type of business you have, we can design a business alarm system that meets your exact needs.<br><br>From custom fire and burglar alarm systems to video surveillance, access control and the infrastructure that ties it all together, we have the solutions and skilled technicians you need to keep your business a safe and worry-free environment. Our commercial security systems are comprehensive enough to quickly detect threats from internal or external theft as well as danger from fire and smoke, carbon monoxide, and other environmental emergencies.<br><br>Each system contains the highest quality components that have been rigorously tested for durability, effectiveness, and compatibility. We have partnerships with some of the most recognized and respected manufacturers in the industry, who are known for their innovative and effective business security solutions.<br><br>Our goal is to create a customized solution that meets the needs of your business today while preparing for any unforeseen events tomorrow.<br><br>Find out why thousands trust Safe & Sound Security for their business.`,
      },
    ],
    images: ["/images/commercial-img.jpg"],
  },
  {
    slug: "security-system-installation-services-simcoe-hamilton",
    legacyPath: "security-system-installation-services-simcoe-hamilton.php",
    title: "Security System Installation",
    breadcrumb: "Services",
    bannerImage: "/images/breadcrumb-5.jpg",
    layout: "full-width",
    sections: [
      {
        heading: "Complete support of your business security systems from the start.",
        content:
          "We offer burglar alarms and fire alarm system installation for small businesses as well as maintenance and support of an entire enterprise video surveillance network. With more than 10,000 security professionals dedicated to being your business security team, you can be sure of reliable, expert installation, maintenance, service and support. From initial system layout and installation and commissioning, to ongoing technical support and maintenance, Safe & Sound Security sets the standard with the level of reliable service your business demands.",
      },
    ],
  },
  {
    slug: "security-products-sales-service",
    legacyPath: "security-products-sales-service.php",
    title: "Security Products Sales And Service",
    breadcrumb: "Services",
    bannerImage: "/images/breadcrumb-6.jpg",
    layout: "full-width",
    sections: [
      {
        content:
          "Safe & Sound Security offers a range of security products to help improve your business or organization's overall security. Our selection of access control and CCTV solutions provide tested and proven technologies to keep your people and facilities safe.",
      },
    ],
  },
  {
    slug: "video-security-camera-installation-services-simcoe-hamilton",
    legacyPath: "video-security-camera-installation-services-simcoe-hamilton.php",
    title: "Video Security Camera Installation",
    breadcrumb: "Services",
    bannerImage: "/images/breadcrumb-7.jpg",
    layout: "full-width",
    sections: [
      {
        content: `Safe & Sound Security offers world-class security camera systems installed by professional security camera system installers. We have years of experience in planning, customizing and installing comprehensive CCTV systems. We offer IP video surveillance systems, indoor and outdoor camera systems and cutting-edge video analytics. We specialize in designing and installing business security camera systems.<br><br><strong>CCTV Camera Installation and Integration</strong><br>Streamline your security system with high-quality security integration from our CCTV camera installation experts. Whether you're building out a new system or adding to an existing one, our surveillance installers can improve your system with the latest security equipment and software. We offer both wired and wireless security camera installation and integration services.<br><br>We're a top choice of security camera system companies, combining surveillance camera installation with intercom systems, smart cards, mobile credentials, burglar alarms, security software, and more. Thanks to our wide range of security systems, including many with open architecture platforms, we are guaranteed to find the ideal solution for your business.<br><br>- Streamline business communication<br>- Save money by improving old security systems<br>- Protect your business from multiple angles<br>- Customize your security system to work for you<br>- Simplify security management with VMS and smartphone apps`,
      },
    ],
  },
];

export type LocationPage = {
  slug: string;
  legacyPath: string;
  city: string;
  title: string;
};

export const locations: LocationPage[] = [
  { slug: "simcoe", legacyPath: "home-business-security-systems-simcoe-on.php", city: "Simcoe", title: "Home And Business Security Systems Simcoe, ON" },
  { slug: "mississauga", legacyPath: "home-business-security-systems-mississauga-on.php", city: "Mississauga", title: "Home And Business Security Systems Mississauga, ON" },
  { slug: "toronto", legacyPath: "home-business-security-systems-toronto-on.php", city: "Toronto", title: "Home And Business Security Systems Toronto, ON" },
  { slug: "hamilton", legacyPath: "home-business-security-systems-hamilton-on.php", city: "Hamilton", title: "Home And Business Security Systems Hamilton, ON" },
  { slug: "london", legacyPath: "home-business-security-systems-london-on.php", city: "London", title: "Home And Business Security Systems London, ON" },
  { slug: "brampton", legacyPath: "home-business-security-systems-brampton-on.php", city: "Brampton", title: "Home And Business Security Systems Brampton, ON" },
  { slug: "guelph", legacyPath: "home-business-security-systems-guelph-on.php", city: "Guelph", title: "Home And Business Security Systems Guelph, ON" },
  { slug: "kitchener", legacyPath: "home-business-security-systems-kitchener-on.php", city: "Kitchener", title: "Home And Business Security Systems Kitchener, ON" },
  { slug: "niagara-falls", legacyPath: "home-business-security-systems-niagara-falls-on.php", city: "Niagara Falls", title: "Home And Business Security Systems Niagara Falls, ON" },
];

export const locationBody = {
  heading: "Professional and Knowledgeable Security System Specialists",
  subheading: "Offering High-Quality Security Camera Systems & Alarm System Solutions",
  content: `At Safe & Sound Security, we offer high-quality, customizable security systems and alarm solutions for your home and commercial establishment. Our products and services are high-quality, guaranteed.<br><br>We believe in honest pricing and always aim to find a security system to suit every budget. We also provide fantastic promotions on our 4K and 5MP camera kits, making our service excellent value for money.`,
};

export type PromotionPage = {
  slug: string;
  legacyPath: string;
  title: string;
  price: string;
  features: string[];
  bannerImage: string;
  mainImage: string;
  sideImages: string[];
};

export const promotions: PromotionPage[] = [
  {
    slug: "4-camera-5mp-system",
    legacyPath: "4-camera-5mp-system.php",
    title: "4 Camera Ultra HD 5MP CVI kit",
    price: "Now Only $1790.00",
    bannerImage: "/images/1916084_1128x0.jpg",
    mainImage: "/images/1916952_550x0.jpg",
    sideImages: ["/images/1916953_edit.jpg", "/images/1916954_edit.jpg"],
    features: [
      "4 channel HDVR",
      "All channels record @4K 30 FPS real time",
      "1 TB Hard drive installed",
      "Remote software app included for mobile devices",
      "5 MP Ultra High Definition Cameras",
      "Weather proof and vandal proof",
      "Super Night vision IR illumination up to 50 meters",
      "The entire system is backed by our Platinum 3 year warranty",
    ],
  },
  {
    slug: "6-camera-5mp-system",
    legacyPath: "6-camera-5mp-system.php",
    title: "6 Camera Ultra HD 5MP CVI kit",
    price: "Now Only $2089.00",
    bannerImage: "/images/1916084_1128x0.jpg",
    mainImage: "/images/1916952_550x0.jpg",
    sideImages: ["/images/1916953_edit.jpg", "/images/1916954_edit.jpg"],
    features: [
      "6 channel HDVR",
      "All channels record @4K 30 FPS real time",
      "3 TB Hard drive installed",
      "Remote software app included for mobile devices",
      "5 MP Ultra High Definition Cameras",
      "Weather proof and vandal proof",
      "Super Night vision IR illumination up to 50 meters",
      "The entire system is backed by our Platinum 3 year warranty",
    ],
  },
  {
    slug: "4-camera-4k-system",
    legacyPath: "4-camera-4k-system.php",
    title: "4 Camera Ultra HD 4K IP kit",
    price: "Now Only $2189.00",
    bannerImage: "/images/1916084_1128x0.jpg",
    mainImage: "/images/1916952_550x0.jpg",
    sideImages: ["/images/1916953_edit.jpg", "/images/1916954_edit.jpg"],
    features: [
      "4 channel IP NVR",
      "All channels record @4K 30 FPS real time",
      "Built in 4 port POE switch",
      "1 TB Hard drive installed.",
      "Remote software app included for mobile devices",
      "4K Ultra High Definition IP Cameras",
      "Weather proof and vandal proof",
      "Night vision IR illumination up to 30 meters",
      "The entire system is backed by our Platinum 3 year warranty",
    ],
  },
  {
    slug: "6-camera-4k-system",
    legacyPath: "6-camera-4k-system.php",
    title: "6 Camera Ultra HD 4K IP kit",
    price: "Now Only $2689.00",
    bannerImage: "/images/1916084_1128x0.jpg",
    mainImage: "/images/1916952_550x0.jpg",
    sideImages: ["/images/1916953_edit.jpg", "/images/1916954_edit.jpg"],
    features: [
      "8 channel IP NVR",
      "All channels record @4K 30 FPS real time",
      "Built in 8 Port POE switch",
      "2TB Hard drive installed",
      "Remote software app included for mobile devices",
      "4K Ultra High Definition IP Cameras",
      "Weather proof and vandal proof",
      "Night vision IR illumination up to 30 meters",
      "The entire system is backed by our Platinum 3 year warranty",
    ],
  },
];

export const galleryImages = [
  "img8.jpg", "img9.jpg", "img10.jpg", "img2.jpg", "img3.jpg", "img4.jpg",
  "img5.jpg", "img6.jpg", "img7.jpg", "img11.jpg", "img12.jpg", "img13.jpg",
  "img14.jpg", "img15.jpg", "img16.jpg", "img17.jpg", "img19.jpg", "img20.jpg",
  "img21.jpg", "img22.jpg", "img23.jpg",
];

export const navServices = [
  { href: "/services/hour-security-monitoring-services-simcoe-hamilton", label: "24 Hour Security Monitoring" },
  { href: "/services/residential-security-system-services-simcoe-hamilton", label: "Residential Security Systems" },
  { href: "/services/commercial-security-system-services-simcoe-hamilton", label: "Commercial Security Systems" },
  { href: "/services/security-system-installation-services-simcoe-hamilton", label: "Security System Installation" },
  { href: "/services/security-products-sales-service", label: "Security Products Sales And Service" },
  { href: "/services/video-security-camera-installation-services-simcoe-hamilton", label: "Video Security Camera Installation" },
];

export const navLocations = locations.map((l) => ({
  href: `/locations/${l.slug}`,
  label: l.city,
}));

export const navPromotions = promotions.map((p) => ({
  href: `/promotions/${p.slug}`,
  label: p.title.replace(" kit", ""),
}));
