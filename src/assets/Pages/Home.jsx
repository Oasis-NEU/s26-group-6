import { Link } from 'react-router-dom'

const features = [
  { icon: '💰', title: 'Dining Dollars Tracker', desc: 'See exactly where your money is going across restaurants, groceries, and on-campus spots.', iconBg: 'bg-forest-muted' },
  { icon: '🔄', title: 'Swipe Manager', desc: 'Track weekly swipes, dining hall visits, and outtakes. Never waste a swipe again.', iconBg: 'bg-ember-light' },
  { icon: '⭐', title: 'Is Food Good?', desc: "Personalized meal suggestions based on your diet preferences and today's live menus.", iconBg: 'bg-forest-muted' },
  { icon: '📊', title: 'Pace Tracker', desc: "Know instantly if you're on track to make it to the end of the semester.", iconBg: 'bg-ember-light' },
  { icon: '🛒', title: 'Grocery Planner', desc: 'Build optimized grocery lists that stretch every dining dollar further.', iconBg: 'bg-forest-muted' },
  { icon: '🔔', title: 'Smart Alerts', desc: 'Proactive notifications before you overspend or waste balance at semester end.', iconBg: 'bg-ember-light' },
]

const stats = [
  { num: '$2,400', label: 'avg. annual plan value' },
  { num: '30%', label: 'of students waste balance' },
  { num: '5 min', label: 'setup time' },
  { num: '100%', label: 'free to use' },
]

const team = [
  { name: 'Team Member 1', role: 'Frontend · Design' },
  { name: 'Team Member 2', role: 'Backend · Data' },
  { name: 'Team Member 3', role: 'Product · UX' },
  { name: 'Team Member 4', role: 'Full Stack' },
]

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-forest-deep overflow-hidden">
        <div className="absolute inset-0 bg-hero-mesh" />
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        <div className="absolute top-20 right-[10%] w-72 h-72 rounded-full bg-forest-light/20 blur-3xl" />
        <div className="absolute bottom-10 left-[5%] w-56 h-56 rounded-full bg-ember/10 blur-3xl" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-28 md:py-36">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/15 bg-white/8 text-white/80 text-xs font-semibold tracking-wider uppercase mb-8 animate-fade-up backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
              Built for college students
            </div>
            <h1 className="font-display text-5xl md:text-7xl font-bold text-white leading-[1.08] tracking-tight mb-6 animate-fade-up-2">
              Make your<br />
              <span className="text-green-300 italic">dining plan</span><br />
              work for you.
            </h1>
            <p className="text-white/60 text-lg md:text-xl leading-relaxed mb-10 max-w-xl animate-fade-up-3">
              Track dining dollars, manage swipes, and discover the best food on campus — all in one beautifully simple place.
            </p>
            <div className="flex gap-3 flex-wrap animate-fade-up-4">
              <Link to="/dashboard" className="group px-8 py-4 bg-white text-forest font-bold rounded-2xl text-base hover:bg-green-50 transition-all hover:-translate-y-0.5 hover:shadow-float inline-flex items-center gap-2">
                🍽️ Let's Start Budgeting <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
              <Link to="/food-good" className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-2xl text-base border border-white/20 hover:bg-white/20 transition-all">
                Is Food Good? ⭐
              </Link>
            </div>
          </div>
          <div className="mt-20 flex flex-wrap gap-3 animate-fade-up-5">
            {stats.map(({ num, label }) => (
              <div key={label} className="glass-dark rounded-2xl px-6 py-4 flex items-center gap-4">
                <span className="font-display text-2xl font-bold text-white">{num}</span>
                <span className="text-white/50 text-xs leading-tight max-w-[80px]">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-parchment py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
            <div>
              <p className="text-ember font-semibold text-sm uppercase tracking-widest mb-3">Features</p>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-charcoal leading-tight">
                Everything you need<br />to eat smarter.
              </h2>
            </div>
            <p className="text-gray-400 max-w-xs leading-relaxed md:text-right text-sm">Stop guessing and start planning — your dining dollars deserve better than spreadsheets.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map(({ icon, title, desc, iconBg }, i) => (
              <div key={title} className="group bg-white rounded-2xl p-7 border border-black/[0.04] shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300">
                <div className={`w-12 h-12 ${iconBg} rounded-xl flex items-center justify-center text-xl mb-5 group-hover:scale-110 transition-transform`}>{icon}</div>
                <h3 className="font-display text-lg font-semibold text-charcoal mb-2">{title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className="py-24 px-6 bg-cream">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-up">
            <p className="text-forest font-semibold text-sm uppercase tracking-widest mb-4">Our Mission</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-charcoal leading-tight mb-6">
              No more wasted balance at semester's end.
            </h2>
            <p className="text-gray-400 leading-relaxed mb-4 text-sm">College dining plans are expensive and confusing. Students overspend early or waste hundreds at the end of each semester. NomNom was built to fix that.</p>
            <p className="text-gray-400 leading-relaxed mb-8 text-sm">We give every student the clarity to eat well, spend wisely, and enjoy campus food without the constant stress of "how much is left?"</p>
            <Link to="/login" className="inline-flex items-center gap-2 px-7 py-3.5 bg-forest text-white font-bold rounded-2xl hover:bg-forest-light hover:-translate-y-0.5 hover:shadow-glow-green transition-all">
              Get Started Free →
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-3 animate-fade-up-2">
            {[['🍕','Pizza Night'],['🥗','Fresh Salad'],['🍜','Ramen Bowl'],['🥙','Quick Wrap']].map(([emoji, label], i) => (
              <div key={label} className={`bg-white rounded-3xl p-8 text-center border border-black/[0.04] shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 ${i % 2 === 1 ? 'mt-6' : ''}`}>
                <div className="text-5xl mb-3">{emoji}</div>
                <p className="text-xs text-gray-400 font-medium">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="bg-parchment py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-ember font-semibold text-sm uppercase tracking-widest mb-3">The People</p>
            <h2 className="font-display text-4xl font-bold text-charcoal">Meet the Team</h2>
            <p className="text-gray-400 mt-2 text-sm">Students building for students.</p>
          </div>
          <div className="flex gap-4 justify-center flex-wrap">
            {team.map(({ name, role }) => (
              <div key={name} className="bg-white rounded-2xl p-6 w-48 text-center border border-black/[0.04] shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-forest-muted to-parchment flex items-center justify-center text-2xl mx-auto mb-3">👤</div>
                <p className="font-semibold text-sm text-charcoal">{name}</p>
                <p className="text-xs text-gray-400 mt-0.5">{role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative bg-forest-deep py-28 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-hero-mesh opacity-60" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-green-400/40 to-transparent" />
        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">Ready to eat smarter?</h2>
          <p className="text-white/60 text-lg mb-10 leading-relaxed">Join thousands of students who've taken control of their dining plan. Takes about 5 minutes.</p>
          <Link to="/login" className="inline-flex items-center gap-2 px-10 py-4 bg-white text-forest font-bold rounded-2xl text-base hover:bg-green-50 hover:-translate-y-0.5 hover:shadow-float transition-all">
            Create Free Account →
          </Link>
        </div>
      </section>
    </>
  )
}
