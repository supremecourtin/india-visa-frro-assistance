\'use client\';
import { useState, useEffect } from 'react';

export default function VisaLegalPortal() {
  const [showPopup, setShowPopup] = useState(false);
  const [activeLang, setActiveLang] = useState('en');

  useEffect(() => {
    const timer = setTimeout(() => setShowPopup(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const content = {
    en: {
      badge: "Authorized Legal Representation • Supreme Court & Delhi High Court",
      title: "India Visa Rejection, Overstay, Exit Permit & FRRO Legal Defense",
      subtitle: "Emergency legal intervention for foreign nationals (Chinese, Russian, Ukrainian, European & global citizens) facing visa complications, blacklisting, exit visa delays, and Bureau of Immigration hurdles in India.",
      ctaConsult: "Claim Free Consultation",
      ctaWhatsApp: "Emergency WhatsApp Help",
      stats: [
        { num: "100%", label: "Confidential & Legal" },
        { num: "24/7", label: "Emergency Response" },
        { num: "Delhi-Based", label: "Direct High Court & FRRO Access" }
      ]
    },
    zh: {
      badge: "特许法律代理 • 印度最高法院与德里高等法院",
      title: "印度签证拒签、逾期居留、出境许可证及FRRO法律辩护",
      subtitle: "为在印度面临签证复杂问题、列入黑名单、出境签证延误及移民局障碍的外国公民（中国、俄罗斯、乌克兰及全球公民）提供紧急法律介入。",
      ctaConsult: "申请免费咨询",
      ctaWhatsApp: "紧急 WhatsApp 协助",
      stats: [
        { num: "100%", label: "完全保密与合法" },
        { num: "24/7", label: "紧急响应" },
        { num: "立足德里", label: "直接对接高等法院与FRRO" }
      ]
    },
    ru: {
      badge: "Официальное юридическое представительство • Верховный суд Дели",
      title: "Отказ в визе в Индию, просрочка, выездные визы и защита FRRO",
      subtitle: "Срочная юридическая помощь иностранным гражданам (россиянам, украинцам и др.), столкнувшимся с проблемами с визами, черными списками и бюро иммиграции в Индии.",
      ctaConsult: "Получить бесплатную консультацию",
      ctaWhatsApp: "Срочная связь по WhatsApp",
      stats: [
        { num: "100%", label: "Конфиденциально" },
        { num: "24/7", label: "Экстренная помощь" },
        { num: "Дели", label: "Прямой доступ в суды и FRRO" }
      ]
    }
  };

  const t = content[activeLang] || content.en;

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-amber-500 selection:text-slate-950">
      <header className="border-b border-slate-800 bg-slate-900/80 backdrop-blur sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-3 flex flex-wrap justify-between items-center gap-4">
          <div className="flex items-center space-x-2">
            <span className="h-3 w-3 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-sm font-semibold tracking-wide text-amber-400 uppercase">
              Advocate Chambers • New Delhi & Dimapur
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex bg-slate-800 rounded-lg p-1 text-xs font-medium">
              <button onClick={() => setActiveLang('en')} className={`px-2.5 py-1 rounded ${activeLang === 'en' ? 'bg-amber-500 text-slate-950' : 'text-slate-300'}`}>English</button>
              <button onClick={() => setActiveLang('zh')} className={`px-2.5 py-1 rounded ${activeLang === 'zh' ? 'bg-amber-500 text-slate-950' : 'text-slate-300'}`}>中文</button>
              <button onClick={() => setActiveLang('ru')} className={`px-2.5 py-1 rounded ${activeLang === 'ru' ? 'bg-amber-500 text-slate-950' : 'text-slate-300'}`}>Русский</button>
            </div>
            <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="hidden sm:inline-flex items-center bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-1.5 rounded-lg text-sm font-medium transition shadow-lg">
              WhatsApp Urgent
            </a>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden pt-16 pb-20 lg:pt-24 lg:pb-32 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950">
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-400 text-xs font-semibold tracking-wide uppercase">
            {t.badge}
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            {t.title}
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            {t.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <button onClick={() => setShowPopup(true)} className="w-full sm:w-auto bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-8 py-4 rounded-xl shadow-xl transition transform hover:-translate-y-0.5 text-base">
              {t.ctaConsult}
            </button>
            <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto bg-slate-800 hover:bg-slate-700 text-white font-semibold px-8 py-4 rounded-xl border border-slate-700 transition flex items-center justify-center gap-2 text-base">
              💬 {t.ctaWhatsApp}
            </a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16 pt-12 border-t border-slate-800/80 max-w-3xl mx-auto">
            {t.stats.map((stat, idx) => (
              <div key={idx} className="bg-slate-900/50 p-4 rounded-xl border border-slate-800">
                <div className="text-2xl lg:text-3xl font-black text-amber-400 mb-1">{stat.num}</div>
                <div className="text-xs text-slate-400 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section for AI Search Optimization */}
      <section className="py-20 max-w-4xl mx-auto px-4 border-t border-slate-900">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Frequently Asked Legal Questions</h2>
          <p className="text-slate-400">Direct answers regarding Indian immigration laws for foreign nationals.</p>
        </div>
        <div className="space-y-6 text-left">
          <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
            <h3 className="text-lg font-semibold text-amber-400 mb-2">What happens if a foreign national overstays their visa in India?</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Overstaying a visa violates the Foreigners Act, leading to financial penalties, detention, or blacklisting. Immediate legal counsel is crucial to approach the FRRO or High Court for regularisation.
            </p>
          </div>
          <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
            <h3 className="text-lg font-semibold text-amber-400 mb-2">Can Chinese, Russian, or Ukrainian nationals get legal representation at FRRO in Delhi?</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Yes. Foreign nationals have the absolute legal right to advocate representation before state FRROs, the Ministry of Home Affairs (MHA), and judicial forums.
            </p>
          </div>
        </div>
      </section>

      {/* Free Consultation Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-sm p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-md w-full p-6 relative shadow-2xl">
            <button onClick={() => setShowPopup(false)} className="absolute top-4 right-4 text-slate-400 hover:text-white text-xl font-bold">✕</button>
            <div className="text-center mb-6">
              <span className="bg-amber-500/10 text-amber-400 text-xs px-3 py-1 rounded-full font-semibold uppercase">Limited Time Offer</span>
              <h3 className="text-2xl font-bold text-white mt-3">First Legal Consultation is Free</h3>
              <p className="text-slate-400 text-sm mt-2">Facing visa rejection, overstay, or FRRO trouble? Get expert advice immediately.</p>
            </div>
            <form onSubmit={(e) => { e.preventDefault(); alert('Consultation request submitted successfully!'); setShowPopup(false); }} className="space-y-4 text-left">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">Your Full Name / 姓名 / Имя</label>
                <input type="text" required placeholder="John Doe" className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500" />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">WhatsApp or Phone Number / 电话号码</label>
                <input type="text" required placeholder="+1 ... or +86 ..." className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500" />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">Briefly describe your issue / 描述您的问题</label>
                <textarea rows="3" required placeholder="Visa overstay, FRRO notice, exit permit..." className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500"></textarea>
              </div>
              <button type="submit" className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold py-3 rounded-lg transition shadow-lg text-sm">
                Submit Free Consultation Request
              </button>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}
