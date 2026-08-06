import { useState } from 'react';
import { Helmet } from '@dr.pogodin/react-helmet';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { home } from 'virtual:content';

const siteUrl = 'https://hello-world.example';
const pageUrl = `${siteUrl}/`;
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
      name: 'Hello World — A warm welcome',
      url: pageUrl,
      isPartOf: { '@id': `${siteUrl}/#website` },
      about: { '@id': `${siteUrl}/#organization` },
      datePublished: '2026-08-05',
      dateModified: '2026-08-05',
    },
  ],
};

export default function HomePage() {
  const [hasSaidHello, setHasSaidHello] = useState(false);
  const reduceMotion = useReducedMotion();
  const headlineWords = home.hero.title.split(' ');

  return (
    <>
      <Helmet>
        <title>Hello World — A warm welcome</title>
        <meta name="description" content="A playful, warm hello world greeting experience." />
        <link rel="canonical" href={pageUrl} />
        <meta property="og:title" content="Hello World — A warm welcome" />
        <meta property="og:description" content="A playful, warm hello world greeting experience." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:image" content="/airo-assets/images/logo/hello-world-mark" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hello World — A warm welcome" />
        <meta name="twitter:description" content="A playful, warm hello world greeting experience." />
        <meta name="twitter:image" content="/airo-assets/images/logo/hello-world-mark" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <main className="relative isolate flex min-h-[100dvh] overflow-hidden bg-background px-5 py-5 text-foreground sm:px-8 sm:py-8 lg:px-12 lg:py-10">
        <motion.div
          aria-hidden="true"
          className="absolute -left-16 top-24 h-44 w-44 rounded-full bg-accent sm:-left-10 sm:h-64 sm:w-64"
          animate={reduceMotion ? undefined : { y: [0, -18, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          aria-hidden="true"
          className="absolute -right-20 top-12 h-52 w-52 rounded-full bg-secondary sm:-right-10 sm:h-80 sm:w-80"
          animate={reduceMotion ? undefined : { y: [0, 20, 0], rotate: [0, -6, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          aria-hidden="true"
          className="absolute bottom-8 right-[12%] h-20 w-20 rounded-t-full border-[14px] border-primary sm:bottom-14 sm:h-28 sm:w-28 sm:border-[18px]"
          animate={reduceMotion ? undefined : { y: [0, -12, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div aria-hidden="true" className="absolute bottom-12 left-[8%] grid grid-cols-4 gap-2 sm:bottom-20 sm:gap-3">
          {Array.from({ length: 12 }).map((_, index) => (
            <span key={index} className="h-2.5 w-2.5 rounded-full bg-primary sm:h-3 sm:w-3" />
          ))}
        </div>

        <div className="relative z-10 flex w-full flex-col">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-[1.25rem] bg-foreground shadow-[5px_5px_0_hsl(var(--primary))]">
                <img
                  src="/airo-assets/images/logo/primary/dark"
                  alt="Hello World"
                  width={48}
                  height={48}
                  className="h-auto max-h-8 w-auto max-w-full object-contain"
                />
              </div>
              <span className="font-heading text-lg font-bold tracking-tight">Hello World</span>
            </div>
            <div className="hidden items-center gap-2 rounded-full bg-card px-4 py-2 text-sm font-semibold text-muted-foreground shadow-sm sm:flex">
              <Sparkles className="h-4 w-4 text-primary" aria-hidden="true" />
              Made for a brighter day
            </div>
          </div>

          <section className="relative my-auto grid max-w-6xl grid-cols-1 items-center gap-10 py-14 sm:py-20 lg:grid-cols-[minmax(0,1.2fr)_minmax(250px,.8fr)] lg:gap-16" aria-labelledby="hello-heading">
            <div className="relative">
              <motion.p
                className="mb-4 max-w-xs rounded-full bg-card px-4 py-2 text-sm font-bold text-muted-foreground shadow-sm"
                initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
              >
                {home.hero.eyebrow}
              </motion.p>
              <div className="relative">
                <div aria-hidden="true" className="absolute -left-3 top-[12%] -z-10 h-44 w-44 rounded-full bg-secondary sm:-left-10 sm:h-64 sm:w-64" />
                <h1 id="hello-heading" className="font-heading text-[clamp(4.5rem,13vw,10.5rem)] font-extrabold leading-[0.78] tracking-[-0.07em] text-foreground">
                  {headlineWords.map((word, index) => (
                    <motion.span
                      key={word}
                      className="mr-[0.18em] inline-block last:mr-0"
                      initial={reduceMotion ? false : { opacity: 0, y: 42, rotate: index === 0 ? -4 : 4 }}
                      animate={{ opacity: 1, y: 0, rotate: 0 }}
                      transition={{ duration: 0.55, delay: 0.12 + index * 0.12, ease: 'backOut' }}
                    >
                      {word}
                    </motion.span>
                  ))}
                </h1>
                <svg aria-hidden="true" className="mt-3 h-8 w-[min(26rem,80%)] text-primary sm:mt-5 sm:h-10" viewBox="0 0 420 40" fill="none">
                  <motion.path
                    d="M8 26C72 8 129 34 196 20C267 5 325 25 412 12"
                    stroke="currentColor"
                    strokeWidth="9"
                    strokeLinecap="round"
                    initial={{ pathLength: reduceMotion ? 1 : 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.9, delay: 0.65, ease: 'easeOut' }}
                  />
                </svg>
              </div>
            </div>

            <motion.div
              className="relative max-w-sm rounded-[2rem] bg-card p-6 shadow-[10px_10px_0_hsl(var(--accent))] sm:p-8"
              initial={reduceMotion ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45, ease: 'easeOut' }}
            >
              <div aria-hidden="true" className="mb-6 flex gap-2">
                <span className="h-3 w-3 rounded-full bg-primary" />
                <span className="h-3 w-3 rounded-full bg-secondary" />
                <span className="h-3 w-3 rounded-full bg-accent" />
              </div>
              <p className="text-lg font-semibold leading-relaxed text-muted-foreground">{home.hero.description}</p>
              <button
                type="button"
                onClick={() => setHasSaidHello(true)}
                className="mt-7 inline-flex items-center gap-3 rounded-full bg-primary px-5 py-3.5 font-bold text-primary-foreground shadow-[4px_4px_0_hsl(var(--foreground))] transition-transform duration-200 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring active:translate-y-0"
              >
                <span>{home.hero.button}</span>
                <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
              </button>
              {hasSaidHello && (
                <motion.p
                  className="mt-5 rounded-2xl bg-muted px-4 py-3 font-semibold text-foreground"
                  initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                  role="status"
                >
                  {home.hero.response}
                </motion.p>
              )}
            </motion.div>
          </section>

          <div className="flex items-end justify-between gap-4 text-sm font-semibold text-muted-foreground">
            <span>A little hello from us AAB you</span>
            <span className="rounded-full border border-border bg-card px-3 py-1.5">Hello, AAB!</span>
          </div>
        </div>
      </main>
    </>
  );
}
