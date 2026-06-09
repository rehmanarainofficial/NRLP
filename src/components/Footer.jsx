import logo from '../assets/logo.png'
import { companyIdentity, footer } from '../data/siteContent'

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-charcoal-950 px-5 py-14 text-slate-300 sm:px-6">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_1.6fr]">
        <div>
          <div className="flex items-start gap-4">
            <img src={logo} alt="National Refinery Limited logo" className="h-14 w-14 rounded-md object-contain" />
            <div>
              <h2 className="text-lg font-semibold text-white">{companyIdentity.name}</h2>
              <p className="mt-1 text-xs leading-5 text-slate-400">{companyIdentity.registration}</p>
              <p className="text-xs leading-5 text-slate-400">{companyIdentity.ntn}</p>
            </div>
          </div>
          <p className="mt-5 max-w-md text-sm leading-7">{footer.summary}</p>
          <address className="mt-6 max-w-md space-y-3 text-sm not-italic leading-7 text-slate-300">
            <p>{footer.contact.address}</p>
            <p>UAN: {footer.contact.uan}</p>
            <p>{footer.contact.phones.join(', ')}</p>
            <p>Fax: {footer.contact.fax}</p>
            <p>
              E-mail:{' '}
              <a href={`mailto:${footer.contact.email}`} className="text-gold-200 transition hover:text-white">
                {footer.contact.email}
              </a>
            </p>
          </address>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {footer.columns.map((column) => (
            <div key={column.title}>
              <h3 className="font-semibold text-white">{column.title}</h3>
              <ul className="mt-4 space-y-3">
                {column.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm transition hover:text-gold-200">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-3 border-t border-white/10 pt-6 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
        <p>Copyright 2026 National Refinery Limited. All rights reserved.</p>
        <p>Corporate energy, refining, and investor information portal.</p>
      </div>
    </footer>
  )
}

export default Footer
