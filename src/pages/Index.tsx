const MAP_IMG = "https://cdn.poehali.dev/projects/20a6d562-3a18-4eff-b072-b18ba338a389/files/529f46bc-3294-4555-82d4-512866851199.jpg";
const SHIP_IMG = "https://cdn.poehali.dev/projects/20a6d562-3a18-4eff-b072-b18ba338a389/files/8be8e171-e22d-42a4-a441-eebc7e56f80e.jpg";
const SHIP2_IMG = "https://cdn.poehali.dev/projects/20a6d562-3a18-4eff-b072-b18ba338a389/files/eb929c83-833b-4aa2-b43a-fbd29c0a0a2c.jpg";
const BELLINGSHAUSEN_IMG = "https://cdn.poehali.dev/projects/20a6d562-3a18-4eff-b072-b18ba338a389/files/03c278d4-dc05-4575-9799-54a9929bef19.jpg";
const LAZAREV_IMG = "https://cdn.poehali.dev/projects/20a6d562-3a18-4eff-b072-b18ba338a389/files/5e0bfef7-4564-446b-905c-e8c97a454a9a.jpg";

const timelineEvents = [
  { year: "1778", title: "Рождение Беллинсгаузена", description: "Фаддей Фаддеевич Беллинсгаузен родился на острове Эзель (Сааремаа) в семье прибалтийских немцев. С детства мечтал о море и в 10 лет поступил в Кронштадтский морской корпус.", icon: "⭐", color: "bg-blue-50 border-blue-200", highlight: false },
  { year: "1788", title: "Рождение Лазарева", description: "Михаил Петрович Лазарев родился во Владимирской губернии. В 14 лет поступил в Морской кадетский корпус и уже в юности проявил незаурядные способности морского офицера.", icon: "⚓", color: "bg-teal-50 border-teal-200", highlight: false },
  { year: "1803–1806", title: "Первое кругосветное путешествие", description: "Беллинсгаузен участвует в первой русской кругосветной экспедиции под командованием Крузенштерна. Составляет точные карты, которые вошли в атлас Южного океана. Опыт этой экспедиции стал фундаментом для будущего великого открытия.", icon: "🌍", color: "bg-amber-50 border-amber-200", highlight: false },
  { year: "1815–1818", title: "Кругосветное плавание Лазарева", description: "Лазарев совершает первое самостоятельное кругосветное плавание на шлюпе «Суворов», доставив грузы в Русскую Америку (Аляску). Плавание закалило его как командира и навигатора.", icon: "🚢", color: "bg-green-50 border-green-200", highlight: false },
  { year: "1819", title: "Подготовка экспедиции", description: "Русское географическое общество снаряжает экспедицию для исследования южных полярных морей. Командиром назначен капитан 2-го ранга Беллинсгаузен, вторым командиром — лейтенант Лазарев. На подготовку ушло несколько месяцев.", icon: "📜", color: "bg-purple-50 border-purple-200", highlight: false },
  { year: "4 июля 1819", title: "Отплытие из Кронштадта", description: "Шлюпы «Восток» (Беллинсгаузен) и «Мирный» (Лазарев) торжественно покидают Кронштадт. На борту — опытные моряки, учёные, художники. Начинается великое путешествие в неизведанное!", icon: "⛵", color: "bg-blue-50 border-blue-200", highlight: false },
  { year: "16 января 1820", title: "🏆 Открытие Антарктиды", description: "Исторический момент! Суда подошли к ледяному берегу на расстояние около 20 морских миль. Русские моряки первыми в мире увидели берега неизведанного шестого континента — Антарктиды. Этот день навсегда вошёл в мировую историю.", icon: "🌨️", color: "bg-indigo-50 border-indigo-400", highlight: true },
  { year: "1820–1821", title: "Исследование побережья", description: "Экспедиция трижды обходит Антарктиду, открывает 29 островов, наносит на карту сотни километров побережья. Учёные описывают флору, фауну, собирают образцы горных пород — всё это впервые в истории.", icon: "🗺️", color: "bg-teal-50 border-teal-200", highlight: false },
  { year: "24 июля 1821", title: "Триумфальное возвращение", description: "После 751 дня плавания экспедиция с триумфом возвращается в Кронштадт. Пройдено более 92 000 км — это больше двух полных оборотов вокруг Земли. Россия подарила миру новый континент!", icon: "🎉", color: "bg-amber-50 border-amber-200", highlight: false },
];

