import './App.css';

const coreServices = [
  'Prowadzenie KPiR (księgi przychodów i rozchodów)',
  'Prowadzenie ewidencji przychodów dla ryczałtu',
  'Prowadzenie rejestrów VAT (sprzedaży i zakupów)',
  'Prowadzenie ewidencji środków trwałych',
  'Rozliczanie podatku od czynności cywilno-prawnych',
  'Reprezentowanie przed organami administracji państwowej',
  'Kompleksowa pomoc w zakładaniu działalności gospodarczej',
  'Rozliczanie w zakresie podatku od spadków i darowizn',
  'Pełna obsługa kontroli skarbowych i ZUS dla stałych klientów',
  'Wsparcie w rozliczeniach najmu prywatnego, najmu firmowego i ryczałtu od najmu',
  'Rozliczenia roczne PIT (PIT-36, PIT-36L, PIT-28, PIT-37, PIT-38)',
  'Sporządzanie wszelkich deklaracji podatkowych oraz dla urzędu statystycznego w formie elektronicznej z bezpiecznym podpisem cyfrowym',
  'Pisanie wniosków o interpretacje przepisów podatkowych',
];

const payrollServices = [
  'Zgłoszenia pracowników do ZUS (ZUA, ZZA)',
  'Wyrejestrowania pracowników (ZWUA)',
  'Miesięczne deklaracje ZUS (DRA, RCA, RSA)',
  'Wyliczanie składek ZUS pracowników i przedsiębiorcy',
  'Obsługa PUE ZUS w zakresie dokumentów rozliczeniowych',
  'Wyliczanie wynagrodzeń do wypłaty (bez prowadzenia pełnych kadr)',
  'Listy płac',
  'Naliczanie zaliczek na PIT-4',
  'Deklaracje PIT-4R, PIT-11',
  'Obsługa umów cywilnoprawnych (zlecenia, dzieło) - tylko rozliczenia podatkowe i ZUS',
];

const advisoryServices = [
  'Wyjaśnianie zasad księgowania',
  'Pomoc w wyborze formy opodatkowania (informacyjnie)',
  'Analiza opłacalności ryczałt vs KPiR',
  'Wsparcie w interpretacji przepisów księgowych',
];

const governmentLinks = [
  {
    label: 'KSeF',
    href: 'https://ksef.podatki.gov.pl/',
    description: 'System Krajowego Systemu e-Faktur',
  },
  {
    label: 'Biznes.gov.pl',
    href: 'https://www.biznes.gov.pl/pl',
    description: 'Oficjalny portal dla przedsiębiorców',
  },
  {
    label: 'Login MF',
    href:
      'https://login.mf.gov.pl/Account/Select?ReturnUrl=%2Fconnect%2Fauthorize%2Fcallback%3Fclient_id%3D09e2877e-702a-4e27-8818-9472ca964c0a%26redirect_uri%3Dhttps%253A%252F%252Furzadskarbowy.gov.pl%26response_type%3Dcode%26scope%3Dprofile%2520openid%2520DataHub.UserAccess%2520eFormsClientApi.UserAccess%2520ChatApi.UserAccess%2520offline_access%26state%3Ded6eb4d0e40342958dd9272ed2d5ed3e%26code_challenge%3DeOkCUJRCjSLIfnK9TmYkFqIypsdv3JRG30eKBzjmhZU%26code_challenge_method%3DS256',
    description: 'Logowanie do usług resortu finansów',
  },
  {
    label: 'Wykaz VAT',
    href: 'https://podatki-arch.mf.gov.pl/wykaz-podatnikow-vat-wyszukiwarka/',
    description: 'Wyszukiwarka podatników VAT',
  },
  {
    label: 'GUS',
    href: 'https://stat.gov.pl/podstawowe-dane/',
    description: 'Podstawowe dane statystyczne',
  },
  {
    label: 'e-ZUS',
    href: 'https://www.zus.pl/ezus/logowanie',
    description: 'Logowanie do PUE ZUS',
  },
  {
    label: 'VIES',
    href: 'https://ec.europa.eu/taxation_customs/vies/#/vat-validation',
    description: 'Weryfikacja numerów VAT UE',
  },
];

