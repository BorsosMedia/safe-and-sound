import { siteConfig } from "@/content/site";

export default function TopBar() {
  return (
    <div className="topwrap">
      <div className="container">
        <div className="row clearfix top-navigation-container">
          <div className="top_main_container">
            <div className="txt-alignleft color-dark">
              <em>We Supply and Install Security Systems</em>
            </div>
            <div className="top_numbers">
              <div className="top-tel">
                <div className="color-dark">Call Now</div>
                <div className="txt001 color-grey">
                  <a href={siteConfig.phoneHref}>{siteConfig.phone}</a>
                </div>
              </div>
              <div className="top-email">
                <div className="color-dark">Email Now</div>
                <div className="txt001 color-grey">
                  <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
