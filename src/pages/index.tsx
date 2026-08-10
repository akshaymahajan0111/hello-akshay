import { Helmet } from '@dr.pogodin/react-helmet';
import { motion } from 'motion/react';

import { home } from 'virtual:content';

const siteUrl = 'https://hello-world.example';
const pageUrl = `${siteUrl}/`;
const title = 'Hello World — A small place to begin';
const description = 'A simple, welcoming hello world app.';
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      name: 'Hello World',
      url: pageUrl,
    },
    {
      '@type': 'Organization',
      '@id': `${siteUrl}/#organization`,
      name: 'Hello World',
      url: pageUrl,
    },
    {
      '@type': 'WebPage',
      '@id': `${pageUrl}#webpage`,
      name: title,
      url: pageUrl,
      isPartOf: { '@id': `${siteUrl}/#website` },
      about: { '@id': `${siteUrl}/#organization` },
      datePublished: '2026-08-10',
      dateModified: '2026-08-10',
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={pageUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:image" content={`${siteUrl}/favicon.svg`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={`${siteUrl}/favicon.svg`} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <main className="relative overflow-hidden bg-background">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute bottom-0 left-[8%] top-0 w-px bg-border" />
          <div className="absolute bottom-0 right-[8%] top-0 w-px bg-border" />
          <div className="absolute left-0 right-0 top-[18%] h-px bg-border" />
        </div>

        <section className="relative mx-auto flex min-h-[calc(100vh-10rem)] max-w-[1440px] flex-col justify-between px-6 py-12 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
          <div className="flex items-center gap-3 text-[10px] font-medium tracking-[0.18em] text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-foreground" />
            <span>{home.hero.eyebrow}</span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
            className="max-w-6xl py-16 sm:py-24"
          >
            <h1 className="max-w-5xl text-[clamp(4.5rem,13vw,12rem)] font-normal leading-[0.82] tracking-[-0.075em] text-foreground">
              {home.hero.title}
            </h1>
            <div className="mt-10 grid max-w-xl grid-cols-1 gap-7 border-t border-border pt-6 sm:grid-cols-[1fr_auto] sm:items-end">
              <p className="max-w-xs text-base leading-relaxed text-muted-foreground">{home.hero.subtitle}</p>
              <button
                type="button"
                className="group inline-flex w-fit items-center gap-3 text-sm font-medium text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4"
              >
                <span>{home.hero.cta}</span>
                <span aria-hidden="true" className="inline-block transition-transform duration-200 group-hover:translate-x-1">→</span>
                <span aria-hidden="true" className="absolute mt-6 h-px w-0 bg-foreground transition-all duration-200 group-hover:w-[4.75rem]" />
              </button>
            </div>
          </motion.div>

          <div className="flex flex-col gap-4 border-t border-border pt-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-sm text-xs leading-relaxed text-muted-foreground">{home.hero.note}</p>
            <p className="text-[10px] font-medium tracking-[0.18em] text-muted-foreground">EST. 2026 / 00:00</p>
          </div>
        </section>
      </main>
    </>
  );
}
