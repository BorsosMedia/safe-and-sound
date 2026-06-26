import Link from "next/link";
import { navLocations, navServices } from "@/content/site";

export default function SeoLinks() {
  return (
    <div style={{ margin: "30px 0 0" }}>
      Our Security System Services Include:{" "}
      {navServices.map((item, i) => (
        <span key={item.href}>
          {i > 0 && " | "}
          <Link href={item.href}>{item.label}</Link>
        </span>
      ))}
      <br />
      <br />
      Safe &amp; Sound Security offers commercial and residential security system services to clients
      across{" "}
      {navLocations.map((item, i) => (
        <span key={item.href}>
          {i > 0 && ", "}
          <Link href={item.href}>{item.label}</Link>
        </span>
      ))}
      .
      <br />
      <br />
      <Link href="/contact">Contact Us Now</Link> to discuss your security alarm installation
      requirements.
    </div>
  );
}
