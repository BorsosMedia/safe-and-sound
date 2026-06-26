import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHeader, { LocationFeatureBadges } from "@/components/PageHeader";
import AboutFeatures from "@/components/AboutFeatures";
import ServicesGrid from "@/components/ServicesGrid";
import Testimonials from "@/components/Testimonials";
import QuoteCTA from "@/components/QuoteCTA";
import { locationBody, locations } from "@/content/site";

type Props = { params: Promise<{ city: string }> };

export async function generateStaticParams() {
  return locations.map((l) => ({ city: l.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city } = await params;
  const location = locations.find((l) => l.slug === city);
  if (!location) return {};
  return {
    title: `${location.title} | Safe & Sound Security`,
    description: `Home and business security systems in ${location.city}, ON. Cameras, alarms, and 24/7 monitoring.`,
  };
}

export default async function LocationPage({ params }: Props) {
  const { city } = await params;
  const location = locations.find((l) => l.slug === city);
  if (!location) notFound();

  return (
    <>
      <PageHeader
        breadcrumb="Service Areas"
        title={location.title}
        bannerImage="/images/breadcrumb-2.jpg"
      />
      <LocationFeatureBadges />
      <div className="bodycontent areaservice_content">
        <div className="container">
          <h4>{locationBody.heading}</h4>
          <strong>{locationBody.subheading}</strong>
          <br />
          <br />
          <div dangerouslySetInnerHTML={{ __html: locationBody.content }} />
        </div>
      </div>
      <AboutFeatures />
      <ServicesGrid />
      <Testimonials />
      <QuoteCTA />
    </>
  );
}
