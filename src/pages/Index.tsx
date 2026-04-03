import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/9a5a11e5-106d-4c07-89c0-21534e5eeeb9/files/b9a7b842-734e-430f-994f-68ea50c2554b.jpg";

const SPECIALTIES = [
  { id: 1, title: "Разработчик", category: "Технологии", demand: "Высокий", salary: "от 120 000 ₽", icon: "Code2", desc: "Frontend, backend, fullstack-разработчики востребованы во всех сферах удалённого рынка." },
  { id: 2, title: "Дизайнер UX/UI", category: "Дизайн", demand: "Высокий", salary: "от 80 000 ₽", icon: "Palette", desc: "Создание интерфейсов, прототипирование, работа с Figma и дизайн-системами." },
  { id: 3, title: "Маркетолог", category: "Маркетинг", demand: "Средний", salary: "от 70 000 ₽", icon: "TrendingUp", desc: "Digital-маркетинг, контент, таргетированная реклама и аналитика." },
  { id: 4, title: "Копирайтер", category: "Контент", demand: "Средний", salary: "от 50 000 ₽", icon: "FileText", desc: "Тексты для брендов, SEO-статьи, сценарии и контент-стратегии." },
  { id: 5, title: "Аналитик данных", category: "Технологии", demand: "Высокий", salary: "от 110 000 ₽", icon: "BarChart2", desc: "SQL, Python, визуализация данных и бизнес-аналитика для удалённых команд." },
  { id: 6, title: "Проект-менеджер", category: "Управление", demand: "Средний", salary: "от 90 000 ₽", icon: "Briefcase", desc: "Управление распределёнными командами, Agile/Scrum, координация процессов." },
  { id: 7, title: "Финансовый аналитик", category: "Финансы", demand: "Средний", salary: "от 100 000 ₽", icon: "DollarSign", desc: "Финансовая отчётность, моделирование, работа с международными клиентами." },
  { id: 8, title: "HR-специалист", category: "Управление", demand: "Средний", salary: "от 65 000 ₽", icon: "Users", desc: "Подбор персонала, онбординг удалённых сотрудников, корпоративная культура." },
];

