import { useState } from 'react';

export default function LyricsSearch() {
  const [query, setQuery] = useState('');
  const [message, setMessage] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();
    if (!query.trim()) {
      setMessage('Digite o nome de uma música para testar a busca.');
      return;
    }
    const response = await fetch('/api/lyrics?q=' + encodeURIComponent(query.trim()));
    const result = await response.json();
    setMessage(result.message);
  }

  return (
    <section id="lyrics" className="card">
      <p className="eyebrow">Busca de letras</p>
      <h2 className="section-title">Encontre uma música</h2>
      <form className="flex flex-col gap-3 sm:flex-row" onSubmit={handleSubmit}>
        <label htmlFor="lyrics-query" className="sr-only">Nome da música</label>
        <input id="lyrics-query" className="min-w-0 flex-1 rounded-xl border border-rose-200 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-rose-300" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Digite o nome da música" />
        <button className="button-primary" type="submit">Buscar</button>
      </form>
      {message && <p className="mt-4 rounded-lg bg-amber-50 p-3 text-sm text-amber-900" role="status">{message}</p>}
      <p className="mt-3 text-xs text-slate-500">Placeholder: ainda falta escolher e conectar uma API de letras. A busca não retorna letras por enquanto.</p>
    </section>
  );
}
