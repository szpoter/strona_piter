import './App.css';

function MainPage() {
  return (
    <div className="page-shell">
      <nav className="navbar navbar-expand-lg navbar-dark py-3">
        <div className="container">
          <a className="navbar-brand fw-bold brand-mark" href="/">
            strona_web
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNavbar"
            aria-controls="mainNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="mainNavbar">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-lg-3">
              <li className="nav-item">
                <a className="nav-link active" href="#start">
                  Start
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#features">
                  Funkcje
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#kontakt">
                  Kontakt
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <main id="start" className="container py-5">
        <section className="hero-card row align-items-center g-5 py-4 py-lg-5">
          <div className="col-12 col-lg-7">
            <span className="badge text-bg-info-subtle text-info-emphasis rounded-pill mb-3">
              Bootstrap + React
            </span>
            <h1 className="display-4 fw-bold text-white mb-3">
              Nowa strona główna w React, gotowa pod dalszy rozwój.
            </h1>
            <p className="lead text-white-50 mb-4">
              Bootstrap jest już podpięty, więc możesz szybko składać sekcje,
              karty, formularze i responsywny layout bez zaczynania od zera.
            </p>
            <div className="d-flex flex-wrap gap-3">
              <a className="btn btn-info btn-lg px-4 fw-semibold" href="#features">
                Zobacz sekcje
              </a>
              <a className="btn btn-outline-light btn-lg px-4" href="#kontakt">
                Napisz do nas
              </a>
            </div>
          </div>

          <div className="col-12 col-lg-5">
            <div className="stats-panel shadow-lg">
              <div className="stat-item">
                <p className="stat-label">Framework</p>
                <p className="stat-value">React JS</p>
              </div>
              <div className="stat-item">
                <p className="stat-label">UI</p>
                <p className="stat-value">Bootstrap 5</p>
              </div>
              <div className="stat-item">
                <p className="stat-label">Nazwa projektu</p>
                <p className="stat-value">strona_web</p>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="py-5">
          <div className="row g-4">
            <div className="col-12 col-md-4">
              <article className="feature-card h-100 p-4 rounded-4">
                <h2 className="h4 text-white">Responsywność</h2>
                <p className="text-white-50 mb-0">
                  Układ oparty o grid Bootstrapa dobrze skaluje się na telefonach,
                  tabletach i desktopie.
                </p>
              </article>
            </div>
            <div className="col-12 col-md-4">
              <article className="feature-card h-100 p-4 rounded-4">
                <h2 className="h4 text-white">Szybki start</h2>
                <p className="text-white-50 mb-0">
                  Masz już gotowy punkt startowy pod kolejne podstrony, formularze
                  i sekcje landing page.
                </p>
              </article>
            </div>
            <div className="col-12 col-md-4">
              <article className="feature-card h-100 p-4 rounded-4">
                <h2 className="h4 text-white">Czytelny kod</h2>
                <p className="text-white-50 mb-0">
                  Bootstrap robi ciężką pracę w warstwie UI, a własne style zostają
                  lekkie i skupione na wyglądzie strony.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section id="kontakt" className="py-3 pb-5">
          <div className="contact-banner rounded-4 p-4 p-lg-5 d-flex flex-column flex-lg-row align-items-lg-center justify-content-between gap-3">
            <div>
              <h2 className="h3 text-white mb-2">Gotowy na kolejne sekcje</h2>
              <p className="text-white-50 mb-0">
                Następny krok to już tylko treść i funkcje, a baza UI jest gotowa.
              </p>
            </div>
            <a className="btn btn-light btn-lg px-4 fw-semibold" href="mailto:kontakt@strona_web.pl">
              Kontakt mailowy
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

export default MainPage;