const COURSES = [
  { id: 1, title: "Основы удалённой работы", provider: "RemoteAcademy", duration: "4 недели", level: "Начальный", price: "Бесплатно", icon: "BookOpen", category: "Основы" },
  { id: 2, title: "Python для аналитиков", provider: "DataSchool", duration: "8 недель", level: "Средний", price: "12 900 ₽", icon: "Code2", category: "Технологии" },
  { id: 3, title: "UX-дизайн с нуля", provider: "DesignLab", duration: "6 недель", level: "Начальный", price: "9 900 ₽", icon: "Palette", category: "Дизайн" },
  { id: 4, title: "Digital-маркетинг", provider: "MarketPro", duration: "5 недель", level: "Начальный", price: "7 500 ₽", icon: "TrendingUp", category: "Маркетинг" },
  { id: 5, title: "Управление проектами Agile", provider: "PMSchool", duration: "6 недель", level: "Средний", price: "11 000 ₽", icon: "Briefcase", category: "Управление" },
  { id: 6, title: "Эффективная коммуникация", provider: "SoftSkills", duration: "3 недели", level: "Начальный", price: "4 900 ₽", icon: "MessageSquare", category: "Навыки" },
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
    s.title.toLowerCase().includes(specSearch.toLowerCase()) ||
    s.category.toLowerCase().includes(specSearch.toLowerCase())
  );

  const filteredCourses = COURSES.filter(c =>
    c.title.toLowerCase().includes(courseSearch.toLowerCase()) ||
    c.category.toLowerCase().includes(courseSearch.toLowerCase()) ||
    c.provider.toLowerCase().includes(courseSearch.toLowerCase())
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
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/60 z-10" />
        <img
          src={HERO_IMAGE}
          alt="Удалённая работа"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="relative z-20 container max-w-6xl mx-auto px-6 py-32">
          <div className="max-w-2xl">
            <p className="text-accent font-body text-sm font-semibold uppercase tracking-widest mb-4 animate-fade-in-up">
              Профессиональный гид по удалённой карьере
            </p>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-white leading-tight mb-6 animate-fade-in-up-delay-1">
              Ваша карьера<br />без границ
            </h1>
            <p className="font-body text-white/80 text-lg leading-relaxed mb-10 animate-fade-in-up-delay-2">
              Достоверная информация о специальностях, курсах и стратегиях построения успешной карьеры в удалённом формате.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in-up-delay-3">
              <button
                onClick={() => scrollToSection("Специальности")}
                className="px-8 py-3 bg-accent text-foreground font-body font-semibold text-sm uppercase tracking-wide hover:bg-accent/90 transition-colors"
              >
                Выбрать специальность
              </button>
              <button
                onClick={() => scrollToSection("Курсы")}
                className="px-8 py-3 border border-white text-white font-body font-semibold text-sm uppercase tracking-wide hover:bg-white/10 transition-colors"
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
                  <div className="font-display text-2xl font-bold text-white">{stat.num}</div>
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredSpecs.map(spec => (
                <div key={spec.id} className="card-hover border border-border bg-white p-6 cursor-pointer group">
                  <div className="w-10 h-10 bg-primary/5 flex items-center justify-center mb-4 group-hover:bg-amber-50 transition-colors">
                    <Icon name={spec.icon} size={20} className="text-primary group-hover:text-amber-600 transition-colors" fallback="Briefcase" />
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-body font-medium text-muted-foreground uppercase tracking-wide">{spec.category}</span>
                    <span className={`text-xs px-2 py-0.5 font-body ${spec.demand === "Высокий" ? "bg-green-50 text-green-700" : "bg-amber-50 text-amber-700"}`}>
                      {spec.demand}
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-bold text-primary mb-2">{spec.title}</h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">{spec.desc}</p>
                  <div className="font-body text-sm font-semibold text-amber-600">{spec.salary}</div>
                </div>
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
                <div key={course.id} className="card-hover bg-white border border-border p-6 cursor-pointer group">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-10 h-10 bg-primary/5 flex items-center justify-center group-hover:bg-amber-50 transition-colors">
                      <Icon name={course.icon} size={20} className="text-primary group-hover:text-amber-600 transition-colors" fallback="BookOpen" />
                    </div>
                    <span className="text-sm font-body font-semibold text-amber-600">{course.price}</span>
                  </div>
                  <span className="text-xs font-body text-muted-foreground uppercase tracking-wide">{course.category}</span>
                  <h3 className="font-display text-lg font-bold text-primary mt-1 mb-2">{course.title}</h3>
                  <p className="font-body text-sm text-muted-foreground mb-4">{course.provider}</p>
                  <div className="flex items-center gap-4 pt-4 border-t border-border">
                    <div className="flex items-center gap-1.5 text-xs font-body text-muted-foreground">
                      <Icon name="Clock" size={13} />
                      {course.duration}
                    </div>
                    <div className="flex items-center gap-1.5 text-xs font-body text-muted-foreground">
                      <Icon name="BarChart2" size={13} />
                      {course.level}
                    </div>
                  </div>
                </div>
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
                  { icon: "Mail", label: "Email", value: "info@remotecareer.ru" },
                  { icon: "Phone", label: "Телефон", value: "+7 (800) 555-00-00" },
                  { icon: "MapPin", label: "Адрес", value: "Москва, работаем удалённо" },
                ].map(c => (
                  <div key={c.label} className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-primary/5 flex items-center justify-center flex-shrink-0">
                      <Icon name={c.icon} size={18} className="text-primary" fallback="Phone" />
                    </div>
                    <div>
                      <div className="font-body text-xs text-muted-foreground uppercase tracking-wide">{c.label}</div>
                      <div className="font-body text-sm font-medium text-foreground">{c.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <form className="space-y-5" onSubmit={e => e.preventDefault()}>
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