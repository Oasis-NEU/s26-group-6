import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home' },
  { to: '/dashboard', label: 'Dashboard' },
  { to: '/dining-dollars', label: 'Dining $' },
  { to: '/swipes', label: 'Swipes' },
  { to: '/food-good', label: 'Is Food Good?' },
]

export default function Nav() {
  return (
    <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-forest/8">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <NavLink to="/" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 bg-forest rounded-lg flex items-center justify-center text-sm shadow-sm group-hover:bg-forest-light transition-colors">🥦</div>
          <span className="font-display text-xl font-bold text-forest tracking-tight">NomNom</span>
        </NavLink>

        <ul className="hidden md:flex items-center gap-0.5">
          {links.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `px-3.5 py-2 rounded-lg text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-forest text-white shadow-sm'
                      : 'text-gray-500 hover:text-forest hover:bg-forest-muted'
                  }`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
          <li className="ml-2">
            <NavLink
              to="/login"
              className="px-4 py-2 bg-ember text-white rounded-lg text-sm font-semibold hover:bg-ember-deep transition-all shadow-sm"
            >
              Sign In
            </NavLink>
          </li>
        </ul>

        <button className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg hover:bg-forest-muted transition-colors text-forest">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M2 4h14M2 9h14M2 14h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
          </svg>
        </button>
      </div>
    </nav>
  )
}
