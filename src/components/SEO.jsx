import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function SEO({ title, description, canonical, type = 'website', jsonLd }) {
  const siteUrl = 'https://fortensolutions.com';
  const url = canonical ? `${siteUrl}${canonical}` : siteUrl;

  return (
    <Helmet>
      {/* Standard Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      
      {/* Open Graph Tags (Social Sharing) */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      {/* Placeholder image for OG - can be updated when client provides one */}
      <meta property="og:image" content={`${siteUrl}/logo.jpg`} />

      {/* Twitter Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />

      {/* Canonical Link */}
      <link rel="canonical" href={url} />

      {/* Structured Data (JSON-LD) */}
      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      )}
    </Helmet>
  );
}
