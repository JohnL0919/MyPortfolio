/**
 * @copyright 2024 John Lin
 * @license Apache-2.0
 */

const aboutItems = [
  {
    label: "Coding Projects Done",
    number: 2,
  },
  {
    label: "Photography Clients",
    number: 10,
  },
];

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="custom-text reveal-up">
          <p className="">
            Welcome! I&apos;m John, an aspiring Full-Stack Developer who
            constantly seeks new knowledge and skills to stay adaptable and
            inspired. Whether through internships, self-guided projects, or
            hands-on problem-solving, I’m always eager to explore new tools,
            refine my expertise, and grow professionally.
          </p>
          <p className="pt-2">
            I also have a passion in photography, combining my love for
            landscapes, street photography, and cars. I’m fascinated by the
            endless opportunities for storytelling that each genre provides.
            Whether it’s the serenity of the outdoors, the hustle of city life,
            or the craftsmanship of automobiles, I aim to bring those stories to
            life with every shot.
          </p>

          <div className="flex flex-wrap items-center gap-4 md:gap-7 pt-4">
            {aboutItems.map(({ label, number }, key) => (
              <div key={key}>
                <div className="flex items-center md:mb-2">
                  <span className="text-2xl font-semibold md:text-4xl">
                    {number}
                  </span>
                  <span className="font-semibold md:text-3xl">+</span>
                </div>

                <p className="text-sm text-zinc-400">{label}</p>
              </div>
            ))}

            <img
              src="/images/logo.svg"
              alt="Logo"
              width={30}
              height={30}
              className="ml-auto md:w-[40px] md:h-[40px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
