export default function CTA({ lang }) {
  const t = {
    en: {
      title: 'Start with طاولة today',
      subtitle: 'Launch your QR menu and POS in minutes. No code. No hassle.',
      primary: 'Create your free account',
      secondary: 'Talk to sales',
    },
    ar: {
      title: 'ابدأ مع طاولة اليوم',
      subtitle: 'أطلق قائمة QR ونقطة البيع خلال دقائق. بدون تعقيد.',
      primary: 'أنشئ حسابًا مجانيًا',
      secondary: 'تحدث مع فريق المبيعات',
    },
  }[lang]

  return (
    <section className="relative py-24 bg-[#090D12] text-white">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(800px_200px_at_50%_0%,#06b6d4,transparent)]" />
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h3 className="text-3xl sm:text-4xl font-semibold tracking-tight">{t.title}</h3>
        <p className="mt-4 text-white/70">{t.subtitle}</p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a href="#" className="rounded-md bg-gradient-to-r from-cyan-500 to-fuchsia-500 px-5 py-3 text-sm font-medium shadow-lg shadow-cyan-500/20 hover:opacity-95 transition">{t.primary}</a>
          <a href="#contact" className="rounded-md border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium hover:bg-white/10 transition">{t.secondary}</a>
        </div>
      </div>
    </section>
  )
}
