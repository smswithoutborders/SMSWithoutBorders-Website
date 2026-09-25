import React from "react";
import { Helmet } from "react-helmet-async";

export const SITE_URL = "https://smswithoutborders.com";
const SITE_NAME = "SMSWithoutBorders";
const DEFAULT_IMAGE = `${SITE_URL}/og-image.png`;

export const DEFAULT_KEYWORDS = [
  "internet freedom tool",
  "internet censorship tool",
  "anti-censorship app",
  "bypass internet shutdown",
  "internet shutdown app",
  "offline messaging",
  "communicate without internet",
  "SMS gateway",
  "encrypted SMS",
  "censorship circumvention",
  "digital rights",
  "RelaySMS",
  "DekuSMS",
];

export default function Seo({
  title,
  description,
  path = "/",
  image = DEFAULT_IMAGE,
  keywords = DEFAULT_KEYWORDS,
  type = "website",
  noindex = false,
  jsonLd,
}) {
  const url = `${SITE_URL}${path}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(", ")} />
      <meta
        name="robots"
        content={noindex ? "noindex, follow" : "index, follow, max-image-preview:large"}
      />
      <link rel="canonical" href={url} />

      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {jsonLd ? (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      ) : null}
    </Helmet>
  );
}
