const propertyTypes = [
  { icon: "/images/icon1.png", label: "Stores" },
  { icon: "/images/icon2.png", label: "Homes" },
  { icon: "/images/icon3.png", label: "Parks" },
  { icon: "/images/icon4.png", label: "Gyms" },
  { icon: "/images/icon5.png", label: "Train Stations" },
  { icon: "/images/icon6.png", label: "Factories" },
  { icon: "/images/icon7.png", label: "Shopping Mall" },
  { icon: "/images/icon8.png", label: "Warehouses" },
  { icon: "/images/icon9.png", label: "Buildings" },
];

export default function AboutFeatures() {
  return (
    <div className="wrap5">
      <div className="container">
        <div className="row clearfix">
          <div className="col-md-6 col-sm-12 col-xs-12 block">
            <h1 className="title">We Remember You by Name</h1>
            <p>
              <strong>Not by account number.</strong>
              <br />
              <br />
              Safe &amp; Sound Security is a family-owned business run by Dale and Darren — two brothers
              who have been installing security systems across Hamilton and Simcoe for nearly 30 years.
              Every system is custom-designed for the property. Every installation is done by us, not a
              subcontractor. And when you call, you get us — not a call centre.
              <br />
              <br />
              We guarantee every product and installation we provide. If something isn&apos;t right, we make
              it right.
            </p>
          </div>
          <div className="col-md-6 col-sm-12 col-xs-12">
            {/* Using Bootstrap's native flex utility classes:
              - d-flex flex-wrap: Turns container into a wrapping flexbox
              - justify-content-center: Automatically centers items on rows that aren't full (like the last item!)
            */}
            <div className="asd d-flex flex-wrap justify-content-center">
              {propertyTypes.map((type) => (
                <div key={type.label} className="col-md-4 col-sm-4 col-xs-6 col-6">
                  <div className="icon-holder">
                    <div className="img-holder">
                      <img src={type.icon} alt="" />
                    </div>
                    <div>{type.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="row clearfix">
          <div className="col-md-12 col-sm-12 col-xs-12">
            <p className="property-types-support">
              Every property is different. Every system we install is designed specifically for it. Whether
              you&apos;re protecting a family home or a 50,000 sq ft warehouse — we&apos;ve done it before.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}