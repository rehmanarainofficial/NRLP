import { useEffect } from 'react'
import Lenis from 'lenis'

const SmoothScroll = ({ children }) => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.72,
      easing: (t) => 1 - Math.pow(1 - t, 4),
      smoothWheel: true,
      wheelMultiplier: 1.22,
      touchMultiplier: 1.42,
    })

    let frameId
    const raf = (time) => {
      lenis.raf(time)
      frameId = requestAnimationFrame(raf)
    }

    frameId = requestAnimationFrame(raf)

    const onClick = (event) => {
      if (!(event.target instanceof Element)) {
        return
      }

      const link = event.target.closest('a[href^="#"]')

      if (!link) {
        return
      }

      const href = link.getAttribute('href')

      if (!href || href === '#') {
        return
      }

      const target = document.querySelector(href)

      if (target) {
        event.preventDefault()
        lenis.scrollTo(target, { offset: -88 })
      }
    }

    document.addEventListener('click', onClick)

    return () => {
      cancelAnimationFrame(frameId)
      document.removeEventListener('click', onClick)
      lenis.destroy()
    }
  }, [])

  return children
}

export default SmoothScroll
