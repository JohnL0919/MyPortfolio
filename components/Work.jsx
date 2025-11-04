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
    imgSrc: "/images/scenic1.jpg",
    title: "ScenicShare",
    tags: ["TypeScript", "Next.js", "TailwindCSS", "Firebase"],
    projectLink:
      "https://scenicshare-backend--scenicshare-c3d7c.asia-southeast1.hosted.app/",
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
