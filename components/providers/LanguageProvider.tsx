'use client'

import { createContext, useContext, useEffect, useState, useCallback } from 'react'

export type Lang =
  | 'en' | 'ro' | 'pl' | 'pt' | 'it' | 'es' | 'de' | 'fr'
  | 'ru' | 'bg' | 'hu' | 'ar' | 'zh'

export const LANGUAGES: Record<Lang, { label: string; native: string; rtl?: boolean }> = {
  en: { label: 'English', native: 'English' },
  ro: { label: 'Romanian', native: 'Română' },
  pl: { label: 'Polish', native: 'Polski' },
  pt: { label: 'Portuguese', native: 'Português' },
  it: { label: 'Italian', native: 'Italiano' },
  es: { label: 'Spanish', native: 'Español' },
  de: { label: 'German', native: 'Deutsch' },
  fr: { label: 'French', native: 'Français' },
  ru: { label: 'Russian', native: 'Русский' },
  bg: { label: 'Bulgarian', native: 'Български' },
  hu: { label: 'Hungarian', native: 'Magyar' },
  ar: { label: 'Arabic', native: 'عربي', rtl: true },
  zh: { label: 'Chinese', native: '中文' },
}

// Professional, SEO-optimised translations for key UI strings
export const TRANSLATIONS: Record<string, Record<Lang, string>> = {
  // Nav
  'nav.find': { en: 'Find', ro: 'Caută', pl: 'Znajdź', pt: 'Encontrar', it: 'Trova', es: 'Buscar', de: 'Suchen', fr: 'Trouver', ru: 'Найти', bg: 'Намери', hu: 'Keresés', ar: 'بحث', zh: '查找' },
  'nav.estimate': { en: 'Estimate', ro: 'Estimare', pl: 'Wycena', pt: 'Estimar', it: 'Preventivo', es: 'Presupuesto', de: 'Schätzen', fr: 'Devis', ru: 'Оценка', bg: 'Оценка', hu: 'Becslés', ar: 'تقدير', zh: '估算' },
  'nav.sectors': { en: 'Sectors', ro: 'Sectoare', pl: 'Sektory', pt: 'Setores', it: 'Settori', es: 'Sectores', de: 'Sektoren', fr: 'Secteurs', ru: 'Секторы', bg: 'Сектори', hu: 'Szektorok', ar: 'قطاعات', zh: '行业' },
  'nav.intelligence': { en: 'Intelligence', ro: 'Informații', pl: 'Analityka', pt: 'Inteligência', it: 'Analisi', es: 'Inteligencia', de: 'Daten', fr: 'Données', ru: 'Аналитика', bg: 'Анализи', hu: 'Adatok', ar: 'تحليلات', zh: '数据' },
  'nav.platform': { en: 'Platform', ro: 'Platformă', pl: 'Platforma', pt: 'Plataforma', it: 'Piattaforma', es: 'Plataforma', de: 'Plattform', fr: 'Plateforme', ru: 'Платформа', bg: 'Платформа', hu: 'Platform', ar: 'منصة', zh: '平台' },
  'nav.signin': { en: 'Sign in', ro: 'Conectare', pl: 'Zaloguj się', pt: 'Entrar', it: 'Accedi', es: 'Iniciar sesión', de: 'Anmelden', fr: 'Connexion', ru: 'Войти', bg: 'Влез', hu: 'Bejelentkezés', ar: 'تسجيل الدخول', zh: '登录' },
  'nav.getstarted': { en: 'Get started free', ro: 'Începe gratuit', pl: 'Zacznij bezpłatnie', pt: 'Começar grátis', it: 'Inizia gratis', es: 'Empieza gratis', de: 'Kostenlos starten', fr: 'Commencer gratuitement', ru: 'Начать бесплатно', bg: 'Започни безплатно', hu: 'Ingyenes kezdés', ar: 'ابدأ مجاناً', zh: '免费开始' },
  // Hero
  'hero.tag': { en: 'UK Construction Intelligence', ro: 'Informații Construcții UK', pl: 'Analityka Budowlana UK', pt: 'Inteligência em Construção UK', it: 'Intelligence Costruzioni UK', es: 'Inteligencia en Construcción UK', de: 'Baumarkt-Analyse UK', fr: 'Intelligence Construction UK', ru: 'Строительная аналитика UK', bg: 'Строителна аналитика UK', hu: 'UK Építőipari adatok', ar: 'معلومات البناء في المملكة المتحدة', zh: '英国建筑情报' },
  'hero.title1': { en: 'Every UK build decision,', ro: 'Fiecare decizie de construcție,', pl: 'Każda decyzja budowlana,', pt: 'Cada decisão de construção,', it: 'Ogni decisione edilizia,', es: 'Cada decisión constructiva,', de: 'Jede Bauentscheidung,', fr: 'Chaque décision de construction,', ru: 'Каждое строительное решение,', bg: 'Всяко строително решение,', hu: 'Minden építési döntés,', ar: 'كل قرار بناء,', zh: '每个建筑决策,' },
  'hero.title2': { en: 'powered by data.', ro: 'susținută de date.', pl: 'wsparta danymi.', pt: 'impulsionado por dados.', it: 'supportata dai dati.', es: 'impulsado por datos.', de: 'datengestützt.', fr: 'alimentée par les données.', ru: 'основано на данных.', bg: 'базирано на данни.', hu: 'adatvezérelt.', ar: 'مدعوم بالبيانات.', zh: '数据驱动。' },
  'hero.sub': { en: 'Find vetted contractors, get instant project estimates, analyse planning intelligence and track the entire UK property market — in one platform.', ro: 'Găsești contractori verificați, obții estimări instant, analizezi datele de urbanism și monitorizezi piața imobiliară din UK — într-o singură platformă.', pl: 'Znajdź zweryfikowanych wykonawców, uzyskaj natychmiastowe wyceny, analizuj dane planistyczne i śledź cały rynek nieruchomości w UK — na jednej platformie.', pt: 'Encontre empreiteiros verificados, obtenha estimativas instantâneas, analise informações de planeamento e acompanhe o mercado imobiliário do Reino Unido — numa só plataforma.', it: 'Trova appaltatori verificati, ottieni preventivi istantanei, analizza i dati urbanistici e monitora il mercato immobiliare del Regno Unito — tutto in un\'unica piattaforma.', es: 'Encuentra contratistas verificados, obtén presupuestos al instante, analiza la inteligencia urbanística y sigue todo el mercado inmobiliario del Reino Unido — en una sola plataforma.', de: 'Finde geprüfte Auftragnehmer, erhalte sofortige Kostenschätzungen, analysiere Planungsdaten und verfolge den gesamten britischen Immobilienmarkt — auf einer Plattform.', fr: 'Trouvez des entrepreneurs vérifiés, obtenez des estimations instantanées, analysez les données d\'urbanisme et suivez l\'ensemble du marché immobilier britannique — sur une seule plateforme.', ru: 'Найдите проверенных подрядчиков, получите мгновенную оценку, анализируйте данные по планированию и отслеживайте весь рынок недвижимости Великобритании — на одной платформе.', bg: 'Намерете проверени изпълнители, получете мигновени оценки, анализирайте данни за планиране и проследете целия пазар на имоти в UK — в една платформа.', hu: 'Találj ellenőrzött vállalkozókat, azonnali árajánlatokat kapj, elemezd az építési engedélyek adatait és kövesd nyomon az UK ingatlanpiacát — egyetlen platformon.', ar: 'ابحث عن مقاولين معتمدين، احصل على تقديرات فورية للمشاريع، وتحليل معلومات التخطيط وتتبع سوق العقارات في المملكة المتحدة بالكامل — في منصة واحدة.', zh: '找到经过审查的承包商，获取即时项目估算，分析规划情报，追踪整个英国房产市场——全在一个平台上。' },
  'hero.cta1': { en: 'Start for free', ro: 'Încearcă gratuit', pl: 'Zacznij bezpłatnie', pt: 'Começar grátis', it: 'Inizia gratis', es: 'Empezar gratis', de: 'Kostenlos starten', fr: 'Commencer gratuitement', ru: 'Начать бесплатно', bg: 'Започни безплатно', hu: 'Ingyenes kezdés', ar: 'ابدأ مجاناً', zh: '免费开始' },
  'hero.cta2': { en: 'See how it works', ro: 'Cum funcționează', pl: 'Jak to działa', pt: 'Como funciona', it: 'Come funziona', es: 'Cómo funciona', de: 'Wie es funktioniert', fr: 'Comment ça marche', ru: 'Как это работает', bg: 'Как работи', hu: 'Hogyan működik', ar: 'كيف يعمل', zh: '查看工作原理' },
  // Generic
  'footer.rights': { en: '© 2026 Dwellinger Ltd. All rights reserved.', ro: '© 2026 Dwellinger Ltd. Toate drepturile rezervate.', pl: '© 2026 Dwellinger Ltd. Wszelkie prawa zastrzeżone.', pt: '© 2026 Dwellinger Ltd. Todos os direitos reservados.', it: '© 2026 Dwellinger Ltd. Tutti i diritti riservati.', es: '© 2026 Dwellinger Ltd. Todos los derechos reservados.', de: '© 2026 Dwellinger Ltd. Alle Rechte vorbehalten.', fr: '© 2026 Dwellinger Ltd. Tous droits réservés.', ru: '© 2026 Dwellinger Ltd. Все права защищены.', bg: '© 2026 Dwellinger Ltd. Всички права запазени.', hu: '© 2026 Dwellinger Ltd. Minden jog fenntartva.', ar: '© 2026 Dwellinger Ltd. جميع الحقوق محفوظة.', zh: '© 2026 Dwellinger Ltd. 保留所有权利。' },
  'footer.tagline': { en: 'The UK\'s property & construction intelligence platform', ro: 'Platforma de informații imobiliare și de construcții din UK', pl: 'Platforma analityczna dla rynku nieruchomości i budownictwa w UK', pt: 'A plataforma de inteligência imobiliária e de construção do Reino Unido', it: 'La piattaforma di intelligence immobiliare e delle costruzioni del Regno Unito', es: 'La plataforma de inteligencia inmobiliaria y de construcción del Reino Unido', de: 'Die Immobilien- und Baumarkt-Intelligence-Plattform des Vereinigten Königreichs', fr: 'La plateforme d\'intelligence immobilière et de construction du Royaume-Uni', ru: 'Платформа аналитики недвижимости и строительства Великобритании', bg: 'Платформата за анализ на имоти и строителство в UK', hu: 'Az Egyesült Királyság ingatlan- és építőipari intelligenciaplatformja', ar: 'منصة استخبارات العقارات والبناء في المملكة المتحدة', zh: '英国房产与建筑情报平台' },
  'suggest.title': { en: 'Suggest a Feature', ro: 'Sugerează o funcție', pl: 'Zaproponuj funkcję', pt: 'Sugerir uma funcionalidade', it: 'Suggerisci una funzionalità', es: 'Sugerir una función', de: 'Funktion vorschlagen', fr: 'Suggérer une fonctionnalité', ru: 'Предложить функцию', bg: 'Предложи функция', hu: 'Funkció javaslat', ar: 'اقتراح ميزة', zh: '建议功能' },
  'suggest.placeholder': { en: 'What should we build next?', ro: 'Ce ar trebui să construim?', pl: 'Co powinniśmy zbudować?', pt: 'O que devemos construir a seguir?', it: 'Cosa dovremmo costruire?', es: '¿Qué deberíamos construir?', de: 'Was sollen wir als Nächstes bauen?', fr: 'Que devrions-nous créer ensuite?', ru: 'Что нам нужно создать?', bg: 'Какво трябва да изградим?', hu: 'Mit kellene következőnek építeni?', ar: 'ماذا يجب أن نبني بعد ذلك؟', zh: '我们应该下一步构建什么？' },
  'suggest.send': { en: 'Send', ro: 'Trimite', pl: 'Wyślij', pt: 'Enviar', it: 'Invia', es: 'Enviar', de: 'Senden', fr: 'Envoyer', ru: 'Отправить', bg: 'Изпрати', hu: 'Küldés', ar: 'إرسال', zh: '发送' },
}

