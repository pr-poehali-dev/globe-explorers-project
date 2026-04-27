import { useState } from "react";

const MAP_IMG = "https://cdn.poehali.dev/projects/20a6d562-3a18-4eff-b072-b18ba338a389/files/529f46bc-3294-4555-82d4-512866851199.jpg";
const PORTRAIT_IMG = "https://cdn.poehali.dev/projects/20a6d562-3a18-4eff-b072-b18ba338a389/files/5c827736-3be9-4b5c-8a79-464d70b930cb.jpg";
const SHIP_IMG = "https://cdn.poehali.dev/projects/20a6d562-3a18-4eff-b072-b18ba338a389/files/8be8e171-e22d-42a4-a441-eebc7e56f80e.jpg";

const timelineEvents = [
  { year: "1778", title: "Рождение Беллинсгаузена", description: "Фаддей Фаддеевич Беллинсгаузен родился на острове Эзель (Сааремаа) в семье прибалтийских немцев. С детства мечтал о море.", icon: "⭐", color: "bg-blue-100 border-blue-300", highlight: false },
  { year: "1788", title: "Рождение Лазарева", description: "Михаил Петрович Лазарев родился во Владимирской губернии. В 14 лет поступил в Морской кадетский корпус.", icon: "⚓", color: "bg-teal-100 border-teal-300", highlight: false },
  { year: "1803–1806", title: "Первое кругосветное", description: "Беллинсгаузен участвует в первой русской кругосветной экспедиции под командованием Крузенштерна. Составляет точные карты.", icon: "🌍", color: "bg-amber-100 border-amber-300", highlight: false },
  { year: "1815–1818", title: "Кругосветка Лазарева", description: "Лазарев совершает первое самостоятельное кругосветное плавание на шлюпе «Суворов», доставив грузы в Русскую Америку.", icon: "🚢", color: "bg-green-100 border-green-300", highlight: false },
  { year: "1819", title: "Подготовка экспедиции", description: "Русское географическое общество снаряжает экспедицию для исследования южных полярных морей. Командиром назначен Беллинсгаузен.", icon: "📜", color: "bg-purple-100 border-purple-300", highlight: false },
  { year: "4 июля 1819", title: "Отплытие из Кронштадта", description: "Шлюпы «Восток» (Беллинсгаузен) и «Мирный» (Лазарев) покидают Кронштадт. Начинается великое путешествие!", icon: "⛵", color: "bg-blue-100 border-blue-300", highlight: false },
  { year: "16 января 1820", title: "Открытие Антарктиды", description: "Исторический момент! Суда подошли на 20 миль к ледяному берегу. Русские моряки первыми в мире увидели Антарктиду.", icon: "🌨️", color: "bg-indigo-100 border-indigo-400", highlight: true },
  { year: "1820–1821", title: "Исследование побережья", description: "Экспедиция открыла 29 островов, нанесла на карту значительные участки антарктического побережья, описала флору и фауну.", icon: "🗺️", color: "bg-teal-100 border-teal-300", highlight: false },
  { year: "24 июля 1821", title: "Возвращение в Кронштадт", description: "После 751 дня плавания экспедиция вернулась на родину. Пройдено более 92 000 км — больше двух оборотов вокруг Земли!", icon: "🎉", color: "bg-amber-100 border-amber-300", highlight: false },
];

const achievements = [
  { emoji: "🏔️", title: "Открытие Антарктиды", desc: "Шестой континент был открыт 16 января 1820 года", color: "from-blue-600 to-blue-800" },
  { emoji: "🗺️", title: "29 новых островов", desc: "Нанесены на карту в ходе экспедиции", color: "from-teal-600 to-teal-800" },
  { emoji: "🌊", title: "92 000 км пути", desc: "Расстояние, пройдённое за 751 день плавания", color: "from-indigo-600 to-indigo-800" },
  { emoji: "🐧", title: "Описание фауны", desc: "Впервые описаны пингвины и тюлени Антарктиды", color: "from-cyan-600 to-cyan-800" },
  { emoji: "📡", title: "Точные карты", desc: "Беллинсгаузен создал детальные карты южных морей", color: "from-purple-600 to-purple-800" },
  { emoji: "🏆", title: "Мировой рекорд", desc: "Дальше всех прошли к Южному полюсу своего времени", color: "from-amber-600 to-amber-800" },
];

