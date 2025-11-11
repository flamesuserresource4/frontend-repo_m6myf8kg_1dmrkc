import { motion } from 'framer-motion'
import SafeSpline from './SafeSpline'

export default function Hero({ lang }) {
  const t = {
    en: {
      titleA: 'Next‑gen QR menus',
      titleB: 'and POS for restaurants',
      subtitle: 'Build, manage, and serve interactive menus with one tap. Print a QR, get orders, route to the kitchen, and track sales — all in minutes.',
      ctaPrimary: 'Get Started',
      ctaSecondary: 'See Live Demo',
      badges: ['Unlimited tables', 'Kitchen view', 'Printer ready'],
    },
    ar: {
      titleA: 'قوائم QR من الجيل القادم',
      titleB: 'ونقطة بيع للمطاعم',
      subtitle: 'أنشئ وادِر وقدّم قوائم تفاعلية بلمسة واحدة. اطبع QR، استقبل الطلبات، أرسلها للمطبخ وتابع المبيعات — خلال دقائق.',
      ctaPrimary: 'ابدأ الآن',
      ctaSecondary: 'شاهد العرض الحي',
      badges: ['طاولات غير محدودة', 'واجهة المطبخ', 'جاهزة للطباعة'],
    },
  }[lang]

  return (
    <section className="relative min-h-[92vh] overflow-hidden bg-[#0B0F14] text-white">
      <div className="absolute inset-0">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,rgba(14,165,233,0.15),transparent_40%),radial-gradient(circle_at_90%_30%,rgba(236,72,153,0.12),transparent_35%),radial-gradient(circle_at_50%_80%,rgba(34,197,94,0.10),transparent_30%)]" />
      </div>

      <div className="absolute inset-0">
        <SafeSpline scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
            {lang === 'ar' ? 'جاهز للإطلاق' : 'Ready to launch'}
          </div>

          <h1 className="mt-6 text-4xl sm:text-6xl font-semibold leading-tight tracking-tight">
            <span className="block bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">{t.titleA}</span>
            <span className="block text-white/90">{t.titleB}</span>
          </h1>

          <p className="mt-6 text-white/70 text-lg leading-relaxed">{t.subtitle}</p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#pricing" className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-cyan-500 to-fuchsia-500 px-5 py-3 text-sm font-medium shadow-lg shadow-cyan-500/20 hover:opacity-95 transition">
              {t.ctaPrimary}
            </a>
            <a href="#features" className="inline-flex items-center justify-center rounded-md border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium hover:bg-white/10 transition">
              {t.ctaSecondary}
            </a>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3 text-xs text-white/70">
            {t.badges.map((b, i) => (
              <span key={i} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1">
                <span className="h-1.5 w-1.5 rounded-full bg-white/60" /> {b}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute inset-0 z-0 [mask-image:radial-gradient(80%_50%_at_50%_10%,black,transparent)]">
        <div className="absolute -top-40 -right-40 h-[520px] w-[520px] rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-[520px] w-[520px] rounded-full bg-fuchsia-500/20 blur-3xl" />
      </div>
    </section>
  )
}
