import { Link } from 'react-router-dom'
import { Card, StatBox, Badge, ProgressBar, SectionTitle } from '../components/UI'

const activity = [
  { icon: '🍕', name: 'Student Union Pizza', when: 'Today, 12:34 PM', amount: '-$9.50', isSwipe: false },
  { icon: '🔄', name: 'Swipe — International Village', when: 'Today, 8:10 AM', amount: '-1 swipe', isSwipe: true },
  { icon: '🛒', name: 'Star Market Groceries', when: 'Yesterday, 5:45 PM', amount: '-$24.12', isSwipe: false },
  { icon: '☕', name: "Dunkin' — Dining Dollars", when: 'Yesterday, 9:00 AM', amount: '-$5.25', isSwipe: false },
  { icon: '🔄', name: 'Swipe — Stetson East', when: 'Mon, 6:30 PM', amount: '-1 swipe', isSwipe: true },
]

const quickActions = [
  { icon: '⭐', label: 'Is Food Good Today?', to: '/food-good', color: 'hover:border-amber-300 hover:bg-amber-50 hover:text-amber-700' },
  { icon: '💵', label: 'Log a Transaction', to: '/dining-dollars', color: 'hover:border-forest hover:bg-forest-muted hover:text-forest' },
  { icon: '🔄', label: 'Use a Swipe', to: '/swipes', color: 'hover:border-forest hover:bg-forest-muted hover:text-forest' },
  { icon: '🛒', label: 'Build Grocery List', to: '/dining-dollars', color: 'hover:border-forest hover:bg-forest-muted hover:text-forest' },
  { icon: '📊', label: 'View Spending Report', to: '/dining-dollars', color: 'hover:border-forest hover:bg-forest-muted hover:text-forest' },
  { icon: '⚙️', label: 'Update Preferences', to: '/login', color: 'hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700' },
]

export default function Dashboard() {
  return (
    <>
      {/* Welcome Banner */}
      <div className="relative bg-forest-deep overflow-hidden">
        <div className="absolute inset-0 bg-hero-mesh opacity-70" />
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-10">
          <div className="flex items-start justify-between flex-wrap gap-4">
            <div>
              <p className="text-green-300/70 text-xs font-semibold uppercase tracking-widest mb-1">Dashboard</p>
              <h1 className="font-display text-3xl md:text-4xl font-bold text-white mb-1">Good afternoon, Alex 👋</h1>
              <p className="text-white/50 text-sm">Here's how your dining plan is looking this week.</p>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl px-5 py-3 mt-1">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-white text-sm font-semibold">On Pace</span>
              <span className="text-white/50 text-xs">· 61 days left</span>
            </div>
          </div>

          {/* Stats in banner */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mt-8">
            {[
              { label: 'Dining Dollars Left', value: '$342', sub: 'of $600 starting balance' },
              { label: 'Swipes Left', value: '47', sub: 'of 80 total this semester' },
              { label: 'Spent This Week', value: '$38', sub: 'budget is $45/week' },
              { label: 'Daily Pace', value: '$5.60', sub: 'to hit $0 at finals' },
            ].map(({ label, value, sub }) => (
              <div key={label} className="glass-dark rounded-2xl px-5 py-4">
                <p className="text-white/40 text-[10px] uppercase tracking-widest font-bold mb-1">{label}</p>
                <p className="font-display text-2xl font-bold text-white">{value}</p>
                <p className="text-white/40 text-xs mt-0.5">{sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-8 space-y-6">

        {/* Main Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <Link to="/dining-dollars" className="group bg-white rounded-2xl p-7 border border-black/[0.04] shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 block">
            <div className="flex items-start justify-between mb-5">
              <div>
                <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center text-2xl mb-3">💵</div>
                <h2 className="font-display text-2xl text-charcoal">Dining Dollars</h2>
                <p className="text-gray-400 text-sm mt-1">Restaurants, groceries & on-campus</p>
              </div>
              <span className="text-gray-300 group-hover:text-forest group-hover:translate-x-1 transition-all text-xl">→</span>
            </div>
            <ProgressBar value={57} variant="orange" />
            <div className="flex justify-between items-center mt-3">
              <div>
                <p className="text-xs text-gray-400">Remaining</p>
                <p className="font-display text-3xl font-bold text-charcoal">$342</p>
              </div>
              <Badge variant="orange">57% used</Badge>
            </div>
          </Link>

          <Link to="/swipes" className="group bg-white rounded-2xl p-7 border border-black/[0.04] shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 block">
            <div className="flex items-start justify-between mb-5">
              <div>
                <div className="w-12 h-12 bg-forest-muted rounded-xl flex items-center justify-center text-2xl mb-3">🔄</div>
                <h2 className="font-display text-2xl text-charcoal">Swipes</h2>
                <p className="text-gray-400 text-sm mt-1">Dining halls & outtakes</p>
              </div>
              <span className="text-gray-300 group-hover:text-forest group-hover:translate-x-1 transition-all text-xl">→</span>
            </div>
            <ProgressBar value={41} variant="green" />
            <div className="flex justify-between items-center mt-3">
              <div>
                <p className="text-xs text-gray-400">Remaining</p>
                <p className="font-display text-3xl font-bold text-charcoal">47 left</p>
              </div>
              <Badge variant="green">On Track ✓</Badge>
            </div>
          </Link>
        </div>

        {/* Bottom Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          <Card className="lg:col-span-2">
            <SectionTitle>Recent Activity</SectionTitle>
            <ul>
              {activity.map(({ icon, name, when, amount, isSwipe }, i) => (
                <li key={i} className="flex items-center gap-4 py-3.5 border-b border-black/[0.04] last:border-0">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-base flex-shrink-0 ${isSwipe ? 'bg-forest-muted' : 'bg-parchment'}`}>
                    {icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-charcoal truncate">{name}</p>
                    <p className="text-xs text-gray-400 mt-0.5">{when}</p>
                  </div>
                  <span className="text-sm font-bold text-red-400 flex-shrink-0">{amount}</span>
                </li>
              ))}
            </ul>
          </Card>

          <div>
            <SectionTitle>Quick Actions</SectionTitle>
            <div className="space-y-2">
              {quickActions.map(({ icon, label, to, color }) => (
                <Link key={label} to={to}
                  className={`flex items-center gap-3 w-full px-4 py-3 bg-white border border-black/[0.06] rounded-xl text-sm font-medium text-charcoal transition-all ${color}`}
                >
                  <span className="text-base">{icon}</span> {label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
