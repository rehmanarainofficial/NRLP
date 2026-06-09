import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import logo from '../assets/logo.png'
import { companyIdentity, navigation, topLinks } from '../data/siteContent'
import { icons } from './iconMap'

const { ArrowUpRight, ChevronDown, Menu, X } = icons

const itemLabel = (item) => (typeof item === 'string' ? item : item.label)
const itemChildren = (item) => (typeof item === 'string' ? [] : item.children || [])

const DesktopMenuItem = ({ item, alignRight = false }) => {
  const children = itemChildren(item)
  const hasChildren = children.length > 0

  return (
    <div className="group relative shrink-0">
      <a href="#" className="flex items-center gap-1 whitespace-nowrap py-2.5 text-sm font-medium text-slate-100 transition hover:text-gold-200">
        {itemLabel(item)}
        {hasChildren ? <ChevronDown size={15} /> : null}
      </a>
      {hasChildren ? (
        <div
          className={`invisible absolute top-full z-50 min-w-64 translate-y-3 rounded-lg border border-white/10 bg-navy-950/95 p-2 opacity-0 shadow-2xl shadow-black/35 backdrop-blur-xl transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 ${
            alignRight ? 'right-0' : 'left-0'
          }`}
        >
          {children.map((child) => (
            <DesktopSubItem key={itemLabel(child)} item={child} alignRight={alignRight} />
          ))}
        </div>
      ) : null}
    </div>
  )
}

const DesktopSubItem = ({ item, alignRight = false }) => {
  const children = itemChildren(item)
  const hasChildren = children.length > 0

  return (
    <div className="group/sub relative">
      <a href="#" className="flex items-center justify-between gap-4 whitespace-nowrap rounded-md px-3 py-2.5 text-sm text-slate-200 transition hover:bg-white/8 hover:text-white">
        {itemLabel(item)}
        {hasChildren ? <ChevronDown size={14} className="-rotate-90" /> : null}
      </a>
      {hasChildren ? (
        <div
          className={`invisible absolute top-0 z-50 min-w-72 rounded-lg border border-white/10 bg-charcoal-950/95 p-2 opacity-0 shadow-2xl shadow-black/30 backdrop-blur-xl transition-all duration-200 group-hover/sub:visible group-hover/sub:translate-x-0 group-hover/sub:opacity-100 ${
            alignRight ? 'right-full mr-2 -translate-x-2' : 'left-full ml-2 translate-x-2'
          }`}
        >
          {children.map((child) => (
            <DesktopSubItem key={itemLabel(child)} item={child} alignRight={alignRight} />
          ))}
        </div>
      ) : null}
    </div>
  )
}

const MobileAccordion = ({ item, level = 0 }) => {
  const [open, setOpen] = useState(false)
  const children = itemChildren(item)
  const hasChildren = children.length > 0

  return (
    <div className={level === 0 ? 'border-b border-white/10' : ''}>
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="flex w-full items-center justify-between py-3 text-left text-sm font-medium text-white"
      >
        <span className={level > 0 ? 'text-slate-300' : ''}>{itemLabel(item)}</span>
        {hasChildren ? <ChevronDown size={16} className={`transition ${open ? 'rotate-180' : ''}`} /> : <ArrowUpRight size={15} />}
      </button>
      <AnimatePresence initial={false}>
        {open && hasChildren ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden pl-4"
          >
            {children.map((child) => (
              <MobileAccordion key={itemLabel(child)} item={child} level={level + 1} />
            ))}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  )
}

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled || mobileOpen ? 'bg-navy-950/95 shadow-2xl shadow-black/25 backdrop-blur-xl' : 'bg-transparent'}`}>
      <div className="hidden border-b border-white/10 lg:block">
        <div className="mx-auto flex max-w-[1920px] items-center justify-end gap-6 px-6 py-2">
          {topLinks.map((link) => (
            <a key={link} href="#" className="whitespace-nowrap text-xs font-medium text-slate-300 transition hover:text-gold-200">
              {link}
            </a>
          ))}
        </div>
      </div>
      <nav className="mx-auto flex max-w-[1920px] items-start justify-between gap-6 px-5 py-4 lg:px-6 xl:items-center">
        <a href="#" className="flex shrink-0 items-center gap-3">
          <img src={logo} alt="National Refinery Limited logo" className="h-12 w-12 rounded-md object-contain shadow-lg shadow-gold-300/20" />
          <span className="hidden shrink-0 leading-tight sm:block">
            <span className="block whitespace-nowrap text-sm font-semibold uppercase tracking-[0.14em] text-white">{companyIdentity.name}</span>
            <span className="mt-1 block whitespace-nowrap text-[10px] font-medium uppercase tracking-[0.05em] text-slate-300">
              {companyIdentity.registration}
            </span>
            <span className="block whitespace-nowrap text-[10px] font-medium uppercase tracking-[0.05em] text-slate-300">
              {companyIdentity.ntn}
            </span>
          </span>
        </a>
        <div className="hidden min-w-0 flex-1 flex-wrap items-center justify-end gap-x-6 gap-y-1 xl:flex">
          {navigation.map((item, index) => (
            <DesktopMenuItem key={item.label} item={item} alignRight={index >= navigation.length - 4} />
          ))}
        </div>
        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setMobileOpen((value) => !value)}
          className="grid h-11 w-11 place-items-center rounded-md border border-white/15 text-white transition hover:border-gold-200 hover:text-gold-200 xl:hidden"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>
      <AnimatePresence>
        {mobileOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="max-h-[calc(100vh-78px)] overflow-y-auto border-t border-white/10 bg-navy-950 px-5 pb-8 xl:hidden"
          >
            <div className="grid grid-cols-2 gap-2 border-b border-white/10 py-4">
              {topLinks.map((link) => (
                <a key={link} href="#" className="rounded-md bg-white/6 px-3 py-2 text-xs font-medium text-slate-200">
                  {link}
                </a>
              ))}
            </div>
            {navigation.map((item) => (
              <MobileAccordion key={item.label} item={item} />
            ))}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}

export default Navbar
