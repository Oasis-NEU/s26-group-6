import { useState } from 'react'
import { Card, StatBox, SectionTitle, ProgressBar, Btn, AlertBox } from '../components/UI'

const CATEGORIES = [
  { icon: '🍽️', name: 'Restaurants', amount: 128.5, pct: 50, variant: 'green' },
  { icon: '🛒', name: 'Grocery', amount: 90.25, pct: 35, variant: 'orange' },
  { icon: '🥡', name: 'Outtakes', amount: 39.25, pct: 15, variant: 'green' },
]

const WEEKS = [
  { label: 'Wk 1', amount: 18, pct: 40 },
  { label: 'Wk 2', amount: 32, pct: 71 },
  { label: 'Wk 3', amount: 26, pct: 58 },
  { label: 'Now', amount: 38, pct: 84, current: true },
]

export default function DiningDollars() {
  const [form, setForm] = useState({ amount: '', category: 'Restaurants', location: '', date: '' })
  const set = (k, v) => setForm(f => ({ ...f, [k]: v }))
  const inputCls = "w-full px-4 py-2.5 border border-black/[0.08] rounded-xl text-sm outline-none focus:border-forest focus:ring-2 focus:ring-forest/10 transition-all bg-white"

  return (
    <>
      {/* Page Header */}
      <div className="relative bg-forest-deep overflow-hidden">
        <div className="absolute inset-0 bg-hero-mesh opacity-70" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-10">
          <p className="text-green-300/70 text-xs font-semibold uppercase tracking-widest mb-1">Finances</p>
          <h1 className="font-display text-3xl md:text-4xl font-bold text-white mb-1">💵 Dining Dollars</h1>
          <p className="text-white/50 text-sm">Track your balance, categorize spending, and stay on budget all semester.</p>

          {/* Balance hero */}
          <div className="mt-8 glass-dark rounded-2xl p-6 inline-block min-w-[300px]">
            <p className="text-white/50 text-xs uppercase tracking-widest font-bold mb-1">Current Balance</p>
            <p className="font-display text-5xl font-bold text-white mb-2">$342.00</p>
            <div className="bg-white/20 rounded-full h-2 mb-2 w-64 max-w-full">
              <div className="bg-green-300 h-full rounded-full w-[43%] transition-all" />
            </div>
            <p className="text-white/40 text-xs">43% remaining · $600 starting balance</p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-8 space-y-6">
        <AlertBox icon="⚠️" title="Spending a bit fast this week" body="You've spent $38 of your $45 weekly budget with 3 days left. Consider using dining hall swipes for the rest of the week." variant="orange" />

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <StatBox label="Balance Left" value="$342" sub="started with $600" />
          <StatBox label="Spent Total" value="$258" sub="since Aug 28" />
          <StatBox label="Daily Budget" value="$5.61" sub="to last 61 more days" />
          <StatBox label="Avg. Per Day" value="$4.24" sub="actual spending rate" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          <div className="lg:col-span-2 space-y-5">
            {/* Category breakdown */}
            <Card>
              <SectionTitle>Spending by Category</SectionTitle>
              <ul className="space-y-5">
                {CATEGORIES.map(({ icon, name, amount, pct, variant }) => (
                  <li key={name}>
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 bg-parchment rounded-xl flex items-center justify-center text-base">{icon}</div>
                        <span className="font-medium text-sm text-charcoal">{name}</span>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-sm">${amount.toFixed(2)}</p>
                        <p className="text-xs text-gray-400">{pct}%</p>
                      </div>
                    </div>
                    <ProgressBar value={pct} variant={variant} />
                  </li>
                ))}
              </ul>
            </Card>

            {/* Bar chart */}
            <Card>
              <SectionTitle sub="Budget is $45/week — darker bar is current week">Spending This Month</SectionTitle>
              <div className="flex items-end gap-3 h-32 mb-3">
                {WEEKS.map(({ label, amount, pct, current }) => (
                  <div key={label} className="flex-1 flex flex-col items-center gap-1.5">
                    <span className="text-xs font-bold text-charcoal">${amount}</span>
                    <div className={`w-full rounded-t-xl transition-all relative overflow-hidden ${current ? 'bg-forest' : 'bg-forest-muted'}`}
                      style={{ height: `${pct * 0.9}px` }}>
                      {current && <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/20 to-transparent" />}
                    </div>
                    <span className="text-[10px] text-gray-400 font-medium">{label}</span>
                  </div>
                ))}
              </div>
              {/* Budget line indicator */}
              <div className="flex items-center gap-2 text-xs text-gray-400">
                <div className="w-4 h-px bg-ember border-dashed border-t border-ember" />
                Weekly budget limit ($45)
              </div>
            </Card>
          </div>

          {/* Right column */}
          <div className="space-y-5">
            <Card>
              <SectionTitle>Log a Transaction</SectionTitle>
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-charcoal/60 uppercase tracking-wider mb-1.5">Amount</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">$</span>
                    <input type="number" placeholder="0.00" step="0.01" value={form.amount}
                      onChange={e => set('amount', e.target.value)}
                      className={inputCls + " pl-8"} />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-charcoal/60 uppercase tracking-wider mb-1.5">Category</label>
                  <select value={form.category} onChange={e => set('category', e.target.value)} className={inputCls}>
                    <option>Restaurants</option><option>Grocery</option>
                    <option>Outtakes</option><option>Dining Hall</option><option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-charcoal/60 uppercase tracking-wider mb-1.5">Location</label>
                  <input type="text" placeholder="e.g. Student Union Starbucks" value={form.location}
                    onChange={e => set('location', e.target.value)} className={inputCls} />
                </div>
                <div>
                  <label className="block text-xs font-bold text-charcoal/60 uppercase tracking-wider mb-1.5">Date</label>
                  <input type="date" value={form.date} onChange={e => set('date', e.target.value)} className={inputCls} />
                </div>
                <Btn variant="primary" className="w-full">Log Transaction</Btn>
              </div>
            </Card>

            <Card>
              <SectionTitle>💡 Money Tips</SectionTitle>
              <div className="space-y-3">
                {[
                  { bg: 'bg-forest-muted', tc: 'text-forest', title: 'Use swipes when possible', body: 'Dining hall swipes are often better value than spending Dining Dollars on the same meal.' },
                  { bg: 'bg-ember-light', tc: 'text-ember', title: 'Grocery hauls save money', body: 'Batch grocery shopping 1–2x/week stretches your balance much further.' },
                ].map(({ bg, tc, title, body }) => (
                  <div key={title} className={`${bg} rounded-xl p-4`}>
                    <p className={`font-semibold text-xs ${tc} mb-1`}>{title}</p>
                    <p className="text-xs text-gray-500 leading-relaxed">{body}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </>
  )
}
