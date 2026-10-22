import Link from 'next/link';
import { signIn, signOut, useSession } from 'next-auth/react';
import { useState } from 'react';

const links = [
  ['Início', '#home'],
  ['Desafio', '#challenge'],
  ['Frase', '#quotes'],
  ['Letras', '#lyrics'],
  ['Galeria', '#gallery'],
];

export default function Header({ authConfigured }) {
  const { data: session, status } = useSession();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-20 border-b border-rose-100 bg-white/95 shadow-sm backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Link href="#home" className="font-cursive text-2xl text-rose-800" onClick={() => setOpen(false)}>
          ✨ TS Fan Central
        </Link>
        <nav className="hidden items-center gap-5 md:flex" aria-label="Navegação principal">
          {links.map(([label, href]) => <a key={href} href={href} className="text-sm hover:text-rose-700">{label}</a>)}
        </nav>
        <div className="flex items-center gap-3">
          {status !== 'loading' && (session
            ? <button className="button-secondary" onClick={() => signOut()}>Sair</button>
            : authConfigured
              ? <button className="button-secondary" onClick={() => signIn('github')}>Entrar com GitHub</button>
              : <button className="button-secondary cursor-not-allowed opacity-60" type="button" disabled title="Configure o OAuth do GitHub em .env.local">GitHub não configurado</button>)}
          <button
            type="button"
            className="rounded-lg border border-rose-200 px-3 py-2 md:hidden"
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            {open ? '✕' : '☰'}
          </button>
        </div>
      </div>
      {open && <nav className="grid gap-1 border-t border-rose-100 bg-rose-50 px-4 py-3 md:hidden" aria-label="Navegação móvel">
        {links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)} className="rounded px-2 py-2 hover:bg-white">{label}</a>)}
      </nav>}
    </header>
  );
}
