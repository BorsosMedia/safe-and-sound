import type { ServicePage } from "@/content/site";
import SeoLinks from "./SeoLinks";

type ServiceContentProps = {
  service: ServicePage;
};

export default function ServiceContent({ service }: ServiceContentProps) {
  if (service.layout === "two-column") {
    return (
      <div className="bodycontent">
        <div className="container">
          <div className="row clearfix">
            <div className="col-md-8 col-sm-8 block">
              {service.sections.map((section) => (
                <div key={section.heading ?? section.content.slice(0, 30)}>
                  {section.heading && <h4>{section.heading}</h4>}
                  <p dangerouslySetInnerHTML={{ __html: section.content }} />
                </div>
              ))}
            </div>
            <div className="col-md-4 col-sm-4 img-holder">
              {service.images?.map((img) => (
                <p key={img}>
                  <img src={img} alt="" />
                </p>
              ))}
            </div>
          </div>
          <SeoLinks />
        </div>
      </div>
    );
  }

  return (
    <div className="bodycontent areaservice_content">
      <div className="container">
        {service.sections.map((section) => (
          <div key={section.heading ?? section.content.slice(0, 30)}>
            {section.heading && <h4>{section.heading}</h4>}
            <p dangerouslySetInnerHTML={{ __html: section.content }} />
          </div>
        ))}
        <SeoLinks />
      </div>
    </div>
  );
}