interface LangContextValue {
  lang: Lang
  setLang: (l: Lang) => void
  t: (key: string) => string
}

const LangContext = createContext<LangContextValue>({
  lang: 'en',
  setLang: () => {},
  t: (k) => k,
})

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>('en')

  useEffect(() => {
    const saved = (typeof window !== 'undefined'
      ? localStorage.getItem('dwell-lang')
      : null) as Lang | null
    if (saved && Object.keys(LANGUAGES).includes(saved)) {
      setLangState(saved)
      document.documentElement.lang = saved
      if (LANGUAGES[saved]?.rtl) {
        document.documentElement.dir = 'rtl'
      }
    }
  }, [])

  const setLang = useCallback((l: Lang) => {
    setLangState(l)
    if (typeof window !== 'undefined') {
      localStorage.setItem('dwell-lang', l)
      document.documentElement.lang = l
      document.documentElement.dir = LANGUAGES[l]?.rtl ? 'rtl' : 'ltr'
    }
  }, [])

  const t = useCallback((key: string): string => {
    return TRANSLATIONS[key]?.[lang] ?? TRANSLATIONS[key]?.['en'] ?? key
  }, [lang])

  return (
    <LangContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LangContext.Provider>
  )
}

export const useLang = () => useContext(LangContext)
