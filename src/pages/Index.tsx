import { useState } from "react";

const MAP_IMG = "https://cdn.poehali.dev/projects/20a6d562-3a18-4eff-b072-b18ba338a389/files/529f46bc-3294-4555-82d4-512866851199.jpg";
const SHIP_IMG = "https://cdn.poehali.dev/projects/20a6d562-3a18-4eff-b072-b18ba338a389/files/8be8e171-e22d-42a4-a441-eebc7e56f80e.jpg";
const SHIP2_IMG = "https://cdn.poehali.dev/projects/20a6d562-3a18-4eff-b072-b18ba338a389/files/eb929c83-833b-4aa2-b43a-fbd29c0a0a2c.jpg";
const BELLINGSHAUSEN_IMG = "https://cdn.poehali.dev/projects/20a6d562-3a18-4eff-b072-b18ba338a389/files/03c278d4-dc05-4575-9799-54a9929bef19.jpg";
const LAZAREV_IMG = "https://cdn.poehali.dev/projects/20a6d562-3a18-4eff-b072-b18ba338a389/files/5e0bfef7-4564-446b-905c-e8c97a454a9a.jpg";
const ROUTE_IMG = "https://cdn.poehali.dev/projects/20a6d562-3a18-4eff-b072-b18ba338a389/files/da4054f9-1c47-4ade-ab42-65ece0d84353.jpg";
const ANTARCTICA_IMG = "https://cdn.poehali.dev/projects/20a6d562-3a18-4eff-b072-b18ba338a389/files/89ef37e1-bcf2-49c3-90e7-7e323dcd58b1.jpg";

const contents = [
  { num: "1", title: "Введение", anchor: "intro" },
  { num: "2", title: "Биографии командиров", anchor: "bio" },
  { num: "3", title: "Предшествующие путешествия", anchor: "prev" },
  { num: "4", title: "Подготовка и отплытие", anchor: "prep" },
  { num: "5", title: "Ход экспедиции и открытия", anchor: "expedition" },
  { num: "6", title: "Хронология", anchor: "timeline" },
  { num: "7", title: "Достижения и находки", anchor: "achievements" },
  { num: "8", title: "Заключение", anchor: "conclusion" },
  { num: "9", title: "Список литературы", anchor: "literature" },
];

const timelineEvents = [
  { year: "1778", title: "Рождение Беллинсгаузена", description: "Фаддей Фаддеевич Беллинсгаузен родился на острове Эзель (Сааремаа) в семье прибалтийских немцев. С детства мечтал о море и в 10 лет поступил в Кронштадтский морской корпус.", icon: "⭐", color: "bg-blue-50 border-blue-200", highlight: false },
  { year: "1788", title: "Рождение Лазарева", description: "Михаил Петрович Лазарев родился во Владимирской губернии. В 14 лет поступил в Морской кадетский корпус и уже в юности проявил незаурядные способности морского офицера.", icon: "⚓", color: "bg-teal-50 border-teal-200", highlight: false },
  { year: "1803–1806", title: "Кругосветка Крузенштерна", description: "Беллинсгаузен участвует в первой русской кругосветной экспедиции под командованием Крузенштерна. Составляет точные карты, которые вошли в атлас Южного океана. Опыт стал фундаментом будущего великого открытия.", icon: "🌍", color: "bg-amber-50 border-amber-200", highlight: false },
  { year: "1815–1818", title: "Кругосветное плавание Лазарева", description: "Лазарев совершает первое самостоятельное кругосветное плавание на шлюпе «Суворов», доставив грузы в Русскую Америку (Аляску). Плавание закалило его как командира и навигатора.", icon: "🚢", color: "bg-green-50 border-green-200", highlight: false },
  { year: "1819", title: "Подготовка экспедиции", description: "По указу Александра I снаряжается экспедиция. Командиром назначен Беллинсгаузен, его помощником — Лазарев. Шлюпы оснащены лучшими навигационными приборами эпохи.", icon: "📜", color: "bg-purple-50 border-purple-200", highlight: false },
  { year: "4 июля 1819", title: "Отплытие из Кронштадта", description: "«Восток» и «Мирный» торжественно покидают Кронштадт. На борту — 190 моряков, учёные, художники. Первая остановка — Копенгаген, затем Лондон, далее — на юг через Атлантику.", icon: "⛵", color: "bg-blue-50 border-blue-200", highlight: false },
  { year: "Декабрь 1819", title: "Остров Южная Георгия", description: "Экспедиция обследует острова Южная Георгия и Южные Сандвичевы острова, ранее открытые Куком. Беллинсгаузен уточняет их положение и очертания, исправляя английские карты.", icon: "🏝️", color: "bg-teal-50 border-teal-200", highlight: false },
  { year: "16 января 1820", title: "🏆 Открытие Антарктиды", description: "Суда подходят к ледяному берегу. Беллинсгаузен записывает в журнале: «Мы встретили льды, которые простирались к востоку и западу». Русские моряки первыми в мире видят берега шестого континента.", icon: "🌨️", color: "bg-indigo-50 border-indigo-400", highlight: true },
  { year: "Март – октябрь 1820", title: "Зимовка в Австралии", description: "Экспедиция уходит в Порт-Джэксон (Сидней) на ремонт и пополнение запасов. Составляются отчёты, художник Михайлов создаёт зарисовки. Осенью корабли снова идут на юг.", icon: "🦘", color: "bg-orange-50 border-orange-200", highlight: false },
  { year: "Январь 1821", title: "Открытие острова Петра I", description: "Экспедиция открывает остров Петра I — первую сушу к югу от Южного полярного круга, увиденную человеком. Остров назван в честь основателя российского флота.", icon: "🗻", color: "bg-blue-50 border-blue-200", highlight: false },
  { year: "Январь 1821", title: "Берег Александра I", description: "Открыт Берег Александра I — крупный участок антарктического побережья. Экспедиция впервые видит твёрдую антарктическую землю с близкого расстояния.", icon: "🏔️", color: "bg-indigo-50 border-indigo-200", highlight: false },
  { year: "24 июля 1821", title: "Триумфальное возвращение", description: "После 751 дня плавания экспедиция возвращается в Кронштадт. Пройдено более 92 000 км. Моряков встречают с почестями. Россия навсегда вписала своё имя в историю мировых открытий.", icon: "🎉", color: "bg-amber-50 border-amber-200", highlight: false },
];

