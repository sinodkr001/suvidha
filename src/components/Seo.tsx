import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

type SeoProps = {
  title: string;
  description: string;
  /** Defaults to current location.pathname */
  canonicalPath?: string;
  /** Absolute URL or site-relative path */
  ogImage?: string;
  noIndex?: boolean;
};

const DEFAULT_SITE_URL = (import.meta.env.VITE_SITE_URL as string | undefined) ?? 'https://suvidhapos.com';
const DEFAULT_OG_IMAGE = '/oldlogo (1).png';

function toAbsoluteUrl(siteUrl: string, maybeRelativeUrl: string) {
  try {
    // If already absolute, URL() will keep it
    return new URL(maybeRelativeUrl, siteUrl).toString();
  } catch {
    return siteUrl;
  }
}

export default function Seo({ title, description, canonicalPath, ogImage, noIndex }: SeoProps) {
  const location = useLocation();
  const path = canonicalPath ?? location.pathname;

  const canonicalUrl = toAbsoluteUrl(DEFAULT_SITE_URL, path);
  const absoluteOgImage = toAbsoluteUrl(DEFAULT_SITE_URL, ogImage ?? DEFAULT_OG_IMAGE);

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />

      <link rel="canonical" href={canonicalUrl} />

      <meta name="robots" content={noIndex ? 'noindex, nofollow' : 'index, follow'} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={absoluteOgImage} />
      <meta property="og:site_name" content="Suvidha POS" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={absoluteOgImage} />
    </Helmet>
  );
}


