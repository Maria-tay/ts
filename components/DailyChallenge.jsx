export default function DailyChallenge({ challenge }) {
  return (
    <section id="challenge" className="card animate-fadeIn text-center">
      <p className="eyebrow">Um pequeno desafio para hoje</p>
      <h2 className="section-title">Desafio do dia</h2>
      {challenge
        ? <p className="text-lg text-slate-700">{challenge}</p>
        : <p className="text-slate-600">Ainda não há desafios disponíveis. Configure o Contentful para carregar o desafio diário.</p>}
    </section>
  );
}