const biographies = [
  {
    name: "Фаддей Фаддеевич Беллинсгаузен",
    years: "1778 – 1852",
    role: "Командир экспедиции",
    emoji: "🎖️",
    facts: [
      "Родился в семье прибалтийских немцев",
      "Участник первой русской кругосветки (1803–1806)",
      "Превосходный картограф и учёный",
      "Дослужился до звания адмирала",
      "Автор книги «Двукратные изыскания в Южном Ледовитом океане»",
    ],
    quote: "«Открытие есть плод терпения и упорного труда»",
    bg: "from-blue-700 to-indigo-900",
  },
  {
    name: "Михаил Петрович Лазарев",
    years: "1788 – 1851",
    role: "Командир шлюпа «Мирный»",
    emoji: "⚓",
    facts: [
      "Воспитанник Морского кадетского корпуса",
      "Совершил три кругосветных плавания",
      "Участник Наваринского морского сражения (1827)",
      "Главный командир Черноморского флота",
      "Воспитал плеяду выдающихся адмиралов",
    ],
    quote: "«Море — лучший учитель мужества»",
    bg: "from-teal-700 to-cyan-900",
  },
];

type Section = "timeline" | "biographies" | "achievements";

export default function Index() {
  const [activeSection, setActiveSection] = useState<Section>("timeline");
  const [openEvent, setOpenEvent] = useState<number | null>(null);

  return (
    <div className="min-h-screen" style={{ background: "linear-gradient(180deg, #f0f7ff 0%, #e8f4f8 100%)" }}>
      {/* Hero */}
      <header
        className="relative overflow-hidden text-white"
        style={{ background: "linear-gradient(160deg, #071e38 0%, #0f3d6b 45%, #0b5c7a 100%)" }}
      >
        {/* Starfield */}
        <div
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage: `
              radial-gradient(circle at 8% 15%, rgba(255,255,255,0.8) 1px, transparent 1px),
              radial-gradient(circle at 88% 8%, rgba(255,255,255,0.7) 1.5px, transparent 1.5px),
              radial-gradient(circle at 42% 55%, rgba(255,255,255,0.6) 1px, transparent 1px),
              radial-gradient(circle at 68% 75%, rgba(255,255,255,0.6) 1px, transparent 1px),
              radial-gradient(circle at 22% 88%, rgba(255,255,255,0.5) 1.5px, transparent 1.5px),
              radial-gradient(circle at 93% 42%, rgba(255,255,255,0.7) 1px, transparent 1px),
              radial-gradient(circle at 55% 25%, rgba(255,255,255,0.5) 1px, transparent 1px),
              radial-gradient(circle at 15% 48%, rgba(255,255,255,0.4) 1px, transparent 1px)
            `,
            backgroundSize: "500px 500px",
          }}
        />

        {/* Map overlay */}
        <div
          className="absolute inset-0 opacity-8"
          style={{ backgroundImage: `url(${MAP_IMG})`, backgroundSize: "cover", backgroundPosition: "center", mixBlendMode: "overlay" }}
        />

        <div className="relative z-10 max-w-5xl mx-auto px-6 py-16 text-center">
          <div className="text-6xl mb-4" style={{ display: "inline-block", animation: "float 6s ease-in-out infinite" }}>
            🧭
          </div>
          <h1
            className="font-display text-5xl md:text-7xl font-bold mb-3 leading-tight"
            style={{ fontFamily: "'Cormorant', serif", textShadow: "0 2px 24px rgba(0,0,0,0.5)" }}
          >
            Экспедиция к Антарктиде
          </h1>
          <p
            className="text-2xl md:text-3xl text-blue-200 mb-3"
            style={{ fontFamily: "'Cormorant', serif", fontStyle: "italic" }}
          >
            1819 – 1821 · Беллинсгаузен и Лазарев
          </p>
          <p className="text-blue-100 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed opacity-90">
            Образовательный портал о великом открытии русских мореплавателей — первооткрывателей шестого континента
          </p>

          {/* Navigation tabs */}
          <nav className="flex flex-wrap justify-center gap-3">
            {[
              { id: "timeline" as Section, label: "⏱️ Хронология" },
              { id: "biographies" as Section, label: "👨‍✈️ Биографии" },
              { id: "achievements" as Section, label: "🏆 Достижения" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveSection(tab.id)}
                style={{
                  fontFamily: "'Golos Text', sans-serif",
                  transition: "all 0.2s ease",
                  transform: activeSection === tab.id ? "scale(1.05)" : "scale(1)",
                }}
                className={`px-6 py-2.5 rounded-full font-semibold text-sm ${
                  activeSection === tab.id
                    ? "bg-amber-400 text-blue-900 shadow-lg"
                    : "bg-white/15 text-white hover:bg-white/25 border border-white/20"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Wave divider */}
        <div style={{ overflow: "hidden", lineHeight: 0, marginTop: "-1px" }}>
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: "block" }}>
            <path d="M0 30 C360 60 1080 0 1440 30 L1440 60 L0 60 Z" fill="#f0f7ff" />
          </svg>
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-5xl mx-auto px-4 py-12">

        {/* TIMELINE SECTION */}
        {activeSection === "timeline" && (
          <div style={{ animation: "sectionFade 0.6s ease forwards" }}>
            <h2
              className="text-4xl font-bold text-center text-slate-800 mb-2"
              style={{ fontFamily: "'Cormorant', serif" }}
            >
              Хронология экспедиции
            </h2>
            <p className="text-center text-slate-500 mb-12 text-sm">
              Нажми на событие, чтобы узнать подробности
            </p>

            <div className="relative">
              {/* Vertical line */}
              <div
                className="hidden md:block absolute top-0 bottom-0 w-0.5 z-0"
                style={{
                  left: "50%",
                  transform: "translateX(-50%)",
                  background: "linear-gradient(to bottom, #1e6fbf, #0da8b4)",
                }}
              />

              <div className="space-y-6">
                {timelineEvents.map((event, i) => (
                  <div
                    key={i}
                    className={`flex items-start gap-4 md:gap-0 cursor-pointer ${
                      i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                    onClick={() => setOpenEvent(openEvent === i ? null : i)}
                  >
                    {/* Card */}
                    <div className={`w-full md:w-5/12 ${i % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8"}`}>
                      <div
                        className={`rounded-2xl border-2 p-5 ${event.color} ${
                          event.highlight ? "ring-2 ring-amber-400 shadow-xl" : "shadow-md"
                        }`}
                        style={{ transition: "transform 0.3s ease, box-shadow 0.3s ease" }}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)";
                          (e.currentTarget as HTMLDivElement).style.boxShadow = "0 16px 32px rgba(0,60,120,0.15)";
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                          (e.currentTarget as HTMLDivElement).style.boxShadow = "";
                        }}
                      >
                        <div className={`flex items-center gap-2 mb-1 ${i % 2 === 0 ? "md:justify-end" : ""}`}>
                          <span className="text-2xl">{event.icon}</span>
                          <span
                            className="font-bold text-slate-600 text-xs bg-white/70 px-2.5 py-0.5 rounded-full"
                            style={{ fontFamily: "'Golos Text', sans-serif" }}
                          >
                            {event.year}
                          </span>
                        </div>
                        <h3
                          className={`font-bold text-slate-800 text-lg mb-1 leading-tight ${
                            event.highlight ? "text-indigo-800" : ""
                          }`}
                        >
                          {event.title}
                        </h3>
                        {openEvent === i ? (
                          <p className="text-slate-600 text-sm leading-relaxed mt-2">{event.description}</p>
                        ) : (
                          <p className="text-slate-400 text-xs mt-1">Нажми, чтобы узнать больше →</p>
                        )}
                      </div>
                    </div>

                    {/* Timeline dot */}
                    <div className="hidden md:flex w-2/12 justify-center items-start pt-5 z-10">
                      <div
                        style={{
                          width: 20,
                          height: 20,
                          borderRadius: "50%",
                          border: "4px solid white",
                          backgroundColor: openEvent === i ? "#fbbf24" : "#3b82f6",
                          boxShadow: openEvent === i
                            ? "0 0 0 4px rgba(251,191,36,0.4)"
                            : "0 0 0 3px rgba(59,130,246,0.3)",
                          transition: "transform 0.3s ease, background-color 0.3s ease",
                          transform: openEvent === i ? "scale(1.5)" : "scale(1)",
                        }}
                      />
                    </div>

                    {/* Spacer */}
                    <div className="hidden md:block w-5/12" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* BIOGRAPHIES SECTION */}
        {activeSection === "biographies" && (
          <div style={{ animation: "sectionFade 0.6s ease forwards" }}>
            <h2
              className="text-4xl font-bold text-center text-slate-800 mb-2"
              style={{ fontFamily: "'Cormorant', serif" }}
            >
              Герои экспедиции
            </h2>
            <p className="text-center text-slate-500 mb-12 text-sm">
              Два отважных командира, изменивших историю географии
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {biographies.map((bio, i) => (
                <div
                  key={i}
                  className={`rounded-3xl overflow-hidden shadow-xl text-white bg-gradient-to-br ${bio.bg}`}
                  style={{ transition: "transform 0.3s ease, box-shadow 0.3s ease" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.transform = "translateY(-6px)";
                    (e.currentTarget as HTMLDivElement).style.boxShadow = "0 24px 48px rgba(0,0,0,0.2)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                    (e.currentTarget as HTMLDivElement).style.boxShadow = "";
                  }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={PORTRAIT_IMG}
                      alt={bio.name}
                      className="w-full h-full object-cover opacity-50"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-5">
                      <div className="text-4xl">{bio.emoji}</div>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="bg-white/20 backdrop-blur text-white text-xs font-semibold px-3 py-1 rounded-full">
                        {bio.role}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3
                      className="text-2xl font-bold mb-1 leading-tight"
                      style={{ fontFamily: "'Cormorant', serif" }}
                    >
                      {bio.name}
                    </h3>
                    <div className="text-white/60 text-sm mb-5">{bio.years}</div>

                    <ul className="space-y-2 mb-5">
                      {bio.facts.map((fact, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-white/90">
                          <span className="text-amber-300 mt-0.5 flex-shrink-0">✦</span>
                          <span>{fact}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="border-t border-white/20 pt-4">
                      <p
                        className="text-lg text-amber-200 leading-snug"
                        style={{ fontFamily: "'Cormorant', serif", fontStyle: "italic" }}
                      >
                        {bio.quote}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Ships card */}
            <div className="rounded-3xl overflow-hidden shadow-xl relative">
              <img src={SHIP_IMG} alt="Корабли экспедиции" className="w-full h-64 object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/30 to-transparent flex items-end">
                <div className="p-8 text-white">
                  <h3
                    className="text-3xl font-bold mb-2"
                    style={{ fontFamily: "'Cormorant', serif" }}
                  >
                    «Восток» и «Мирный»
                  </h3>
                  <p className="text-slate-200 max-w-2xl text-sm leading-relaxed">
                    Два шлюпа — главные инструменты великого открытия. Вместе они прошли путь длиной в два витка вокруг Земли
                    и навсегда вписали Россию в историю географических открытий.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ACHIEVEMENTS SECTION */}
        {activeSection === "achievements" && (
          <div style={{ animation: "sectionFade 0.6s ease forwards" }}>
            <h2
              className="text-4xl font-bold text-center text-slate-800 mb-2"
              style={{ fontFamily: "'Cormorant', serif" }}
            >
              Достижения и открытия
            </h2>
            <p className="text-center text-slate-500 mb-12 text-sm">
              Что привезла домой легендарная экспедиция
            </p>

            {/* Main hero card */}
            <div
              className="rounded-3xl p-8 mb-10 text-white text-center shadow-2xl relative overflow-hidden"
              style={{ background: "linear-gradient(135deg, #071e38 0%, #0f4c7a 50%, #0b7a8c 100%)" }}
            >
              <div
                className="absolute inset-0 opacity-15"
                style={{ backgroundImage: `url(${MAP_IMG})`, backgroundSize: "cover", backgroundPosition: "center" }}
              />
              <div className="relative z-10">
                <div
                  className="text-7xl mb-4 inline-block"
                  style={{ animation: "float 6s ease-in-out infinite" }}
                >
                  🌨️
                </div>
                <h3
                  className="text-4xl md:text-5xl font-bold mb-3"
                  style={{ fontFamily: "'Cormorant', serif" }}
                >
                  Открытие Антарктиды
                </h3>
                <p className="text-2xl text-amber-300 font-bold mb-3">16 января 1820 года</p>
                <p className="text-blue-100 text-base max-w-2xl mx-auto leading-relaxed">
                  Россия подарила миру шестой континент. Беллинсгаузен и Лазарев стали первыми людьми,
                  увидевшими ледяные берега неизведанного материка.
                </p>
                <div
                  className="mt-6 inline-flex items-center gap-2 bg-amber-400 text-blue-900 px-6 py-3 rounded-full font-bold text-sm"
                  style={{ position: "relative", overflow: "hidden" }}
                >
                  <span>🥇</span> Мировое первооткрытие
                </div>
              </div>
            </div>

            {/* Achievement cards */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
              {achievements.map((item, i) => (
                <div
                  key={i}
                  className={`rounded-2xl p-5 text-white bg-gradient-to-br ${item.color} shadow-lg`}
                  style={{ transition: "transform 0.3s ease, box-shadow 0.3s ease" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.transform = "translateY(-5px)";
                    (e.currentTarget as HTMLDivElement).style.boxShadow = "0 16px 32px rgba(0,0,0,0.2)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                    (e.currentTarget as HTMLDivElement).style.boxShadow = "";
                  }}
                >
                  <div className="text-4xl mb-3">{item.emoji}</div>
                  <h4 className="font-bold text-base leading-tight mb-1">{item.title}</h4>
                  <p className="text-white/75 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Fun facts */}
            <div className="bg-white rounded-3xl shadow-lg p-8">
              <h3
                className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2"
                style={{ fontFamily: "'Cormorant', serif" }}
              >
                <span>💡</span> Интересные факты
              </h3>
              <div className="space-y-3">
                {[
                  { icon: "🏝️", text: "Открытые острова были названы в честь русских побед: Бородино, Малоярославец, Смоленск и другие." },
                  { icon: "🌡️", text: "Температура воздуха у берегов Антарктиды опускалась до -20°C. Моряки не имели специального снаряжения." },
                  { icon: "📏", text: "Беллинсгаузен приближался к Антарктиде трижды, каждый раз всё ближе — на 20, 15 и 9 морских миль." },
                  { icon: "🐦", text: "Экспедиция привезла в Россию первые образцы антарктических горных пород и описания местных животных." },
                  { icon: "📚", text: "В 1831 году Беллинсгаузен опубликовал двухтомный отчёт об экспедиции с атласом карт и рисунков." },
                ].map((fact, i) => (
                  <div
                    key={i}
                    className="flex gap-4 items-start p-4 rounded-xl bg-slate-50"
                    style={{ transition: "background 0.2s" }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLDivElement).style.background = "#eff6ff")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLDivElement).style.background = "")}
                  >
                    <span className="text-2xl flex-shrink-0">{fact.icon}</span>
                    <p className="text-slate-700 leading-relaxed text-sm">{fact.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer
        className="mt-16 py-10 text-center"
        style={{ background: "linear-gradient(160deg, #071e38, #0f3d6b)" }}
      >
        <div className="text-3xl mb-2">🧭</div>
        <p className="text-blue-200 text-sm">Образовательный портал об экспедиции Беллинсгаузена и Лазарева</p>
        <p className="text-blue-500 text-xs mt-1">1819 – 1821 · Первая русская антарктическая экспедиция</p>
      </footer>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        @keyframes sectionFade {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
