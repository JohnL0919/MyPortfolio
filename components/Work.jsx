/**
 * @copyright 2024 John Lin
 * @license Apache-2.0
 */

/**
 * Components
 */
import ProjectCard from "./ProjectCard";

const works = [
  {
    imgSrc: "/images/project-1.jpg",
    title: "PlaceHolder",
    tags: ["API", "MVC", "Development"],
    projectLink: "/",
  },
  {
    imgSrc: "/images/project-2.jpg",
    title: "PlaceHolder",
    tags: ["API", "SPA"],
    projectLink: "/",
  },
  {
    imgSrc: "/images/project-3.jpg",
    title: "PlaceHolder",
    tags: ["Development", "API"],
    projectLink: "",
  },
  {
    imgSrc: "/images/project-4.jpg",
    title: "PlaceHolder",
    tags: ["Web-design", "Development"],
    projectLink: "/",
  },
  {
    imgSrc: "/images/project-5.jpg",
    title: "PlaceHolder",
    tags: ["eCommerce", "Development"],
    projectLink: "/",
  },
  {
    imgSrc: "/images/project-6.jpg",
    title: "PlaceHolder",
    tags: ["Web-design", "Development"],
    projectLink: "/",
  },
];

const Work = () => {
  return (
    <section id="work" className="section">
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">My portfolio highlights</h2>

        <div className="project-grid">
          {works.map(({ imgSrc, title, tags, projectLink }, key) => (
            <ProjectCard
              key={key}
              imgSrc={imgSrc}
              title={title}
              tags={tags}
              projectLink={projectLink}
              classes="reveal-up"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
