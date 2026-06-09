import { motion } from 'framer-motion'
import { hero } from '../data/siteContent'
import { icons } from './iconMap'

const { ArrowUpRight } = icons

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.18,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: 'easeOut' } },
}

const Hero = () => {
  return (
    <section className="relative flex min-h-screen overflow-hidden bg-navy-950 pt-24 text-white lg:pt-36">
      <video className="absolute inset-0 h-full w-full object-cover opacity-35" autoPlay muted loop playsInline>
        <source src={hero.video} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_68%_28%,rgba(38,126,164,0.32),transparent_34%),linear-gradient(112deg,rgba(4,12,24,0.98)_0%,rgba(7,18,32,0.84)_48%,rgba(11,22,35,0.72)_100%)]" />
      <motion.div
        aria-hidden="true"
        animate={{ opacity: [0.18, 0.55, 0.18], x: [0, 36, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute right-[-10%] top-1/4 h-px w-[56rem] rotate-[-20deg] bg-gradient-to-r from-transparent via-petroleum-200 to-transparent"
      />
      <motion.div
        aria-hidden="true"
        animate={{ opacity: [0.12, 0.42, 0.12], x: [0, -30, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-1/3 left-[-18%] h-px w-[48rem] rotate-[18deg] bg-gradient-to-r from-transparent via-gold-300 to-transparent"
      />

      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-6rem)] w-full max-w-7xl flex-1 items-center gap-12 px-5 pb-16 pt-10 sm:px-6 lg:min-h-[calc(100vh-9rem)] lg:grid-cols-[1.02fr_0.78fr] lg:pb-24 lg:pt-8">
        <motion.div variants={container} initial="hidden" animate="show" className="max-w-4xl">
          <motion.p variants={item} className="text-sm font-semibold uppercase tracking-[0.28em] text-gold-200">
            {hero.eyebrow}
          </motion.p>
          <motion.h1 variants={item} className="mt-5 max-w-5xl text-5xl font-semibold leading-[1.02] text-white sm:text-6xl lg:text-7xl">
            {hero.title}
          </motion.h1>
          <motion.p variants={item} className="mt-6 max-w-3xl text-lg leading-8 text-slate-200 sm:text-xl">
            {hero.subtitle}
          </motion.p>
          <motion.div variants={item} className="mt-9 flex flex-col gap-3 sm:flex-row">
            {hero.buttons.map((button) => (
              <a
                key={button.label}
                href={button.href}
                className={`inline-flex items-center justify-center gap-2 rounded-md px-6 py-3 text-sm font-semibold transition ${
                  button.variant === 'primary'
                    ? 'bg-gold-300 text-navy-950 shadow-xl shadow-gold-300/20 hover:bg-gold-200'
                    : 'border border-white/20 text-white hover:border-petroleum-200 hover:bg-white/8'
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
              variants={item}
              animate={{ y: index % 2 === 0 ? [0, -10, 0] : [0, 10, 0] }}
              transition={{ duration: 5 + index, repeat: Infinity, ease: 'easeInOut' }}
              className="rounded-lg border border-white/12 bg-white/[0.075] p-5 shadow-2xl shadow-black/20 backdrop-blur-md"
            >
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