function MainPage({ theme, onToggleTheme }) {
  const openContactSection = () => {
    const contactSection = document.getElementById('kontakt');
    contactSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });

    const contactToggle = document.getElementById('contactToggle');
    const contactCollapse = document.getElementById('contactCollapse');
    if (contactToggle && contactCollapse && !contactCollapse.classList.contains('show')) {
      contactToggle.click();
    }
  };

  return (
    <div className="page-shell">
      <header className="topbar">
        <div className="container topbar-inner d-flex align-items-stretch justify-content-between gap-3">
          <a className="brand-mark" href="#start">
            <img
              className="brand-logo"
              src={theme === 'dark' ? '/resources/ciemna_ikona.jpeg' : '/resources/jasna_ikona.jpeg'}
              alt="Podatki i księgowość Piotr Gatkowski"
            />
          </a>
          <div className="d-flex align-items-center gap-3">
            <nav className="topbar-nav d-none d-md-flex align-items-center gap-4">
              <a href="#uslugi">Usługi</a>
              <a href="#kontakt">Kontakt</a>
            </nav>
            <button type="button" className="theme-toggle" onClick={onToggleTheme}>
              <span className="theme-icon" aria-hidden="true">
                {theme === 'dark' ? '☀' : '☾'}
              </span>
              <span className="sr-only">{theme === 'dark' ? 'Jasny motyw' : 'Ciemny motyw'}</span>
            </button>
          </div>
        </div>
      </header>

      <section
        id="start"
        className="hero-section py-4 py-lg-5"
        style={{
          backgroundImage: `url(${theme === 'dark' ? '/resources/ciemne_tlo.jpeg' : '/resources/jasne_tlo.jpeg'})`,
        }}
      >
        <div className="container">
          <div className="row align-items-center g-4 g-lg-5">
            <div className="col-12 col-lg-8 fade-in-up">
              <div className="eyebrow-pill">Księgowość • podatki • ZUS</div>
              <h1 className="hero-title mt-3">Profesjonalna obsługa księgowa i podatkowa</h1>
              <div className="d-flex flex-wrap gap-3 mt-4">
                <a className="btn btn-primary-soft btn-lg" href="#uslugi">
                  Zapoznaj się z usługami
                </a>
                <a className="btn btn-outline-soft btn-lg" href="#kontakt" onClick={openContactSection}>
                  Skontaktuj się
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="container pb-5">
        <section id="uslugi" className="section-block py-4 py-lg-5">
          <div className="section-heading fade-in-up">
            <span>Zakres świadczonych usług</span>
            <h2>Kompleksowa obsługa księgowa i podatkowa</h2>
            <p>
              Oferta obejmuje wyłącznie wskazane poniżej elementy związane z księgowością,
              rozliczeniami podatkowymi, płacami i ZUS.
            </p>
          </div>

          <div className="service-card fade-in-up delay-1 mt-1">
            <h3>Zakres świadczonych usług</h3>
            <ul className="service-list columns-2">
              {coreServices.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>

            <div className="service-subsection mt-4">
              <h3>Wsparcie merytoryczne</h3>
              <ul className="mini-list">
                {advisoryServices.map((service) => (
                  <li key={service}>{service}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="section-block py-4 py-lg-5">
          <div className="section-heading fade-in-up">
            <span>Obsługa płac i ZUS</span>
            <h2>Kompleksowa obsługa płac i rozliczeń ZUS</h2>

          </div>

          <div className="service-card fade-in-up delay-1 mt-1">
            <h3>Prowadzenie spraw związanych z kompleksową obsługą płac i ZUS</h3>
            <ul className="service-list columns-2">
              {payrollServices.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </div>
        </section>

        <section id="linki" className="section-block py-4 py-lg-5">
          <div className="section-heading fade-in-up">
            <span>Linki do stron rządowych</span>
            <h2>Szybki dostęp do najważniejszych portali</h2>

          </div>

          <div className="row g-3 g-lg-4 mt-1">
            {governmentLinks.map((link, index) => (
              <div className="col-12 col-md-6 col-lg-4 fade-in-up" key={link.label} style={{ animationDelay: `${index * 90}ms` }}>
                <a className="gov-link-card h-100" href={link.href} target="_blank" rel="noreferrer">
                  <span>{link.label}</span>
                  <strong>{link.description}</strong>
                </a>
              </div>
            ))}
          </div>
        </section>

        <section id="kontakt" className="section-block pb-5">
          <div className="closing-card fade-in-up">
            <div className="d-flex flex-column flex-lg-row align-items-lg-center justify-content-between gap-3 gap-lg-4">
              <div>
                <span>Kontakt</span>
                <h2 className="mb-2">Zapraszam do kontaktu w sprawie obsługi księgowej i podatkowej</h2>

              </div>
              <button
                type="button"
                className="btn btn-primary-soft btn-lg"
                id="contactToggle"
                data-bs-toggle="collapse"
                data-bs-target="#contactCollapse"
                aria-expanded="false"
                aria-controls="contactCollapse"
              >
                Kontakt
              </button>
            </div>

            <div id="contactCollapse" className="collapse mt-4">
              <div className="contact-details-grid">
                <div className="contact-detail-item">
                  <span>Telefon</span>
                  <strong>+48 500 000 000</strong>
                </div>
                <div className="contact-detail-item">
                  <span>E-mail</span>
                  <strong>kontakt@piotrgatkowski.pl</strong>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default MainPage;
