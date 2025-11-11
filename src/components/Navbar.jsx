import { useEffect } from 'react'
import { Globe2, Languages } from 'lucide-react'

export default function Navbar({ lang, setLang }) {
  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'
    document.documentElement.lang = lang
  }, [lang])

  const t = {
    en: {
      name: 'Tawala',
      tagline: 'QR Menus & Smart POS',
      features: 'Features',
      pricing: 'Pricing',
      contact: 'Contact',
      lang: 'العربية',
    },
    ar: {
      name: 'طاولة',
      tagline: 'قوائم QR ونقاط بيع ذكية',
      features: 'المزايا',
      pricing: 'الأسعار',
      contact: 'تواصل',
      lang: 'English',
    },
  }[lang]

  return (
    <header className="fixed inset-x-0 top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/30 bg-black/40 border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-cyan-400 to-fuchsia-500 shadow-lg shadow-cyan-500/20 grid place-items-center">
              <Globe2 className="w-5 h-5 text-white" />
            </div>
            <div className="leading-tight">
              <div className="text-white font-semibold tracking-wide">{t.name}</div>
              <div className="text-xs text-white/60">{t.tagline}</div>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm">
            <a href="#features" className="text-white/70 hover:text-white transition">{t.features}</a>
            <a href="#pricing" className="text-white/70 hover:text-white transition">{t.pricing}</a>
            <a href="#contact" className="text-white/70 hover:text-white transition">{t.contact}</a>
          </div>

          <button onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')} className="inline-flex items-center gap-2 rounded-md border border-white/10 px-3 py-2 text-xs font-medium text-white/90 hover:bg-white/10 transition">
            <Languages className="w-4 h-4" /> {t.lang}
          </button>
        </div>
      </nav>
    </header>
  )
}
