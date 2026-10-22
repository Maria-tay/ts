import Head from 'next/head';
import DailyChallenge from '../components/DailyChallenge';
import FanGallery from '../components/FanGallery';
import Footer from '../components/Footer';
import Header from '../components/Header';
import LyricsSearch from '../components/LyricsSearch';
import RandomQuote from '../components/RandomQuote';
import { fetchChallenges } from '../lib/contentful';

export default function Home({ challenge, authConfigured }) {
  return (
    <>
      <Head>
        <title>TS Fan Central</title>
        <meta name="description" content="Um cantinho para fãs da Taylor Swift: desafio diário, frases e galeria." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header authConfigured={authConfigured} />
      <main id="home" className="mx-auto max-w-5xl space-y-8 px-4 pb-8 pt-28 sm:pt-32">
        <section className="rounded-3xl bg-gradient-to-br from-rose-100 via-pink-50 to-violet-100 px-6 py-12 text-center shadow-sm sm:px-12">
          <p className="eyebrow">Bem-vinda ao fã-clube</p>
          <h1 className="font-cursive text-5xl text-rose-900 sm:text-7xl">TS Fan Central</h1>
          <p className="mx-auto mt-4 max-w-xl text-slate-700">Um espaço para celebrar música, criatividade e a comunidade Swiftie.</p>
        </section>
        <DailyChallenge challenge={challenge} />
        <RandomQuote />
        <LyricsSearch />
        <FanGallery />
      </main>
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  let challenges = [];
  try {
    challenges = await fetchChallenges();
  } catch (error) {
    // Keep the site buildable when Contentful is not configured or is temporarily unavailable.
    console.warn('Não foi possível carregar desafios do Contentful:', error.message);
  }

  const dayNumber = Math.floor(Date.now() / 86_400_000);
  const challenge = challenges.length ? challenges[dayNumber % challenges.length] : null;

  const authConfigured = Boolean(process.env.GITHUB_ID && process.env.GITHUB_SECRET);
  return { props: { challenge, authConfigured }, revalidate: 86_400 };
}
