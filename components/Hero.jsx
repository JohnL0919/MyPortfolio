/**
 * @copyright 2024 John Lin
 * @license Apache-2.0
 */

/**
 * Components
 */
import { ButtonPrimary, ButtonOutline } from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

const Hero = () => {
  return (
    <section id="home" className="pt-28 lg:pt-36">
      <div className="container lg:grid lg:grid-cols-2 items-center lg:gap-10">
        <div>
          <div className="flex items-center gap-3">
            <figure className="img-box w-9 h-9 rounded-lg">
              <img
                src="/images/avatar-2.jpg"
                width={40}
                height={40}
                alt="John Lin Portrait"
                className="img-cover"
              />
            </figure>

            <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
              <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                <span className="custom-animate-ping absolute inset-0 rounded-full bg-emerald-400"></span>
              </span>
              Available for Work
            </div>
          </div>

          <h2 className="headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w--[15ch] mt-5 mb-8 lg:mb-10">
            Building Scalable Modern Websites for the Future
          </h2>

          <div className="flex items-center gap-3">
            <ButtonPrimary
              label={
                <span className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faDownload} className="w-5 h-5" />
                  Download CV
                </span>
              }
            />
            <ButtonOutline
              href="#about"
              label={
                <span className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faArrowDown} className="w-5 h-5" />
                  Scroll Down
                </span>
              }
            />
          </div>
        </div>

        <div className="hidden lg:block">
          <figure className="custom-container">
            <img
              src="/images/avatar-2.jpg"
              width={656}
              height={800}
              alt="John Lin"
              className="w-full"
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Hero;
