/**
 * @copyright 2024 John Lin
 * @license Apache-2.0
 */

/**
 * Components
 */
import { ButtonPrimary } from "./Button";

const sitemap = [
  {
    label: "Home",
    href: "#home",
  },
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Work",
    href: "#work",
  },
  {
    label: "Reviews",
    href: "#reviews",
  },
  {
    label: "Contact me",
    href: "#contact",
  },
];

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/JohnL0919",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/john-lin-5373b5179/",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/johnl.jpg/",
  },
];

const Footer = () => {
  return (
    <footer className="section">
      <div className="container">
        <div className="">
          <div className="">
            <h2 className="headline-1">Let&apos;s Work Together Today!</h2>

            <ButtonPrimary
              href="mailto:johnlin8968@gmail.com"
              label="Start Project"
              icon="chevron_right"
            />
          </div>

          <div className="">
            <div>
              <p className="">Sitemap</p>
              <ul>
                {sitemap.map(({ label, href }, key) => (
                  <li key={key}>
                    <a href={href} className="">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="">Socials</p>
              <ul>
                {socials.map(({ label, href }, key) => (
                  <li key={key}>
                    <a href={href} target="_blank" className="">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
