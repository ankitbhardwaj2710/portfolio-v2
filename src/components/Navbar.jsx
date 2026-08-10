import { useEffect, useState } from "react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Journey", href: "#journey" },
  { name: "Projects", href: "#projects" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("Home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = navLinks
        .map((link) => link.href.replace("#", ""))
        .map((id) => document.getElementById(id))
        .filter(Boolean);

      let current = "Home";

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();

        if (rect.top <= window.innerHeight * 0.35) {
          current =
            navLinks.find(
              (link) =>
                link.href === `#${section.id}`
            )?.name || current;
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen
      ? "hidden"
      : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <header
        className={`navbar ${
          scrolled ? "navbar-scrolled" : ""
        }`}
      >
        {/* LOGO */}
        <a
          href="#home"
          className="navbar-logo"
          onClick={closeMenu}
        >
          <div className="navbar-logo-mark">
            A
          </div>

          <div className="navbar-logo-text">
            <span>ANKIT</span>
            <small>BHARDWAJ</small>
          </div>
        </a>

        {/* DESKTOP LINKS */}
        <nav className="navbar-links">
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              className={
                active === link.name
                  ? "active"
                  : ""
              }
              onClick={closeMenu}
            >
              <span className="nav-number">
                {String(index + 1).padStart(
                  2,
                  "0"
                )}
              </span>

              {link.name}
            </a>
          ))}
        </nav>

        {/* STATUS */}
        <div className="navbar-status">
          <span />
          IND / 2026
        </div>

        {/* MOBILE BUTTON */}
        <button
          className="navbar-menu-button"
          onClick={() =>
            setMenuOpen((prev) => !prev)
          }
          aria-label={
            menuOpen
              ? "Close menu"
              : "Open menu"
          }
        >
          {menuOpen ? "×" : "☰"}
        </button>
      </header>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="navbar-mobile-menu">
          <div className="navbar-mobile-links">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                onClick={closeMenu}
              >
                <span>
                  {String(index + 1).padStart(
                    2,
                    "0"
                  )}
                </span>

                {link.name}
              </a>
            ))}
          </div>

          <div className="navbar-mobile-status">
            <span />
            AVAILABLE FOR WORK
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;