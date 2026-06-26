import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHeader from "@/components/PageHeader";
import ServiceContent from "@/components/ServiceContent";
import AboutFeatures from "@/components/AboutFeatures";
import ServicesGrid from "@/components/ServicesGrid";
import Testimonials from "@/components/Testimonials";
import QuoteCTA from "@/components/QuoteCTA";
import { services } from "@/content/site";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: `${service.title} | Safe & Sound Security`,
    description: `Professional ${service.title.toLowerCase()} services in Simcoe, Hamilton, and across Ontario.`,
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  return (
    <>
      <PageHeader breadcrumb={service.breadcrumb} title={service.title} bannerImage={service.bannerImage} />
      <ServiceContent service={service} />
      <AboutFeatures />
      <ServicesGrid />
      <Testimonials />
      <QuoteCTA />
    </>
  );
}