const achievements = [
  { emoji: "🏔️", title: "Открытие Антарктиды", desc: "Шестой континент открыт 16 января 1820 года", color: "from-blue-600 to-blue-800" },
  { emoji: "🗺️", title: "29 новых островов", desc: "Нанесены на карту в ходе экспедиции", color: "from-teal-600 to-teal-800" },
  { emoji: "🌊", title: "92 000 км пути", desc: "Пройдено за 751 день плавания", color: "from-indigo-600 to-indigo-800" },
  { emoji: "🐧", title: "Описание фауны", desc: "Впервые описаны пингвины, тюлени, птицы", color: "from-cyan-600 to-cyan-800" },
  { emoji: "📍", title: "Точные карты", desc: "Детальные карты южных морей и побережья", color: "from-purple-600 to-purple-800" },
  { emoji: "🏆", title: "Мировой рекорд", desc: "Дальше всех прошли к Южному полюсу", color: "from-amber-600 to-amber-800" },
];

const literature = [
  { num: 1, text: "Беллинсгаузен Ф. Ф. Двукратные изыскания в Южном Ледовитом океане и плавание вокруг света в продолжение 1819, 20 и 21 годов. — СПб., 1831. — Т. 1–2." },
  { num: 2, text: "Пасецкий В. М. Фаддей Фаддеевич Беллинсгаузен. — М.: Наука, 1993. — 208 с." },
  { num: 3, text: "Невский В. В. Первое путешествие россиян вокруг света. — М.: Географгиз, 1951. — 272 с." },
  { num: 4, text: "Фрадкин Н. Г. Географические открытия и научное познание Земли. — М.: Мысль, 1972. — С. 118–135." },
  { num: 5, text: "Магидович И. П., Магидович В. И. Очерки по истории географических открытий. — М.: Просвещение, 1985. — Т. 4." },
  { num: 6, text: "Корякин В. С. Антарктида: история открытия и изучения. — М.: Мысль, 1985. — 160 с." },
  { num: 7, text: "Лазарев М. П. Документы. — М.: Воениздат, 1952. — Т. 1. — 480 с." },
  { num: 8, text: "Симченко Ю. Б. Россия открывает Антарктиду. — М.: Наука, 1978. — 128 с." },
];

const scrollTo = (id: string) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

const H2 = ({ children }: { children: React.ReactNode }) => (
  <h2 style={{ fontFamily: "'Cormorant', serif", fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 700, color: "#1e293b", lineHeight: 1.2, marginBottom: "1rem" }}>{children}</h2>
);

const Label = ({ children }: { children: React.ReactNode }) => (
  <div style={{ fontSize: "0.7rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", color: "#3b82f6", marginBottom: "0.5rem" }}>{children}</div>
);

