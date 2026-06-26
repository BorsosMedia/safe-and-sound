import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SeoLinks from "@/components/SeoLinks";
import AboutFeatures from "@/components/AboutFeatures";
import Testimonials from "@/components/Testimonials";
import QuoteCTA from "@/components/QuoteCTA";
import { promotions } from "@/content/site";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return promotions.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const promo = promotions.find((p) => p.slug === slug);
  if (!promo) return {};
  return {
    title: `${promo.title} | Safe & Sound Security`,
    description: `${promo.title} — ${promo.price}. Professional installation in Ontario.`,
  };
}

export default async function PromotionPage({ params }: Props) {
  const { slug } = await params;
  const promo = promotions.find((p) => p.slug === slug);
  if (!promo) notFound();

  return (
    <>
      <div className="innerpages">
        <div className="innerbanner">
          <img src={promo.bannerImage} alt="" />
        </div>
      </div>
      <div className="bodycontent">
        <div className="container">
          <div className="row clearfix">
            <div className="col-md-8 col-sm-8 block">
              <h2 className="page-title">{promo.title}</h2>
              <hr className="hr2" />
              <p className="img-holder">
                <img src={promo.mainImage} alt={promo.title} />
              </p>
              <ul>
                {promo.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <div style={{ margin: "15px 0 0" }}>
                <span className="submitbtn">{promo.price}</span>
              </div>
            </div>
            <div className="col-md-4 col-sm-4 img-holder">
              {promo.sideImages.map((img) => (
                <p key={img}>
                  <img src={img} alt="" />
                </p>
              ))}
            </div>
          </div>
          <SeoLinks />
        </div>
      </div>
      <AboutFeatures />
      <Testimonials />
      <QuoteCTA />
    </>
  );
}
