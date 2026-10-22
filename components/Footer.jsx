export default function Footer() {
  return (
    <footer className="mt-12 border-t border-rose-100 bg-white/80 py-6 text-center text-sm text-slate-600">
      <p>© {new Date().getFullYear()} TS Fan Hub</p>
      <p className="mt-1">Feito por Maria Peres <span aria-hidden="true">♥</span></p>
    </footer>
  );
}