const P = ({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) => (
  <p style={{ color: "#475569", lineHeight: 1.85, marginBottom: "1rem", ...style }}>{children}</p>
);

export default function Index() {
  const [openEvent, setOpenEvent] = useState<number | null>(null);

  return (
    <div className="min-h-screen" style={{ background: "#f0f7ff" }}>

      {/* ===== HERO ===== */}
      <header className="relative overflow-hidden text-white" style={{ background: "linear-gradient(160deg, #071e38 0%, #0f3d6b 45%, #0b5c7a 100%)" }}>
        <div className="absolute inset-0 opacity-40" style={{ backgroundImage: `radial-gradient(circle at 8% 15%, rgba(255,255,255,0.8) 1px, transparent 1px), radial-gradient(circle at 88% 8%, rgba(255,255,255,0.7) 1.5px, transparent 1.5px), radial-gradient(circle at 42% 55%, rgba(255,255,255,0.5) 1px, transparent 1px), radial-gradient(circle at 68% 75%, rgba(255,255,255,0.5) 1px, transparent 1px), radial-gradient(circle at 22% 88%, rgba(255,255,255,0.4) 1.5px, transparent 1.5px), radial-gradient(circle at 93% 42%, rgba(255,255,255,0.6) 1px, transparent 1px)`, backgroundSize: "500px 500px" }} />
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url(${MAP_IMG})`, backgroundSize: "cover", backgroundPosition: "center", mixBlendMode: "luminosity" }} />
        <div className="relative z-10 max-w-4xl mx-auto px-6 py-20 text-center">
          <div className="text-6xl mb-5 inline-block" style={{ animation: "float 6s ease-in-out infinite" }}>🧭</div>
          <h1 style={{ fontFamily: "'Cormorant', serif", textShadow: "0 2px 24px rgba(0,0,0,0.5)", fontSize: "clamp(2.5rem, 7vw, 5rem)", fontWeight: 700, lineHeight: 1.1, marginBottom: "0.75rem" }}>
            Экспедиция к Антарктиде
          </h1>
          <p style={{ fontFamily: "'Cormorant', serif", fontStyle: "italic", fontSize: "clamp(1.25rem, 3vw, 1.75rem)", color: "#93c5fd", marginBottom: "1rem" }}>
            1819 – 1821 · Беллинсгаузен и Лазарев
          </p>
          <p style={{ color: "#bfdbfe", fontSize: "1.05rem", maxWidth: 600, margin: "0 auto 2rem", lineHeight: 1.7, opacity: 0.9 }}>
            Образовательный портал о великом открытии русских мореплавателей — первооткрывателей шестого континента нашей планеты
          </p>
        </div>
        <div style={{ overflow: "hidden", lineHeight: 0 }}>
          <svg viewBox="0 0 1440 60" style={{ display: "block" }}>
            <path d="M0 30 C360 60 1080 0 1440 30 L1440 60 L0 60 Z" fill="#f0f7ff" />
          </svg>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4">

        {/* ===== СОДЕРЖАНИЕ ===== */}
        <section className="py-12">
          <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
            <div className="px-8 py-6 border-b border-slate-100" style={{ background: "linear-gradient(135deg, #071e38, #0f3d6b)" }}>
              <h2 style={{ fontFamily: "'Cormorant', serif", fontSize: "1.75rem", fontWeight: 700, color: "white" }}>
                📋 Содержание
              </h2>
            </div>
            <div className="px-8 py-6">
              <ol className="space-y-1">
                {contents.map((item) => (
                  <li key={item.anchor}>
                    <button
                      onClick={() => scrollTo(item.anchor)}
                      className="w-full text-left flex items-center gap-3 py-2.5 px-3 rounded-xl group"
                      style={{ transition: "background 0.2s" }}
                      onMouseEnter={e => (e.currentTarget.style.background = "#eff6ff")}
                      onMouseLeave={e => (e.currentTarget.style.background = "")}
                    >
                      <span style={{ minWidth: 28, height: 28, borderRadius: "50%", background: "#1e3a5f", color: "white", fontSize: "0.75rem", fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{item.num}</span>
                      <span style={{ color: "#1e40af", fontWeight: 500, fontSize: "0.95rem" }}>{item.title}</span>
                      <span style={{ marginLeft: "auto", color: "#94a3b8", fontSize: "0.8rem" }}>↓</span>
                    </button>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* ===== ВВЕДЕНИЕ ===== */}
        <section id="intro" className="py-12 scroll-mt-8">
          <div className="grid md:grid-cols-2 gap-8 items-center mb-10">
            <div>
              <Label>1 · Введение</Label>
              <H2>Россия открыла миру шестой континент</H2>
              <P>
                На рубеже XVIII–XIX веков ведущие морские державы мира — Англия, Франция, Испания — активно
                исследовали просторы Мирового океана. Многие учёные предполагали существование огромного
                материка в южных широтах, однако никто ещё не видел его берегов.
              </P>
              <P>
                В 1819 году Россия снарядила экспедицию, которая навсегда изменила карту мира. Под командованием
                опытных морских офицеров Фаддея Беллинсгаузена и Михаила Лазарева два шлюпа отправились
                в самое сердце южных морей — туда, куда ещё не ступала нога человека.
              </P>
              <P>
                16 января 1820 года русские моряки первыми в истории увидели берега Антарктиды.
                Это открытие стало венцом эпохи великих географических открытий и одним из
                самых значимых достижений России в мировой науке.
              </P>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img src={SHIP_IMG} alt="Корабли экспедиции" className="w-full h-80 object-cover" />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {[
              { icon: "📅", label: "Годы экспедиции", val: "1819 – 1821" },
              { icon: "🚢", label: "Количество судов", val: "2 шлюпа" },
              { icon: "👥", label: "Экипаж", val: "около 190 человек" },
            ].map((s, i) => (
              <div key={i} className="rounded-2xl p-5 text-center bg-white shadow-md">
                <div className="text-3xl mb-2">{s.icon}</div>
                <div style={{ fontSize: "0.75rem", color: "#94a3b8", marginBottom: 4 }}>{s.label}</div>
                <div style={{ fontWeight: 700, color: "#1e293b", fontSize: "1.05rem" }}>{s.val}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ===== БИОГРАФИИ ===== */}
        <section id="bio" className="py-12 scroll-mt-8">
          <Label>2 · Биографии командиров</Label>
          <H2>Герои экспедиции</H2>

          {/* Bellingshausen */}
          <div className="grid md:grid-cols-2 gap-8 items-start mb-14">
            <div className="rounded-3xl overflow-hidden shadow-xl">
              <img src={BELLINGSHAUSEN_IMG} alt="Беллинсгаузен" className="w-full h-96 object-cover object-top" />
            </div>
            <div className="py-2">
              <div style={{ fontSize: "0.7rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", color: "#0d9488", marginBottom: 6 }}>Командир экспедиции</div>
              <h3 style={{ fontFamily: "'Cormorant', serif", fontSize: "1.9rem", fontWeight: 700, color: "#1e293b", lineHeight: 1.2, marginBottom: 4 }}>Фаддей Фаддеевич Беллинсгаузен</h3>
              <p style={{ color: "#64748b", fontSize: "0.85rem", marginBottom: "1rem" }}>1778 – 1852 · Адмирал российского флота</p>
              <P>Родился на острове Эзель (ныне Сааремаа, Эстония) в семье прибалтийских дворян. Воспитывался в Морском кадетском корпусе в Кронштадте. Уже в молодые годы выделялся среди сверстников педантичностью и математическими способностями.</P>
              <P>В 1803–1806 годах участвовал в первом русском кругосветном плавании под командованием Крузенштерна, где составил точные карты. После экспедиции дослужился до капитан-командора и заслужил репутацию лучшего картографа России.</P>
              <ul className="space-y-1.5 mb-5">
                {["Участник экспедиции Крузенштерна (1803–1806)", "Превосходный картограф и учёный-натуралист", "Дослужился до звания адмирала (1843)", "Автор двухтомного отчёта об экспедиции"].map((f, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm" style={{ color: "#334155" }}><span style={{ color: "#f59e0b", marginTop: 2, flexShrink: 0 }}>✦</span>{f}</li>
                ))}
              </ul>
              <div className="rounded-2xl p-4" style={{ background: "linear-gradient(135deg, #1e3a5f, #1e6085)" }}>
                <p style={{ fontFamily: "'Cormorant', serif", fontStyle: "italic", fontSize: "1.15rem", color: "#fde68a", lineHeight: 1.5 }}>«Открытие есть плод терпения и упорного труда»</p>
              </div>
            </div>
          </div>

          {/* Lazarev */}
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="order-2 md:order-1 py-2">
              <div style={{ fontSize: "0.7rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", color: "#2563eb", marginBottom: 6 }}>Командир шлюпа «Мирный»</div>
              <h3 style={{ fontFamily: "'Cormorant', serif", fontSize: "1.9rem", fontWeight: 700, color: "#1e293b", lineHeight: 1.2, marginBottom: 4 }}>Михаил Петрович Лазарев</h3>
              <p style={{ color: "#64748b", fontSize: "0.85rem", marginBottom: "1rem" }}>1788 – 1851 · Адмирал российского флота</p>
              <P>Родился во Владимирской губернии. В 1800 году поступил в Морской кадетский корпус, окончил его с отличием и был направлен на стажировку в британский флот. Служил на английских судах несколько лет, приобретя бесценный опыт в трудных океанских плаваниях.</P>
              <P>В 1813–1816 годах командовал шлюпом «Суворов» и совершил своё первое кругосветное плавание. Во время антарктической экспедиции его «Мирный» нередко опережал «Восток» в опасных ледовых условиях — Лазарев виртуозно управлял судном.</P>
              <ul className="space-y-1.5 mb-5">
                {["Три кругосветных плавания", "Герой Наваринского сражения (1827)", "Главный командир Черноморского флота (1833–1851)", "Воспитал Нахимова, Корнилова и Истомина"].map((f, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm" style={{ color: "#334155" }}><span style={{ color: "#0d9488", marginTop: 2, flexShrink: 0 }}>✦</span>{f}</li>
                ))}
              </ul>
              <div className="rounded-2xl p-4" style={{ background: "linear-gradient(135deg, #134e4a, #0e7490)" }}>
                <p style={{ fontFamily: "'Cormorant', serif", fontStyle: "italic", fontSize: "1.15rem", color: "#fde68a", lineHeight: 1.5 }}>«Море — лучший учитель мужества»</p>
              </div>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-xl order-1 md:order-2">
              <img src={LAZAREV_IMG} alt="Лазарев" className="w-full h-96 object-cover object-top" />
            </div>
          </div>
        </section>

        {/* ===== ПРЕДШЕСТВУЮЩИЕ ПУТЕШЕСТВИЯ ===== */}
        <section id="prev" className="py-12 scroll-mt-8">
          <Label>3 · Предшествующие путешествия</Label>
          <H2>На пути к великому открытию</H2>
          <div className="grid md:grid-cols-2 gap-8 items-start mb-10">
            <div>
              <P>Задолго до русской экспедиции многие мореплаватели искали «Южный материк». В 1772–1775 годах английский капитан Джеймс Кук трижды пересёк Южный полярный круг, но так и не увидел берегов Антарктиды — густые льды и туман остановили его.</P>
              <P>Кук заявил, что земля к югу от 58° ю. ш. «никогда не будет исследована» и не представляет ценности. Это надолго охладило интерес европейцев к южным морям. Но русские учёные думали иначе.</P>
              <P>Морской министр России де Траверсе и учёный Крузенштерн настояли на новой попытке. Они верили: загадочный материк существует, и именно Россия должна его открыть. Экспедицию решили снарядить по высшему разряду — лучшие суда, лучшие офицеры, лучшие приборы.</P>
            </div>
            <div className="space-y-3">
              {[
                { year: "1772–1775", who: "Джеймс Кук (Англия)", what: "Три пересечения Южного полярного круга. Дошёл до 71°10' ю. ш., но льды не пустили дальше. Объявил, что материка нет." },
                { year: "1803–1806", who: "Крузенштерн и Лисянский (Россия)", what: "Первая русская кругосветная экспедиция. Беллинсгаузен — участник, составляет атлас южных вод." },
                { year: "1815–1818", who: "Лазарев (Россия)", what: "Кругосветное плавание на «Суворове» в Русскую Америку. Бесценный опыт управления судном в сложных условиях." },
                { year: "1817–1818", who: "Смит и Брэнсфилд (Англия)", what: "Открыли Южные Шетландские острова — первые земли к югу от Антарктического полуострова." },
              ].map((row, i) => (
                <div key={i} className="rounded-2xl bg-white shadow-sm p-4 flex gap-4 items-start"
                  style={{ transition: "box-shadow 0.2s" }}
                  onMouseEnter={e => (e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,60,120,0.1)")}
                  onMouseLeave={e => (e.currentTarget.style.boxShadow = "")}>
                  <div style={{ minWidth: 64, fontSize: "0.72rem", fontWeight: 700, color: "#3b82f6", background: "#eff6ff", borderRadius: 8, padding: "4px 8px", textAlign: "center", marginTop: 2, flexShrink: 0 }}>{row.year}</div>
                  <div>
                    <div style={{ fontWeight: 600, color: "#1e293b", fontSize: "0.9rem", marginBottom: 2 }}>{row.who}</div>
                    <div style={{ color: "#64748b", fontSize: "0.85rem", lineHeight: 1.6 }}>{row.what}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== ПОДГОТОВКА ===== */}
        <section id="prep" className="py-12 scroll-mt-8">
          <Label>4 · Подготовка и отплытие</Label>
          <H2>Снаряжение экспедиции</H2>
          <div className="grid md:grid-cols-2 gap-8 items-center mb-10">
            <div className="rounded-3xl overflow-hidden shadow-xl">
              <img src={ROUTE_IMG} alt="Маршрут экспедиции" className="w-full h-72 object-cover" />
            </div>
            <div>
              <P>Подготовка к экспедиции заняла несколько месяцев. Шлюп «Восток» был специально построен для полярных плаваний, «Мирный» — переоборудован из транспортного судна. Оба корабля усилили обшивку корпуса для защиты от льдов.</P>
              <P>На борту разместили лучшие навигационные приборы эпохи: хронометры, секстанты, барометры. Экипаж пополнили учёные-натуралисты и художник Павел Михайлов, который создал около 200 рисунков во время плавания.</P>
              <P>Маршрут пролегал через Атлантику, мимо берегов Бразилии, далее на юг к Южным Сандвичевым островам и к антарктическому кругу. Экспедиции предстояло пройти дальше, чем кому-либо до неё.</P>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { icon: "⛵", label: "«Восток»", val: "600 тонн, 117 чел." },
              { icon: "🚢", label: "«Мирный»", val: "530 тонн, 73 чел." },
              { icon: "🧰", label: "Запасов", val: "на 2 года" },
              { icon: "🔭", label: "Приборов", val: "более 40 единиц" },
            ].map((s, i) => (
              <div key={i} className="bg-white rounded-2xl p-4 text-center shadow-sm">
                <div className="text-3xl mb-2">{s.icon}</div>
                <div style={{ fontSize: "0.75rem", color: "#94a3b8", marginBottom: 2 }}>{s.label}</div>
                <div style={{ fontWeight: 700, color: "#1e293b", fontSize: "0.95rem" }}>{s.val}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ===== ХОД ЭКСПЕДИЦИИ ===== */}
        <section id="expedition" className="py-12 scroll-mt-8">
          <Label>5 · Ход экспедиции и открытия</Label>
          <H2>Путь сквозь льды и штормы</H2>

          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div>
              <P>4 июля 1819 года «Восток» и «Мирный» вышли из Кронштадта. Путь лежал на юг через Атлантику. В ноябре 1819 года суда достигли острова Южная Георгия — мрачного клочка суши, продуваемого ледяными ветрами.</P>
              <P>Беллинсгаузен уточнил карты острова, исправив многочисленные ошибки в британских картах Кука. Затем экспедиция двинулась ещё южнее. Льды становились всё плотнее, туман — всё гуще, морозы — всё сильнее.</P>
              <P>16 января 1820 года в журнале «Востока» появилась историческая запись: суда встретили «льдяной материк», простирающийся до горизонта. Это был берег Антарктиды — земли, которую ещё не видел ни один человек.</P>
            </div>
            <div>
              <P>В марте 1820 года из-за наступления антарктической зимы экспедиция отступила в австралийский Порт-Джэксон (Сидней). Там провели ремонт, пополнили припасы, обработали собранные материалы.</P>
              <P>Осенью 1820 года корабли снова устремились к Антарктиде. На этот раз им сопутствовала удача: в январе 1821 года был открыт остров Петра I — первая суша, замеченная за Южным полярным кругом. Затем последовало открытие Берега Александра I.</P>
              <P>Экспедиция трижды обошла Антарктиду, открыла 29 островов, составила точные карты и собрала богатейший научный материал. 24 июля 1821 года «Восток» и «Мирный» с триумфом вернулись в Кронштадт.</P>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-2xl relative mb-10">
            <img src={ANTARCTICA_IMG} alt="Антарктида" className="w-full h-80 object-cover" />
            <div className="absolute inset-0 flex items-end" style={{ background: "linear-gradient(to top, rgba(7,30,56,0.88) 0%, rgba(7,30,56,0.2) 60%, transparent 100%)" }}>
              <div className="p-8 text-white">
                <h3 style={{ fontFamily: "'Cormorant', serif", fontSize: "1.8rem", fontWeight: 700, marginBottom: "0.4rem" }}>Антарктида — земля вечного льда</h3>
                <p style={{ color: "#bfdbfe", fontSize: "0.9rem", maxWidth: 520, lineHeight: 1.7 }}>Шестой континент площадью 14 млн км² скрыт под километровым слоем льда. Средняя температура зимой — около −60°C. Русские моряки первыми в мире увидели это величественное и суровое место.</p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-2xl relative">
            <img src={SHIP2_IMG} alt="Шлюпы во льдах" className="w-full h-72 object-cover" />
            <div className="absolute inset-0 flex items-end" style={{ background: "linear-gradient(to top, rgba(7,30,56,0.88) 0%, rgba(7,30,56,0.2) 60%, transparent 100%)" }}>
              <div className="p-8 text-white">
                <h3 style={{ fontFamily: "'Cormorant', serif", fontSize: "1.8rem", fontWeight: 700, marginBottom: "0.4rem" }}>«Восток» и «Мирный» среди льдов</h3>
                <p style={{ color: "#bfdbfe", fontSize: "0.9rem", maxWidth: 520, lineHeight: 1.7 }}>Деревянные суда без ледокольного оборудования противостояли айсбергам высотой с пятиэтажный дом. Только мастерство и мужество экипажей позволило пройти там, где другие отступали.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ===== ХРОНОЛОГИЯ ===== */}
        <section id="timeline" className="py-12 scroll-mt-8">
          <Label>6 · Хронология</Label>
          <H2>Ключевые события экспедиции</H2>

          <div className="relative">
            <div className="hidden md:block absolute top-0 bottom-0 w-0.5 z-0" style={{ left: "50%", transform: "translateX(-50%)", background: "linear-gradient(to bottom, #2563eb, #0d9488)" }} />
            <div className="space-y-5">
              {timelineEvents.map((ev, i) => (
                <div key={i} className={`flex items-start gap-4 md:gap-0 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  <div className={`w-full md:w-5/12 ${i % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8"}`}>
                    <div
                      className={`rounded-2xl border-2 p-5 cursor-pointer ${ev.color} ${ev.highlight ? "ring-2 ring-amber-400 shadow-xl" : "shadow-sm"}`}
                      style={{ transition: "transform 0.25s, box-shadow 0.25s" }}
                      onClick={() => setOpenEvent(openEvent === i ? null : i)}
                      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 10px 24px rgba(0,60,120,0.12)"; }}
                      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = ""; (e.currentTarget as HTMLElement).style.boxShadow = ""; }}
                    >
                      <div className={`flex items-center gap-2 mb-1 ${i % 2 === 0 ? "md:justify-end" : ""}`}>
                        <span className="text-xl">{ev.icon}</span>
                        <span style={{ fontSize: "0.72rem", fontWeight: 700, background: "rgba(255,255,255,0.8)", color: "#475569", padding: "2px 10px", borderRadius: 20 }}>{ev.year}</span>
                      </div>
                      <h3 style={{ fontWeight: 700, color: ev.highlight ? "#3730a3" : "#1e293b", fontSize: "0.95rem", lineHeight: 1.4, marginBottom: 4 }}>{ev.title}</h3>
                      {openEvent === i
                        ? <p style={{ color: "#475569", fontSize: "0.85rem", lineHeight: 1.7 }}>{ev.description}</p>
                        : <p style={{ color: "#94a3b8", fontSize: "0.75rem" }}>Нажми, чтобы узнать подробнее →</p>
                      }
                    </div>
                  </div>
                  <div className="hidden md:flex w-2/12 justify-center items-start pt-5 z-10">
                    <div style={{ width: 18, height: 18, borderRadius: "50%", border: "4px solid white", background: ev.highlight ? "#f59e0b" : (openEvent === i ? "#6366f1" : "#3b82f6"), boxShadow: ev.highlight ? "0 0 0 4px rgba(245,158,11,0.3)" : "0 0 0 3px rgba(59,130,246,0.25)", transition: "all 0.3s" }} />
                  </div>
                  <div className="hidden md:block w-5/12" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== ДОСТИЖЕНИЯ ===== */}
        <section id="achievements" className="py-12 scroll-mt-8">
          <Label>7 · Достижения и находки</Label>
          <H2>Что открыла экспедиция</H2>

          <div className="rounded-3xl p-8 md:p-10 mb-8 text-white text-center relative overflow-hidden shadow-2xl" style={{ background: "linear-gradient(135deg, #071e38 0%, #0f4c7a 55%, #0b7a8c 100%)" }}>
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url(${MAP_IMG})`, backgroundSize: "cover" }} />
            <div className="relative z-10">
              <div className="text-6xl mb-3 inline-block" style={{ animation: "float 6s ease-in-out infinite" }}>🌨️</div>
              <h3 style={{ fontFamily: "'Cormorant', serif", fontSize: "clamp(1.75rem, 5vw, 3rem)", fontWeight: 700, marginBottom: "0.5rem" }}>Открытие Антарктиды</h3>
              <p style={{ fontSize: "1.35rem", color: "#fcd34d", fontWeight: 700, marginBottom: "0.5rem" }}>16 января 1820 года</p>
              <p style={{ color: "#bfdbfe", maxWidth: 540, margin: "0 auto 1.25rem", lineHeight: 1.75, fontSize: "0.95rem" }}>
                Россия подарила миру шестой континент. Беллинсгаузен и Лазарев стали первыми людьми, увидевшими ледяные берега неизведанного материка, и навсегда вписали имя России в мировую историю науки.
              </p>
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-sm" style={{ background: "#fbbf24", color: "#1e3a5f" }}>🥇 Мировое первооткрытие</div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            {achievements.map((item, i) => (
              <div key={i} className={`rounded-2xl p-5 text-white bg-gradient-to-br ${item.color} shadow-md`}
                style={{ transition: "transform 0.25s, box-shadow 0.25s" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 14px 30px rgba(0,0,0,0.18)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = ""; (e.currentTarget as HTMLElement).style.boxShadow = ""; }}>
                <div className="text-4xl mb-2">{item.emoji}</div>
                <h4 style={{ fontWeight: 700, fontSize: "0.95rem", marginBottom: 4 }}>{item.title}</h4>
                <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.82rem" }}>{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8">
            <h3 className="flex items-center gap-2 mb-5" style={{ fontFamily: "'Cormorant', serif", fontSize: "1.6rem", fontWeight: 700, color: "#1e293b" }}>
              <span>💡</span> Интересные факты
            </h3>
            <div className="space-y-3">
              {[
                { icon: "🏝️", text: "Открытые острова были названы в честь русских побед: Бородино, Малоярославец, Смоленск, Кутузов, Михайлов." },
                { icon: "🌡️", text: "Температура воздуха у берегов Антарктиды опускалась до −20°C. Моряки не имели специального снаряжения, как у полярников сегодня." },
                { icon: "📏", text: "Беллинсгаузен приближался к Антарктиде трижды — каждый раз всё ближе: на 20, 15 и 9 морских миль от берега." },
                { icon: "🐧", text: "Натуралисты экспедиции впервые описали и зарисовали антарктических пингвинов, морских слонов и различные виды буревестников." },
                { icon: "📚", text: "В 1831 году Беллинсгаузен опубликовал двухтомный научный отчёт «Двукратные изыскания в Южном Ледовитом океане» с атласом из 50 карт и рисунков." },
                { icon: "🪨", text: "Экспедиция собрала уникальные образцы горных пород и льда — первые антарктические геологические образцы в истории науки." },
              ].map((fact, i) => (
                <div key={i} className="flex gap-4 items-start p-4 rounded-xl"
                  style={{ background: "#f8fafc", transition: "background 0.2s" }}
                  onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = "#eff6ff")}
                  onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = "#f8fafc")}>
                  <span className="text-2xl flex-shrink-0">{fact.icon}</span>
                  <p style={{ color: "#475569", lineHeight: 1.7, fontSize: "0.9rem" }}>{fact.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== ЗАКЛЮЧЕНИЕ ===== */}
        <section id="conclusion" className="py-12 scroll-mt-8">
          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <div className="px-8 py-6 text-white" style={{ background: "linear-gradient(135deg, #071e38, #0f3d6b)" }}>
              <Label>8 · Заключение</Label>
              <H2><span style={{ color: "white" }}>Значение открытия для России и мира</span></H2>
            </div>
            <div className="bg-white px-8 py-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <P>Открытие Антарктиды экспедицией Беллинсгаузена и Лазарева стало одним из величайших событий в истории мировой географии. Россия не просто открыла новый континент — она доказала, что способна решать научные задачи мирового масштаба.</P>
                  <P>Участники экспедиции проявили исключительное мужество, профессионализм и преданность науке. Деревянные суда без современного оборудования прошли там, где останавливались лучшие моряки Европы.</P>
                  <P>Наследие экспедиции живёт по сей день: российские антарктические станции носят имена «Восток» и «Мирный», а 16 января в России отмечается как День открытия Антарктиды.</P>
                </div>
                <div>
                  <P>Научные результаты экспедиции оказались колоссальными. Были составлены точные карты южных морей, описаны десятки новых видов животных и растений, собраны геологические образцы.</P>
                  <P>Беллинсгаузен и Лазарев показали будущим поколениям пример того, как настойчивость, подготовка и командный дух позволяют достигать невозможного. Их имена навсегда вписаны в мировую историю исследований.</P>
                  <div className="rounded-2xl p-5 mt-4" style={{ background: "linear-gradient(135deg, #eff6ff, #dbeafe)", border: "1px solid #bfdbfe" }}>
                    <p style={{ fontFamily: "'Cormorant', serif", fontStyle: "italic", fontSize: "1.1rem", color: "#1e40af", lineHeight: 1.6 }}>
                      «Русские мореплаватели совершили одно из величайших открытий в истории географии, прославив своё отечество и обогатив науку»
                    </p>
                    <p style={{ color: "#64748b", fontSize: "0.78rem", marginTop: 6 }}>— Из оценок современников</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== ЛИТЕРАТУРА ===== */}
        <section id="literature" className="py-12 scroll-mt-8">
          <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
            <div className="px-8 py-6 border-b border-slate-100" style={{ background: "linear-gradient(135deg, #1e3a5f, #0f3d6b)" }}>
              <Label>9 · Список используемой литературы</Label>
              <H2><span style={{ color: "white" }}>Источники</span></H2>
            </div>
            <div className="px-8 py-6">
              <ol className="space-y-4">
                {literature.map((item) => (
                  <li key={item.num} className="flex gap-4 items-start p-4 rounded-xl"
                    style={{ background: "#f8fafc", transition: "background 0.2s" }}
                    onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = "#eff6ff")}
                    onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = "#f8fafc")}>
                    <span style={{ minWidth: 32, height: 32, borderRadius: "50%", background: "#1e3a5f", color: "white", fontSize: "0.8rem", fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{item.num}</span>
                    <p style={{ color: "#334155", lineHeight: 1.7, fontSize: "0.9rem" }}>{item.text}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* Кнопка наверх */}
        <div className="text-center pb-10">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white text-sm shadow-lg"
            style={{ background: "linear-gradient(135deg, #0f3d6b, #0b5c7a)", transition: "opacity 0.2s" }}
            onMouseEnter={e => ((e.currentTarget as HTMLElement).style.opacity = "0.85")}
            onMouseLeave={e => ((e.currentTarget as HTMLElement).style.opacity = "1")}
          >
            ↑ Вернуться к содержанию
          </button>
        </div>

      </div>

      {/* ===== FOOTER ===== */}
      <footer className="py-10 text-center" style={{ background: "linear-gradient(160deg, #071e38, #0f3d6b)" }}>
        <div className="text-3xl mb-2">🧭</div>
        <p style={{ color: "#93c5fd", fontSize: "0.9rem" }}>Образовательный портал об экспедиции Беллинсгаузена и Лазарева</p>
        <p style={{ color: "#3b82f6", fontSize: "0.75rem", marginTop: 4 }}>1819 – 1821 · Первая русская антарктическая экспедиция</p>
      </footer>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
        html { scroll-behavior: smooth; }
      `}</style>
    </div>
  );
}