const achievements = [
  { emoji: "🏔️", title: "Открытие Антарктиды", desc: "Шестой континент открыт 16 января 1820 года", color: "from-blue-600 to-blue-800" },
  { emoji: "🗺️", title: "29 новых островов", desc: "Нанесены на карту в ходе экспедиции", color: "from-teal-600 to-teal-800" },
  { emoji: "🌊", title: "92 000 км пути", desc: "Пройдено за 751 день плавания", color: "from-indigo-600 to-indigo-800" },
  { emoji: "🐧", title: "Описание фауны", desc: "Впервые описаны пингвины и тюлени", color: "from-cyan-600 to-cyan-800" },
  { emoji: "📍", title: "Точные карты", desc: "Детальные карты южных морей", color: "from-purple-600 to-purple-800" },
  { emoji: "🏆", title: "Мировой рекорд", desc: "Дальше всех прошли к Южному полюсу", color: "from-amber-600 to-amber-800" },
];

const funFacts = [
  { icon: "🏝️", text: "Открытые острова назвали в честь русских побед: Бородино, Малоярославец, Смоленск и другие." },
  { icon: "🌡️", text: "Температура у берегов Антарктиды опускалась до −20°C. Моряки не имели специального снаряжения." },
  { icon: "📏", text: "Беллинсгаузен приближался к Антарктиде трижды — каждый раз всё ближе: на 20, 15 и 9 морских миль." },
  { icon: "🐦", text: "Экспедиция привезла в Россию первые образцы антарктических пород и описания местных животных." },
  { icon: "📚", text: "В 1831 году Беллинсгаузен опубликовал двухтомный отчёт об экспедиции с атласом карт и рисунков." },
];

