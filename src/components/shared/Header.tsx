export default function Header() {
  return (
    <header className="header" data-header>
      <div className="container">
        <div className="overlay" data-overlay></div>

        <a href="#" className="logo">
          <img src="./assets/images/demo.svg" alt="Nidi logo" />
        </a>

        <nav className="navbar" data-navbar>
          <ul className="navbar-list">
            <li>
              <a href="#home" className="navbar-link" data-nav-link>
                Home
              </a>
            </li>

            <li>
              <a href="#featured-car" className="navbar-link" data-nav-link>
                Explore
              </a>
            </li>

            <li>
              <a href="#" className="navbar-link" data-nav-link>
                About us
              </a>
            </li>

            <li>
              <a href="#" className="navbar-link" data-nav-link>
                Popular
              </a>
            </li>
          </ul>
        </nav>

        <div className="header-actions">
          <div className="header-contact">
            <a href="tel:88002345678" className="contact-link">
              9990009090
            </a>

            <span className="contact-time">Mon - Sat: 9:00 am - 6:00 pm</span>
          </div>
          <a href="#" className="btn" aria-labelledby="aria-label-txt">
            <span id="aria-label-txt">Login </span>
          </a>
          <a href="#" className="btn user-btn" aria-label="Profile"></a>
          <button
            className="nav-toggle-btn"
            data-nav-toggle-btn
            aria-label="Toggle Menu"
          >
            <span className="one"></span>
            <span className="two"></span>
            <span className="three"></span>
          </button>
        </div>
      </div>

      <div className="overlay" id="overlay"></div>
    </header>
  );
}
