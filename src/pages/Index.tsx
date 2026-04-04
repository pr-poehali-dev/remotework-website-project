import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/9a5a11e5-106d-4c07-89c0-21534e5eeeb9/files/b9a7b842-734e-430f-994f-68ea50c2554b.jpg";

const SPECIALTIES = [
  { id: 1, title: "Дизайнер", icon: "Palette", desc: "Создаёте логотипы, интерьеры, сайты и бренды. Работаете в Figma, Photoshop или Canva. Заказчики — со всего мира.", salary: "от 40 000 до 150 000 ₽/мес", color: "from-violet-600 to-purple-800", img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&q=80" },
  { id: 2, title: "Для мам в декрете", icon: "Heart", desc: "Освойте профессию, которая позволит работать из дома в удобное время — пока малыш спит. Без опыта и технических знаний.", salary: "от 25 000 до 70 000 ₽/мес", color: "from-rose-500 to-pink-700", img: "https://images.unsplash.com/photo-1493894473891-10fc1e5dbd22?w=400&q=80" },
  { id: 3, title: "Копирайтер", icon: "FileText", desc: "Пишете тексты для сайтов, соцсетей, рекламы и рассылок. Одна из самых лёгких профессий для старта — нужны только грамотность и усидчивость.", salary: "от 30 000 до 100 000 ₽/мес", color: "from-sky-500 to-blue-700", img: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=400&q=80" },
  { id: 4, title: "Маркетолог", icon: "TrendingUp", desc: "Запускаете рекламу, анализируете аудиторию, продвигаете бизнес в интернете. Востребован в любой компании.", salary: "от 60 000 до 200 000 ₽/мес", color: "from-orange-500 to-red-700", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80" },
  { id: 5, title: "Маркетплейсы", icon: "ShoppingBag", desc: "Управляете карточками товаров на Wildberries и Ozon: фото, описания, реклама, аналитика. Рынок растёт — специалистов не хватает.", salary: "от 50 000 до 180 000 ₽/мес", color: "from-emerald-500 to-teal-700", img: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=400&q=80" },
  { id: 6, title: "Нейросети", icon: "Cpu", desc: "Работаете с ChatGPT, Midjourney, Suno и другими AI-инструментами. Помогаете бизнесу автоматизировать задачи и экономить время.", salary: "от 50 000 до 160 000 ₽/мес", color: "from-indigo-500 to-blue-800", img: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=400&q=80" },
  { id: 7, title: "Повышение квалификации", icon: "GraduationCap", desc: "Уже работаете в своей сфере, но хотите зарабатывать больше? Прокачайте навыки и выйдите на новый уровень дохода.", salary: "+30–50% к текущей зарплате", color: "from-amber-500 to-yellow-700", img: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&q=80" },
  { id: 8, title: "Тестирование ПО", icon: "Bug", desc: "Проверяете приложения и сайты на ошибки до их выхода. Входной порог — низкий, обучение — быстрое, а спрос на рынке — стабильно высокий.", salary: "от 60 000 до 150 000 ₽/мес", color: "from-cyan-500 to-teal-800", img: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=400&q=80" },
  { id: 9, title: "Технический помощник", icon: "Wrench", desc: "Помогаете бизнесу с рутинными задачами: настройка CRM, работа с таблицами, техподдержка. Отличный старт в IT без написания кода.", salary: "от 35 000 до 90 000 ₽/мес", color: "from-slate-500 to-gray-800", img: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&q=80" },
];

const COURSES = [
  { id: 1, title: "Дизайнер интерьера", icon: "Palette", href: "https://best-trening.ru/?o=18039&w=154170&l=9", desc: "Научитесь создавать стильные интерьеры и получать заказы от клиентов по всей России онлайн.", color: "from-violet-600 to-purple-800", img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&q=80" },
  { id: 2, title: "Для мам в декрете", icon: "Heart", href: "https://best-trening.ru/?o=27381&w=154170&l=1", desc: "Освойте востребованную профессию и начните зарабатывать из дома, не выходя из декрета.", color: "from-rose-500 to-pink-700", img: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=400&q=80" },
  { id: 3, title: "Копирайтер", icon: "FileText", href: "https://best-trening.ru/?o=4042&w=154170&l=1", desc: "Пишите тексты для бизнеса и получайте стабильный доход. Подходит для старта без опыта.", color: "from-sky-500 to-blue-700", img: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&q=80" },
  { id: 4, title: "Маркетолог", icon: "TrendingUp", href: "https://best-trening.ru/?o=7400&w=154170&l=1", desc: "Освойте digital-маркетинг и помогайте бизнесу расти. Одна из самых высокооплачиваемых удалённых профессий.", color: "from-orange-500 to-red-700", img: "https://images.unsplash.com/photo-1533750516457-a7f992034fec?w=400&q=80" },
  { id: 5, title: "Маркетплейсы", icon: "ShoppingBag", href: "https://best-trening.ru/?o=32287&w=154170&l=2", desc: "Научитесь управлять продажами на Wildberries и Ozon. Рынок растёт — специалисты нарасхват.", color: "from-emerald-500 to-teal-700", img: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=400&q=80" },
  { id: 6, title: "Нейросети", icon: "Cpu", href: "https://best-trening.ru/?o=6949&w=154170&l=2", desc: "Работайте с ChatGPT, Midjourney и другими AI-инструментами. Навык, который ценится в любой профессии.", color: "from-indigo-500 to-blue-800", img: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=400&q=80" },
  { id: 7, title: "Повышение квалификации", icon: "GraduationCap", href: "https://best-trening.ru/?o=77132&w=154170&l=1", desc: "Углубите знания в своей сфере и выйдите на новый уровень дохода. Для уже работающих специалистов.", color: "from-amber-500 to-yellow-700", img: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&q=80" },
  { id: 8, title: "Тестирование ПО", icon: "Bug", href: "https://best-trening.ru/?o=54693&w=154170&l=4", desc: "Войдите в IT без программирования. QA-специалисты востребованы во всех IT-компаниях мира.", color: "from-cyan-500 to-teal-800", img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&q=80" },
  { id: 9, title: "Технический помощник", icon: "Wrench", href: "https://best-trening.ru/?o=8389&w=154170&l=1", desc: "Помогайте бизнесу с техническими задачами удалённо. Отличный старт в IT-карьере без кода.", color: "from-slate-500 to-gray-800", img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&q=80" },
];

const STEPS = [
  { num: "01", title: "Определите специальность", desc: "Проанализируйте свои навыки и интересы. Изучите наш список специальностей и выберите направление, которое подходит вам." },
  { num: "02", title: "Пройдите обучение", desc: "Выберите курсы для получения необходимых знаний и сертификатов. Многие работодатели ценят практические навыки выше диплома." },
  { num: "03", title: "Соберите портфолио", desc: "Создайте несколько тестовых проектов или выполните недорогие заказы. Качественное портфолио — ваш главный аргумент." },
  { num: "04", title: "Начните поиск работы", desc: "Зарегистрируйтесь на профессиональных платформах, откликайтесь на вакансии и налаживайте профессиональные контакты." },
];

const SECTIONS = ["Главная", "Специальности", "Курсы", "Как начать", "Контакты"];

export default function Index() {
  const [activeSection, setActiveSection] = useState("Главная");
  const [specSearch, setSpecSearch] = useState("");
  const [courseSearch, setCourseSearch] = useState("");
  const [contactForm, setContactForm] = useState({ name: "", email: "", message: "" });

  const filteredSpecs = SPECIALTIES.filter(s =>
    s.title.toLowerCase().includes(specSearch.toLowerCase())
  );

  const filteredCourses = COURSES.filter(c =>
    c.title.toLowerCase().includes(courseSearch.toLowerCase())
  );

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const el = document.getElementById(section);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
        <div className="container max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <span className="font-display text-xl font-bold text-primary">Remote<span className="gold-accent">Career</span></span>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              {SECTIONS.map(sec => (
                <button
                  key={sec}
                  onClick={() => scrollToSection(sec)}
                  className={`nav-link ${activeSection === sec ? "active" : ""}`}
                >
                  {sec}
                </button>
              ))}
            </nav>
            <button
              onClick={() => scrollToSection("Как начать")}
              className="hidden md:block px-5 py-2 bg-primary text-primary-foreground text-sm font-medium uppercase tracking-wide hover:bg-primary/90 transition-colors"
            >
              Начать карьеру
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="Главная" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-700 via-indigo-600 to-cyan-500 z-10" />
        <img
          src={HERO_IMAGE}
          alt="Удалённая работа"
          className="absolute inset-0 w-full h-full object-cover object-center mix-blend-overlay opacity-30"
        />
        <div className="absolute inset-0 z-10" style={{background: "radial-gradient(ellipse at 70% 50%, rgba(251,191,36,0.18) 0%, transparent 60%)"}} />
        <div className="relative z-20 container max-w-6xl mx-auto px-6 py-36">
          <div className="max-w-2xl">
            <p className="text-yellow-300 font-body text-sm font-semibold uppercase tracking-widest mb-4 animate-fade-in-up">
              Профессиональный гид по удалённой карьере
            </p>
            <h1 className="font-display text-5xl md:text-7xl font-bold text-white leading-tight mb-6 animate-fade-in-up-delay-1">
              Ваша карьера<br /><span className="text-yellow-300">без границ</span>
            </h1>
            <p className="font-body text-white/90 text-lg leading-relaxed mb-10 animate-fade-in-up-delay-2">
              Достоверная информация о специальностях, курсах и стратегиях построения успешной карьеры в удалённом формате.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in-up-delay-3">
              <button
                onClick={() => scrollToSection("Специальности")}
                className="px-8 py-3 bg-yellow-400 text-gray-900 font-body font-bold text-sm uppercase tracking-wide hover:bg-yellow-300 transition-colors shadow-lg"
              >
                Выбрать специальность
              </button>
              <button
                onClick={() => scrollToSection("Курсы")}
                className="px-8 py-3 border-2 border-white/60 text-white font-body font-semibold text-sm uppercase tracking-wide hover:bg-white/15 transition-colors backdrop-blur-sm"
              >
                Смотреть курсы
              </button>
            </div>
          </div>
        </div>
        <div className="relative z-20 bg-white/10 backdrop-blur-sm border-t border-white/20">
          <div className="container max-w-6xl mx-auto px-6 py-6">
            <div className="grid grid-cols-3 gap-8">
              {[
                { num: "200+", label: "Специальностей" },
                { num: "150+", label: "Курсов и программ" },
                { num: "45 000+", label: "Успешных карьер" },
              ].map(stat => (
                <div key={stat.label} className="text-center">
                  <div className="font-display text-2xl font-bold text-yellow-300">{stat.num}</div>
                  <div className="font-body text-xs text-white/70 uppercase tracking-wide mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Specialties */}
      <section id="Специальности" className="py-24 bg-white">
        <div className="container max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <div className="section-divider" />
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <h2 className="font-display text-4xl font-bold text-primary mb-3">Специальности</h2>
                <p className="font-body text-muted-foreground max-w-xl">
                  Актуальный обзор востребованных профессий на рынке удалённой работы с данными о доходах и перспективах.
                </p>
              </div>
              <div className="relative md:w-72">
                <Icon name="Search" size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Поиск по специальностям..."
                  value={specSearch}
                  onChange={e => setSpecSearch(e.target.value)}
                  className="search-input w-full pl-9 pr-4 py-2.5 border border-border bg-background text-sm font-body transition-all"
                />
              </div>
            </div>
          </div>

          {filteredSpecs.length === 0 ? (
            <div className="text-center py-16 text-muted-foreground font-body">
              Ничего не найдено по запросу «{specSearch}»
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredSpecs.map(spec => (
                <button
                  key={spec.id}
                  onClick={() => scrollToSection("Курсы")}
                  className="card-hover group flex flex-col overflow-hidden text-left w-full border border-border"
                >
                  <div className="relative h-36 overflow-hidden">
                    <img src={spec.img} alt={spec.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    <div className={`absolute inset-0 bg-gradient-to-br ${spec.color} opacity-80 group-hover:opacity-70 transition-opacity`} />
                    <div className="absolute inset-0 p-5 flex items-end">
                      <div className="w-10 h-10 bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <Icon name={spec.icon} size={20} className="text-white" fallback="Briefcase" />
                      </div>
                    </div>
                  </div>
                  <div className="bg-white p-5 flex flex-col gap-3 flex-1">
                    <h3 className="font-display text-lg font-bold text-primary group-hover:text-amber-600 transition-colors">{spec.title}</h3>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed flex-1">{spec.desc}</p>
                    <div className="flex items-center gap-1.5 bg-emerald-50 text-emerald-700 px-3 py-1.5 text-xs font-body font-semibold w-fit">
                      <Icon name="Banknote" size={13} />
                      {spec.salary}
                    </div>
                    <div className="flex items-center gap-1 text-xs font-body text-amber-600 font-semibold pt-2 border-t border-border">
                      <Icon name="ArrowDown" size={12} />
                      Смотреть курсы
                    </div>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Courses */}
      <section id="Курсы" className="py-24 bg-slate-50">
        <div className="container max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <div className="section-divider" />
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <h2 className="font-display text-4xl font-bold text-primary mb-3">Курсы</h2>
                <p className="font-body text-muted-foreground max-w-xl">
                  Подборка образовательных программ для получения навыков удалённой работы. Только проверенные провайдеры.
                </p>
              </div>
              <div className="relative md:w-72">
                <Icon name="Search" size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Поиск по курсам..."
                  value={courseSearch}
                  onChange={e => setCourseSearch(e.target.value)}
                  className="search-input w-full pl-9 pr-4 py-2.5 border border-border bg-white text-sm font-body transition-all"
                />
              </div>
            </div>
          </div>

          {filteredCourses.length === 0 ? (
            <div className="text-center py-16 text-muted-foreground font-body">
              Ничего не найдено по запросу «{courseSearch}»
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCourses.map(course => (
                <a
                  key={course.id}
                  href={course.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-hover group flex flex-col overflow-hidden no-underline border border-border"
                >
                  <div className="relative h-36 overflow-hidden">
                    <img src={course.img} alt={course.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    <div className={`absolute inset-0 bg-gradient-to-br ${course.color} opacity-80 group-hover:opacity-70 transition-opacity`} />
                    <div className="absolute inset-0 p-5 flex items-end">
                      <div className="w-10 h-10 bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <Icon name={course.icon} size={20} className="text-white" fallback="BookOpen" />
                      </div>
                    </div>
                  </div>
                  <div className="bg-white p-5 flex flex-col gap-3 flex-1">
                    <h3 className="font-display text-lg font-bold text-primary group-hover:text-amber-600 transition-colors">{course.title}</h3>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed flex-1">{course.desc}</p>
                    <div className="flex items-center gap-1.5 text-xs font-body text-amber-600 font-semibold pt-3 border-t border-border">
                      <Icon name="ExternalLink" size={13} />
                      Перейти к курсу
                    </div>
                  </div>
                </a>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* How to Start */}
      <section id="Как начать" className="py-24 bg-primary text-white">
        <div className="container max-w-6xl mx-auto px-6">
          <div className="mb-14">
            <div className="w-12 h-0.5 bg-amber-400 mb-6" />
            <h2 className="font-display text-4xl font-bold mb-3">Как начать</h2>
            <p className="font-body text-white/70 max-w-xl">
              Чёткий пошаговый план для тех, кто хочет построить карьеру в удалённом формате с нуля.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {STEPS.map(step => (
              <div key={step.num}>
                <div className="font-display text-5xl font-black text-white/10 mb-4 leading-none">{step.num}</div>
                <div className="w-8 h-0.5 bg-amber-400 mb-4" />
                <h3 className="font-display text-xl font-bold mb-3">{step.title}</h3>
                <p className="font-body text-sm text-white/65 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 pt-12 border-t border-white/15">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="font-display text-2xl font-bold mb-2">Готовы начать путь?</h3>
                <p className="font-body text-white/65">Получите персональную консультацию и план действий.</p>
              </div>
              <button
                onClick={() => scrollToSection("Контакты")}
                className="px-8 py-3 bg-amber-400 text-slate-900 font-body font-semibold text-sm uppercase tracking-wide hover:bg-amber-300 transition-colors whitespace-nowrap"
              >
                Связаться с нами
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contacts */}
      <section id="Контакты" className="py-24 bg-white">
        <div className="container max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <div className="section-divider" />
              <h2 className="font-display text-4xl font-bold text-primary mb-4">Контакты</h2>
              <p className="font-body text-muted-foreground mb-10 leading-relaxed">
                Остались вопросы о карьере, курсах или специальностях? Мы ответим в течение одного рабочего дня.
              </p>

              <div className="space-y-6">
                {[
                  { icon: "Mail", label: "Email", value: "yurha.1990@gmail.com", href: "mailto:yurha.1990@gmail.com" },
                  { icon: "Phone", label: "Телефон", value: "+7 (800) 555-00-00", href: null },
                  { icon: "MapPin", label: "Адрес", value: "Москва, работаем удалённо", href: null },
                ].map(c => (
                  <div key={c.label} className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-primary/5 flex items-center justify-center flex-shrink-0">
                      <Icon name={c.icon} size={18} className="text-primary" fallback="Phone" />
                    </div>
                    <div>
                      <div className="font-body text-xs text-muted-foreground uppercase tracking-wide">{c.label}</div>
                      {c.href ? (
                        <a href={c.href} className="font-body text-sm font-medium text-primary hover:text-amber-600 transition-colors underline underline-offset-2">{c.value}</a>
                      ) : (
                        <div className="font-body text-sm font-medium text-foreground">{c.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <form className="space-y-5" onSubmit={e => {
                e.preventDefault();
                const subject = encodeURIComponent(`Вопрос от ${contactForm.name}`);
                const body = encodeURIComponent(`Имя: ${contactForm.name}\nEmail: ${contactForm.email}\n\n${contactForm.message}`);
                window.location.href = `mailto:yurha.1990@gmail.com?subject=${subject}&body=${body}`;
              }}>
                <div>
                  <label className="font-body text-xs text-muted-foreground uppercase tracking-wide block mb-2">Имя</label>
                  <input
                    type="text"
                    placeholder="Ваше имя"
                    value={contactForm.name}
                    onChange={e => setContactForm({ ...contactForm, name: e.target.value })}
                    className="search-input w-full px-4 py-3 border border-border bg-background text-sm font-body transition-all"
                  />
                </div>
                <div>
                  <label className="font-body text-xs text-muted-foreground uppercase tracking-wide block mb-2">Email</label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    value={contactForm.email}
                    onChange={e => setContactForm({ ...contactForm, email: e.target.value })}
                    className="search-input w-full px-4 py-3 border border-border bg-background text-sm font-body transition-all"
                  />
                </div>
                <div>
                  <label className="font-body text-xs text-muted-foreground uppercase tracking-wide block mb-2">Сообщение</label>
                  <textarea
                    placeholder="Расскажите о вашем запросе..."
                    rows={4}
                    value={contactForm.message}
                    onChange={e => setContactForm({ ...contactForm, message: e.target.value })}
                    className="search-input w-full px-4 py-3 border border-border bg-background text-sm font-body transition-all resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-primary text-white font-body font-semibold text-sm uppercase tracking-wide hover:bg-primary/90 transition-colors"
                >
                  Отправить сообщение
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-10">
        <div className="container max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="font-display text-xl font-bold">
              Remote<span className="text-amber-400">Career</span>
            </div>
            <div className="flex gap-6">
              {SECTIONS.map(sec => (
                <button
                  key={sec}
                  onClick={() => scrollToSection(sec)}
                  className="font-body text-xs text-white/60 hover:text-white transition-colors uppercase tracking-wide"
                >
                  {sec}
                </button>
              ))}
            </div>
            <div className="font-body text-xs text-white/40">© 2026 RemoteCareer</div>
          </div>
        </div>
      </footer>
    </div>
  );
}