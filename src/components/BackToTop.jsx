import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { icons } from './iconMap'

const { ArrowUp } = icons

const BackToTop = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 520)

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible ? (
        <motion.a
          href="#top"
          aria-label="Back to top"
          initial={{ opacity: 0, y: 22, scale: 0.86 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 18, scale: 0.9 }}
          whileHover={{ y: -5, scale: 1.06 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.28, ease: 'easeOut' }}
          className="fixed bottom-6 right-5 z-[60] grid h-14 w-14 place-items-center rounded-full border border-gold-200/55 bg-gold-300 text-navy-950 shadow-2xl shadow-gold-300/25 ring-8 ring-gold-300/10 transition hover:bg-gold-200 sm:bottom-8 sm:right-8"
        >
          <motion.span
            animate={{ y: [3, -4, 3] }}
            transition={{ duration: 1.35, repeat: Infinity, ease: 'easeInOut' }}
            className="grid place-items-center"
          >
            <ArrowUp size={23} strokeWidth={2.4} />
          </motion.span>
          <span className="absolute inset-0 rounded-full border border-gold-200/45 animate-ping" />
        </motion.a>
      ) : null}
    </AnimatePresence>
  )
}

export default BackToTop
