import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Section3D from './components/Section3D'
import CTA from './components/CTA'

function App() {
  const [lang, setLang] = useState('ar')

  // Replace problematic Spline scenes with safe fallbacks when blocked (403)
  const scenes = {
    features: 'https://prod.spline.design/2ICtoTPGd2h4u2y8/scene.splinecode',
    pos: 'https://prod.spline.design/2ICtoTPGd2h4u2y8/scene.splinecode', // fallback to a known-good scene
    pricing: 'https://prod.spline.design/2ICtoTPGd2h4u2y8/scene.splinecode', // fallback to a known-good scene
  }

  return (
    <div className="min-h-screen bg-black">
      <Navbar lang={lang} setLang={setLang} />
      <main className="pt-16">
        <Hero lang={lang} />
        <Section3D
          id="features"
          lang={lang}
          titleEn="Design and publish menus in seconds"
          titleAr="صمّم وانشر القوائم خلال ثوانٍ"
          descEn="Rich categories, modifiers, sizes, and images. Generate QR codes per table, track scans and orders, and sync in real-time across devices."
          descAr="تصنيفات غنية وخيارات إضافية وأحجام وصور. أنشئ رموز QR لكل طاولة، وتعقّب المسح والطلبات، وتزامن فوري عبر الأجهزة."
          scene={scenes.features}
        />
        <Section3D
          lang={lang}
          titleEn="POS that just flows"
          titleAr="نقطة بيع تنساب بسلاسة"
          descEn="Fast ordering, split bills, discounts, and receipts. Kitchen display ready with clear ticketing and timers."
          descAr="طلب سريع، تقسيم الفواتير، خصومات وإيصالات. شاشة المطبخ جاهزة بتذاكر واضحة ومؤقتات."
          scene={scenes.pos}
        />
        <Section3D
          id="pricing"
          lang={lang}
          titleEn="Simple pricing for every stage"
          titleAr="أسعار بسيطة لكل مرحلة"
          descEn="Start free. Upgrade as you grow. No hidden fees. Cancel anytime."
          descAr="ابدأ مجانًا. طوّر خطتك مع نموّك. بدون رسوم مخفية. إلغاء في أي وقت."
          scene={scenes.pricing}
        />
        <CTA lang={lang} />
        <footer id="contact" className="py-10 text-center text-white/50 bg-[#070A0F]">
          © {new Date().getFullYear()} طاولة • Tawala
        </footer>
      </main>
    </div>
  )
}

export default App
