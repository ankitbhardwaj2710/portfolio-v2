import { useEffect, useState } from "react";

const links = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);

      const sections = links
        .map((link) => document.querySelector(link.href))
        .filter(Boolean);

      let current = "home";

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();

        if (rect.top <= window.innerHeight * 0.35) {
          current = section.id;
        }
      });

      setActive(current);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = (event, href) => {
    event.preventDefault();

    const target = document.querySelector(href);

    if (!target) return;

    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <a
        href="#home"
        className="navbar-logo"
        onClick={(event) => handleClick(event, "#home")}
      >
        <span className="navbar-logo-mark">A</span>

        <span className="navbar-logo-text">
          ANKIT
          <small>BHARDWAJ</small>
        </span>
      </a>

      <nav className="navbar-links">
        {links.map((link, index) => {
          const id = link.href.replace("#", "");
          const isActive = active === id;

          return (
            <a
              key={link.label}
              href={link.href}
              className={isActive ? "active" : ""}
              onClick={(event) =>
                handleClick(event, link.href)
              }
            >
              <span className="nav-number">
                {String(index + 1).padStart(2, "0")}
              </span>

              <span>{link.label}</span>
            </a>
          );
        })}
      </nav>

      <div className="navbar-status">
        <span />
        <small>IND / 2026</small>
      </div>
    </header>
  );
}