import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Section3D({ id, lang, titleEn, titleAr, descEn, descAr, scene }) {
  const isAr = lang === 'ar'
  return (
    <section id={id} className="relative overflow-hidden py-24 bg-[#070A0F] text-white">
      <div className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(600px_200px_at_20%_10%,#22d3ee,transparent),radial-gradient(600px_200px_at_80%_20%,#e879f9,transparent)]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center relative">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className={isAr ? 'lg:order-2' : ''}>
          <h2 className="text-2xl sm:text-4xl font-semibold leading-tight">
            {isAr ? titleAr : titleEn}
          </h2>
          <p className="mt-4 text-white/70 leading-relaxed">
            {isAr ? descAr : descEn}
          </p>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className={isAr ? 'lg:order-1' : ''}>
          <div className="aspect-[16/10] rounded-2xl border border-white/10 bg-white/5 overflow-hidden">
            <Spline scene={scene} style={{ width: '100%', height: '100%' }} />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