export default function Index() {
  return (
    <div className="min-h-screen" style={{ background: "#f0f7ff" }}>

      {/* ===== HERO ===== */}
      <header
        className="relative overflow-hidden text-white"
        style={{ background: "linear-gradient(160deg, #071e38 0%, #0f3d6b 45%, #0b5c7a 100%)" }}
      >
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `
              radial-gradient(circle at 8% 15%, rgba(255,255,255,0.8) 1px, transparent 1px),
              radial-gradient(circle at 88% 8%, rgba(255,255,255,0.7) 1.5px, transparent 1.5px),
              radial-gradient(circle at 42% 55%, rgba(255,255,255,0.5) 1px, transparent 1px),
              radial-gradient(circle at 68% 75%, rgba(255,255,255,0.5) 1px, transparent 1px),
              radial-gradient(circle at 22% 88%, rgba(255,255,255,0.4) 1.5px, transparent 1.5px),
              radial-gradient(circle at 93% 42%, rgba(255,255,255,0.6) 1px, transparent 1px),
              radial-gradient(circle at 55% 25%, rgba(255,255,255,0.4) 1px, transparent 1px)
            `,
            backgroundSize: "500px 500px",
          }}
        />
        <div
          className="absolute inset-0 opacity-10"
          style={{ backgroundImage: `url(${MAP_IMG})`, backgroundSize: "cover", backgroundPosition: "center", mixBlendMode: "luminosity" }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-6 py-20 text-center">
          <div className="text-6xl mb-5 inline-block" style={{ animation: "float 6s ease-in-out infinite" }}>🧭</div>
          <h1 style={{ fontFamily: "'Cormorant', serif", textShadow: "0 2px 24px rgba(0,0,0,0.5)", fontSize: "clamp(2.5rem, 7vw, 5rem)", fontWeight: 700, lineHeight: 1.1, marginBottom: "0.75rem" }}>
            Экспедиция к Антарктиде
          </h1>
          <p style={{ fontFamily: "'Cormorant', serif", fontStyle: "italic", fontSize: "clamp(1.25rem, 3vw, 1.75rem)", color: "#93c5fd", marginBottom: "1rem" }}>
            1819 – 1821 · Беллинсгаузен и Лазарев
          </p>
          <p style={{ color: "#bfdbfe", fontSize: "1.05rem", maxWidth: 600, margin: "0 auto 2rem", lineHeight: 1.7, opacity: 0.9 }}>
            Образовательный портал о великом открытии русских мореплавателей —
            первооткрывателей шестого континента нашей планеты
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-sm font-semibold">
            {["⏱️ Хронология ниже", "👨‍✈️ Биографии", "🏆 Достижения"].map((t, i) => (
              <span key={i} className="px-4 py-2 rounded-full border border-white/20 bg-white/10 text-white/80">{t}</span>
            ))}
          </div>
        </div>
        <div style={{ overflow: "hidden", lineHeight: 0 }}>
          <svg viewBox="0 0 1440 60" style={{ display: "block" }}>
            <path d="M0 30 C360 60 1080 0 1440 30 L1440 60 L0 60 Z" fill="#f0f7ff" />
          </svg>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4">

        {/* ===== INTRO ===== */}
        <section className="py-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-blue-500 mb-3">Великое открытие</div>
              <h2 style={{ fontFamily: "'Cormorant', serif", fontSize: "2.5rem", fontWeight: 700, color: "#1e293b", lineHeight: 1.2, marginBottom: "1rem" }}>
                Россия открыла миру шестой континент
              </h2>
              <p style={{ color: "#475569", lineHeight: 1.8, marginBottom: "1rem" }}>
                В 1820 году два русских шлюпа — «Восток» и «Мирный» — под командованием Фаддея Беллинсгаузена и
                Михаила Лазарева подошли к берегам неизведанного континента в самом сердце южных морей.
              </p>
              <p style={{ color: "#475569", lineHeight: 1.8 }}>
                Это было одно из величайших географических открытий всех времён. За 751 день плавания
                экспедиция прошла более 92 000 километров и нанесла на карту 29 новых островов.
              </p>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img src={SHIP_IMG} alt="Корабли в Антарктиде" className="w-full h-72 object-cover" />
            </div>
          </div>
        </section>

        {/* ===== BIOGRAPHIES ===== */}
        <section className="py-12">
          <div className="text-center mb-12">
            <div className="text-xs font-bold uppercase tracking-widest text-blue-500 mb-2">Командиры</div>
            <h2 style={{ fontFamily: "'Cormorant', serif", fontSize: "2.5rem", fontWeight: 700, color: "#1e293b" }}>
              Герои экспедиции
            </h2>
          </div>

          {/* Bellingshausen */}
          <div className="grid md:grid-cols-2 gap-8 items-start mb-16">
            <div className="rounded-3xl overflow-hidden shadow-xl order-1">
              <img src={BELLINGSHAUSEN_IMG} alt="Беллинсгаузен" className="w-full h-96 object-cover object-top" />
            </div>
            <div className="order-2 py-4">
              <div className="text-xs font-bold uppercase tracking-widest text-teal-500 mb-2">Командир экспедиции</div>
              <h3 style={{ fontFamily: "'Cormorant', serif", fontSize: "2rem", fontWeight: 700, color: "#1e293b", lineHeight: 1.2, marginBottom: "0.5rem" }}>
                Фаддей Фаддеевич Беллинсгаузен
              </h3>
              <p style={{ color: "#64748b", fontSize: "0.9rem", marginBottom: "1.25rem" }}>1778 – 1852 · Адмирал</p>
              <p style={{ color: "#475569", lineHeight: 1.8, marginBottom: "1.25rem" }}>
                Родился на острове Эзель в семье прибалтийских немцев. В 10 лет поступил в морской корпус,
                а в зрелые годы стал одним из лучших картографов России. Участник первого русского кругосветного
                плавания с Крузенштерном, автор точных карт южных морей.
              </p>
              <ul className="space-y-2 mb-6">
                {["Участник кругосветки Крузенштерна (1803–1806)", "Превосходный картограф и учёный", "Дослужился до звания адмирала", "Автор «Двукратных изысканий в Южном Ледовитом океане»"].map((f, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm" style={{ color: "#334155" }}>
                    <span style={{ color: "#f59e0b", marginTop: 2, flexShrink: 0 }}>✦</span> {f}
                  </li>
                ))}
              </ul>
              <div className="rounded-2xl p-4" style={{ background: "linear-gradient(135deg, #1e3a5f, #1e6085)" }}>
                <p style={{ fontFamily: "'Cormorant', serif", fontStyle: "italic", fontSize: "1.2rem", color: "#fde68a", lineHeight: 1.5 }}>
                  «Открытие есть плод терпения и упорного труда»
                </p>
              </div>
            </div>
          </div>

          {/* Lazarev */}
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="order-2 md:order-1 py-4">
              <div className="text-xs font-bold uppercase tracking-widest text-blue-500 mb-2">Командир «Мирного»</div>
              <h3 style={{ fontFamily: "'Cormorant', serif", fontSize: "2rem", fontWeight: 700, color: "#1e293b", lineHeight: 1.2, marginBottom: "0.5rem" }}>
                Михаил Петрович Лазарев
              </h3>
              <p style={{ color: "#64748b", fontSize: "0.9rem", marginBottom: "1.25rem" }}>1788 – 1851 · Адмирал</p>
              <p style={{ color: "#475569", lineHeight: 1.8, marginBottom: "1.25rem" }}>
                Воспитанник Морского кадетского корпуса. Ещё до антарктической экспедиции совершил
                самостоятельное кругосветное плавание на «Суворове». Впоследствии стал
                главным командиром Черноморского флота и воспитал целое поколение прославленных адмиралов.
              </p>
              <ul className="space-y-2 mb-6">
                {["Три кругосветных плавания", "Участник Наваринского сражения (1827)", "Главный командир Черноморского флота", "Воспитал Нахимова, Корнилова и Истомина"].map((f, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm" style={{ color: "#334155" }}>
                    <span style={{ color: "#0d9488", marginTop: 2, flexShrink: 0 }}>✦</span> {f}
                  </li>
                ))}
              </ul>
              <div className="rounded-2xl p-4" style={{ background: "linear-gradient(135deg, #134e4a, #0e7490)" }}>
                <p style={{ fontFamily: "'Cormorant', serif", fontStyle: "italic", fontSize: "1.2rem", color: "#fde68a", lineHeight: 1.5 }}>
                  «Море — лучший учитель мужества»
                </p>
              </div>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-xl order-1 md:order-2">
              <img src={LAZAREV_IMG} alt="Лазарев" className="w-full h-96 object-cover object-top" />
            </div>
          </div>
        </section>

        {/* ===== TIMELINE ===== */}
        <section className="py-12">
          <div className="text-center mb-12">
            <div className="text-xs font-bold uppercase tracking-widest text-blue-500 mb-2">События</div>
            <h2 style={{ fontFamily: "'Cormorant', serif", fontSize: "2.5rem", fontWeight: 700, color: "#1e293b" }}>
              Хронология экспедиции
            </h2>
          </div>

          <div className="relative">
            <div className="hidden md:block absolute top-0 bottom-0 w-0.5 z-0" style={{ left: "50%", transform: "translateX(-50%)", background: "linear-gradient(to bottom, #2563eb, #0d9488)" }} />

            <div className="space-y-6">
              {timelineEvents.map((ev, i) => (
                <div key={i} className={`flex items-start gap-4 md:gap-0 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  <div className={`w-full md:w-5/12 ${i % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8"}`}>
                    <div
                      className={`rounded-2xl border-2 p-5 ${ev.color} ${ev.highlight ? "ring-2 ring-amber-400 shadow-xl" : "shadow-sm"}`}
                      style={{ transition: "transform 0.25s, box-shadow 0.25s" }}
                      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 28px rgba(0,60,120,0.14)"; }}
                      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = ""; (e.currentTarget as HTMLElement).style.boxShadow = ""; }}
                    >
                      <div className={`flex items-center gap-2 mb-1 ${i % 2 === 0 ? "md:justify-end" : ""}`}>
                        <span className="text-xl">{ev.icon}</span>
                        <span className="text-xs font-bold bg-white/80 text-slate-600 px-2.5 py-0.5 rounded-full">{ev.year}</span>
                      </div>
                      <h3 className={`font-bold text-slate-800 text-base mb-1 leading-snug ${ev.highlight ? "text-indigo-800" : ""}`}>{ev.title}</h3>
                      <p className="text-slate-600 text-sm leading-relaxed">{ev.description}</p>
                    </div>
                  </div>

                  <div className="hidden md:flex w-2/12 justify-center items-start pt-5 z-10">
                    <div style={{ width: 18, height: 18, borderRadius: "50%", border: "4px solid white", background: ev.highlight ? "#f59e0b" : "#3b82f6", boxShadow: ev.highlight ? "0 0 0 4px rgba(245,158,11,0.35)" : "0 0 0 3px rgba(59,130,246,0.3)" }} />
                  </div>
                  <div className="hidden md:block w-5/12" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== SHIPS ===== */}
        <section className="py-8">
          <div className="rounded-3xl overflow-hidden shadow-2xl relative">
            <img src={SHIP2_IMG} alt="Шлюпы во льдах" className="w-full h-72 md:h-96 object-cover" />
            <div className="absolute inset-0 flex items-end" style={{ background: "linear-gradient(to top, rgba(7,30,56,0.9) 0%, rgba(7,30,56,0.3) 60%, transparent 100%)" }}>
              <div className="p-8 text-white">
                <h3 style={{ fontFamily: "'Cormorant', serif", fontSize: "2rem", fontWeight: 700, marginBottom: "0.5rem" }}>«Восток» и «Мирный» среди льдов</h3>
                <p style={{ color: "#bfdbfe", fontSize: "0.95rem", maxWidth: 560, lineHeight: 1.7 }}>
                  Два небольших шлюпа противостояли льдам, штормам и морозам Антарктики.
                  Моряки не имели современного снаряжения — только мужество и мастерство.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===== ACHIEVEMENTS ===== */}
        <section className="py-12">
          <div className="text-center mb-12">
            <div className="text-xs font-bold uppercase tracking-widest text-blue-500 mb-2">Результаты</div>
            <h2 style={{ fontFamily: "'Cormorant', serif", fontSize: "2.5rem", fontWeight: 700, color: "#1e293b" }}>
              Достижения и открытия
            </h2>
          </div>

          {/* Main achievement */}
          <div className="rounded-3xl p-8 md:p-12 mb-8 text-white text-center relative overflow-hidden shadow-2xl" style={{ background: "linear-gradient(135deg, #071e38 0%, #0f4c7a 55%, #0b7a8c 100%)" }}>
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url(${MAP_IMG})`, backgroundSize: "cover", backgroundPosition: "center" }} />
            <div className="relative z-10">
              <div className="text-7xl mb-4 inline-block" style={{ animation: "float 6s ease-in-out infinite" }}>🌨️</div>
              <h3 style={{ fontFamily: "'Cormorant', serif", fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 700, marginBottom: "0.75rem" }}>Открытие Антарктиды</h3>
              <p style={{ fontSize: "1.5rem", color: "#fcd34d", fontWeight: 700, marginBottom: "0.75rem" }}>16 января 1820 года</p>
              <p style={{ color: "#bfdbfe", maxWidth: 560, margin: "0 auto 1.5rem", lineHeight: 1.7 }}>
                Россия подарила миру шестой континент. Беллинсгаузен и Лазарев стали первыми людьми,
                увидевшими ледяные берега неизведанного материка. Этот день навсегда изменил карту мира.
              </p>
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm" style={{ background: "#fbbf24", color: "#1e3a5f" }}>
                🥇 Мировое первооткрытие
              </div>
            </div>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            {achievements.map((item, i) => (
              <div
                key={i}
                className={`rounded-2xl p-5 text-white bg-gradient-to-br ${item.color} shadow-lg`}
                style={{ transition: "transform 0.25s, box-shadow 0.25s" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-5px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 16px 32px rgba(0,0,0,0.2)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = ""; (e.currentTarget as HTMLElement).style.boxShadow = ""; }}
              >
                <div className="text-4xl mb-3">{item.emoji}</div>
                <h4 className="font-bold text-base leading-tight mb-1">{item.title}</h4>
                <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.85rem" }}>{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Fun facts */}
          <div className="bg-white rounded-3xl shadow-lg p-8">
            <h3 className="flex items-center gap-2 mb-6" style={{ fontFamily: "'Cormorant', serif", fontSize: "1.75rem", fontWeight: 700, color: "#1e293b" }}>
              <span>💡</span> Интересные факты
            </h3>
            <div className="space-y-3">
              {funFacts.map((fact, i) => (
                <div
                  key={i}
                  className="flex gap-4 items-start p-4 rounded-xl"
                  style={{ background: "#f8fafc", transition: "background 0.2s" }}
                  onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = "#eff6ff")}
                  onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = "#f8fafc")}
                >
                  <span className="text-2xl flex-shrink-0">{fact.icon}</span>
                  <p style={{ color: "#475569", lineHeight: 1.7, fontSize: "0.95rem" }}>{fact.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* ===== FOOTER ===== */}
      <footer className="mt-8 py-10 text-center" style={{ background: "linear-gradient(160deg, #071e38, #0f3d6b)" }}>
        <div className="text-3xl mb-2">🧭</div>
        <p style={{ color: "#93c5fd", fontSize: "0.9rem" }}>Образовательный портал об экспедиции Беллинсгаузена и Лазарева</p>
        <p style={{ color: "#3b82f6", fontSize: "0.75rem", marginTop: 4 }}>1819 – 1821 · Первая русская антарктическая экспедиция</p>
      </footer>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
      `}</style>
    </div>
  );
}
