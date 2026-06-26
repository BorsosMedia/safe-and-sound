"use client";

import Script from "next/script";

export default function LeadConnectorChat() {
  return (
    <Script
      src="https://widgets.leadconnectorhq.com/loader.js"
      data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
      data-widget-id="69ebbbb6bd8fe895626e2147"
      strategy="lazyOnload"
    />
  );
}

export function ContactFormEmbed() {
  return (
    <>
      <iframe
        src="https://api.leadconnectorhq.com/widget/form/csAjafBtxJrONPufZuU9"
        style={{ width: "100%", height: 396, border: "none", borderRadius: 3 }}
        id="inline-csAjafBtxJrONPufZuU9"
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="Contact Form"
        data-height="396"
        data-layout-iframe-id="inline-csAjafBtxJrONPufZuU9"
        data-form-id="csAjafBtxJrONPufZuU9"
        title="Contact Form"
      />
      <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="lazyOnload" />
    </>
  );
}

export function QuoteFormEmbed() {
  return (
    <>
      <iframe
        src="https://api.leadconnectorhq.com/widget/form/33bV3npBla5krEidxxYz"
        style={{ width: "100%", height: 666, border: "none", borderRadius: 3 }}
        id="inline-33bV3npBla5krEidxxYz"
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="Quote Request"
        data-height="666"
        data-layout-iframe-id="inline-33bV3npBla5krEidxxYz"
        data-form-id="33bV3npBla5krEidxxYz"
        title="Quote Request"
      />
      <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="lazyOnload" />
    </>
  );
}
