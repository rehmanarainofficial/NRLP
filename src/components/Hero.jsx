import { motion } from 'framer-motion'
import { hero } from '../data/siteContent'
import { icons } from './iconMap'

const { ArrowUpRight } = icons

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.16,
      delayChildren: 0.35,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 34, filter: 'blur(8px)' },
  show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] } },
}

const statItem = {
  hidden: { opacity: 0, y: 34, scale: 0.94 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.72, ease: [0.16, 1, 0.3, 1] } },
}

const Hero = () => {
  return (
    <section className="relative flex min-h-screen overflow-hidden bg-navy-950 pt-24 text-white lg:pt-36">
      <motion.video
        initial={{ opacity: 0, scale: 1.08 }}
        animate={{ opacity: 0.86, scale: 1 }}
        transition={{ duration: 1.45, ease: 'easeOut' }}
        className="absolute inset-0 h-full w-full object-cover saturate-125 contrast-110"
        autoPlay
        muted
        loop
        playsInline
        poster="/image_001.JPG"
      >
        <source src={hero.video} type="video/mp4" />
      </motion.video>
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 1.05, delay: 0.25, ease: 'easeOut' }}
        className="absolute inset-0 z-[1] bg-navy-950"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,10,19,0.9)_0%,rgba(5,15,27,0.78)_38%,rgba(6,17,31,0.34)_68%,rgba(6,17,31,0.54)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_74%_24%,rgba(84,179,210,0.24),transparent_36%),linear-gradient(180deg,rgba(6,17,31,0.08)_0%,rgba(6,17,31,0.18)_54%,rgba(6,17,31,0.88)_100%)]" />
      <motion.div
        aria-hidden="true"
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 1.15, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="absolute left-0 top-[6.8rem] z-10 h-px w-full origin-left bg-gradient-to-r from-transparent via-gold-300/70 to-transparent lg:top-[8.8rem]"
      />
      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: [0.12, 0.5, 0.12], x: [0, 36, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute right-[-10%] top-1/4 h-px w-[56rem] rotate-[-20deg] bg-gradient-to-r from-transparent via-petroleum-200 to-transparent"
      />
      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: [0.08, 0.36, 0.08], x: [0, -30, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-1/3 left-[-18%] h-px w-[48rem] rotate-[18deg] bg-gradient-to-r from-transparent via-gold-300 to-transparent"
      />

      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-6rem)] w-full max-w-7xl flex-1 items-center gap-12 px-5 pb-16 pt-10 sm:px-6 lg:min-h-[calc(100vh-9rem)] lg:grid-cols-[1.02fr_0.78fr] lg:pb-24 lg:pt-8">
        <motion.div variants={container} initial="hidden" animate="show" className="max-w-4xl">
          <motion.p variants={item} className="inline-flex items-center gap-3 border-l-2 border-gold-300 bg-white/[0.055] px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-gold-200 shadow-2xl shadow-black/20 backdrop-blur-md sm:text-sm">
            <span className="h-2 w-2 rounded-full bg-petroleum-200 shadow-[0_0_18px_rgba(143,215,244,0.8)]" />
            <span>{hero.eyebrow}</span>
          </motion.p>
          <motion.h1 variants={item} className="mt-6 max-w-5xl text-5xl font-semibold leading-[1.02] text-white drop-shadow-[0_14px_36px_rgba(0,0,0,0.66)] sm:text-6xl lg:text-7xl">
            {hero.title}
          </motion.h1>
          <motion.div variants={item} className="mt-6 h-1 w-40 bg-gradient-to-r from-gold-300 via-petroleum-200 to-transparent" />
          <motion.p variants={item} className="mt-6 max-w-3xl text-lg leading-8 text-slate-100 drop-shadow-[0_6px_20px_rgba(0,0,0,0.52)] sm:text-xl">
            {hero.subtitle}
          </motion.p>
          <motion.div variants={item} className="mt-9 flex flex-col gap-3 sm:flex-row">
            {hero.buttons.map((button) => (
              <a
                key={button.label}
                href={button.href}
                className={`inline-flex items-center justify-center gap-2 rounded-md px-6 py-3 text-sm font-semibold shadow-2xl transition duration-300 hover:-translate-y-1 ${
                  button.variant === 'primary'
                    ? 'bg-gold-300 text-navy-950 shadow-gold-300/22 hover:bg-gold-200'
                    : 'border border-white/20 bg-white/[0.045] text-white shadow-black/20 backdrop-blur-md hover:border-petroleum-200 hover:bg-white/10'
                }`}
              >
                {button.label}
                <ArrowUpRight size={17} />
              </a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div variants={container} initial="hidden" animate="show" className="grid gap-4 sm:grid-cols-2 lg:pt-24">
          {hero.stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={statItem}
              whileHover={{ y: -8, scale: 1.03 }}
              className="group relative overflow-hidden rounded-lg border border-white/14 bg-navy-950/46 p-5 shadow-2xl shadow-black/30 backdrop-blur-md"
            >
              <motion.span
                aria-hidden="true"
                animate={{ x: ['-120%', '140%'] }}
                transition={{ duration: 4.8 + index, repeat: Infinity, ease: 'easeInOut', delay: index * 0.35 }}
                className="absolute top-0 h-px w-2/3 bg-gradient-to-r from-transparent via-gold-300/80 to-transparent"
              />
              <p className="text-3xl font-bold text-gold-200">{stat.value}</p>
              <p className="mt-2 text-sm text-slate-200">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.div
        aria-hidden="true"
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 1.7, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-8 left-1/2 z-10 h-10 w-6 -translate-x-1/2 rounded-full border border-white/30 p-1"
      >
        <span className="block h-2 w-2 rounded-full bg-gold-200" />
      </motion.div>
    </section>
  )
}

export default Hero
