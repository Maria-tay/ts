export default function FanGallery() {
  return (
    <section id="gallery" className="card text-center">
      <p className="eyebrow">Espaço dos fãs</p>
      <h2 className="section-title">Galeria do fandom</h2>
      <div className="rounded-2xl border-2 border-dashed border-rose-200 bg-rose-50/60 p-8">
        <p className="text-3xl" aria-hidden="true">📸</p>
        <p className="mt-2 font-medium text-slate-700">A galeria está pronta para receber imagens.</p>
        <p className="mt-1 text-sm text-slate-600">O arquivo original não trouxe fotos nem uma fonte de imagens. Adicione imagens autorizadas em <code>public/gallery</code> e conecte-as aqui.</p>
      </div>
    </section>
  );
}
