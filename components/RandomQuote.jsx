import { useState } from 'react';

// The source file supplied one quote. Keep it attributed as an example and do not invent more Taylor Swift quotes.
const SAMPLE_QUOTES = [
  { text: "We don't need to share the same opinions as others, but we need to be respectful.", source: 'Frase fornecida no arquivo original' },
];

export default function RandomQuote() {
  const [quote, setQuote] = useState(SAMPLE_QUOTES[0]);
  const [index, setIndex] = useState(0);

  function nextQuote() {
    const nextIndex = (index + 1) % SAMPLE_QUOTES.length;
    setIndex(nextIndex);
    setQuote(SAMPLE_QUOTES[nextIndex]);
  }

  return (
    <section id="quotes" className="card text-center">
      <p className="eyebrow">Uma frase para guardar</p>
      <h2 className="section-title">Frase aleatória</h2>
      <blockquote className="mx-auto max-w-2xl text-xl italic leading-relaxed text-slate-700">“{quote.text}”</blockquote>
      <p className="mt-3 text-sm text-slate-500">{quote.source}</p>
      <button className="button-primary mt-5" onClick={nextQuote}>Sortear frase</button>
      {SAMPLE_QUOTES.length === 1 && <p className="mt-3 text-xs text-slate-500">A lista tem só uma frase no material recebido; acrescente outras em <code>components/RandomQuote.jsx</code>.</p>}
    </section>
  );
}
