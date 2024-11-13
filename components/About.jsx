/**
 * @copyright 2024 John Lin
 * @license Apache-2.0
 */

const aboutItems = [
  {
    label: "Project done",
    number: 45,
  },
  {
    label: "Years of experience",
    number: 10,
  },
];

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="custom-text">
          <p className="">
            Welcome! I&apos;m John, an aspiring Full-Stack Developer who
            constantly seeks new knowledge and skills to stay adaptable and
            inspired. Whether through internships, self-guided projects, or
            hands-on problem-solving, I’m always eager to explore new tools,
            refine my expertise, and grow professionally.
          </p>

          <div className="">
            {aboutItems.map(({ label, number }, key) => (
              <div key={key}>
                <div className="">
                  <span className="">{number}</span>
                  <span className="">+</span>
                </div>

                <p className="">{label}</p>
              </div>
            ))}

            <img
              src="/images/logo.svg"
              alt="Logo"
              width={30}
              height={30}
              className=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
