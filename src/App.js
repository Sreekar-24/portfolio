import "./App.css";
import { useEffect, useState, useRef } from "react";
import chessImage from "./assets/Chess-Image.svg";
import dataImage from "./assets/Data-Image.svg";
import faceImage from "./assets/Face-Image.svg";
import webImage from "./assets/Web-Image.svg";
import ProjectCard from "./components/ProjectCard";
import projects from "./json/Projects.json";
import resume from "./resources/Sreekar_Pininti_Resume.docx";

function App() {
  const images = {
    "Chess-Image": chessImage,
    "Data-Image": dataImage,
    "Face-Image": faceImage,
    "Web-Image": webImage,
  };
  const activeRef = useRef(null);
  const loadRef = useRef(null);
  const resumeRef =
    "https://drive.google.com/file/d/17P-ERyKx1D0GaWEcOP12G1wtDwbc7JX_/view?usp=sharing";

  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    setCoordinates({ x: clientX, y: clientY });
  };

  const removeOnLoad = () => {
    setTimeout(() => {
      loadRef.current.classList.remove("pre-loader");
    }, 10000);
  };

  useEffect(() => {
    const handleActiveChange = () => {
      const hash = window.location.hash.slice(1);
      const element = document.getElementById(hash + "-ref");
      if (element) {
        if (activeRef.current) {
          activeRef.current.classList.remove("active");
        }
        element.classList.add("active");
        activeRef.current = element;
      }
    };
    window.addEventListener("hashchange", handleActiveChange);
    return () => {
      window.removeEventListener("hashchange", handleActiveChange);
    };
  }, []);

  useEffect(() => {
    removeOnLoad();
  }, []);

  return (
    <div
      className="app"
      onMouseMove={handleMouseMove}
      style={{
        "--gradient-x": coordinates.x + "px",
        "--gradient-y": coordinates.y + "px",
      }}
    >
      <div className="pre-loader" ref={loadRef}></div>
      <div className="main-container">
        <header className="right-side my-content">
          <div className="about-me">
            <div className="my-name">
              <span>Hi There!</span>
              <span>
                I'm <span className="name">SREEKAR</span>
              </span>
            </div>
            <div className="my-titles">Software Engineer</div>
          </div>
          <nav className="section-nav">
            <ul>
              <li id="about-ref">
                <a href="#about">About</a>
              </li>
              <li id="experience-ref">
                <a href="#experience">Experience</a>
              </li>
              <li id="skills-ref">
                <a href="#skills">Skills</a>
              </li>
              <li id="projects-ref">
                <a href="#projects">Projects</a>
              </li>
              <li id="contact-ref">
                <a href="#contact">Contact</a>
              </li>
              <li id="resume-ref">
                <a href="#resume">Resume</a>
              </li>
            </ul>
          </nav>
          <nav className="socials">
            <ul>
              <li>
                <a href="https://github.com/Sreekar-24/">
                  <svg
                    className="logo"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="var(--text-color)"
                    aria-hidden="true"
                    id="github"
                  >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                  </svg>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/sreekar-pininti/">
                  <svg
                    className="logo"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="var(--text-color)"
                    aria-hidden="true"
                    id="linkedin"
                  >
                    <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                  </svg>
                </a>
              </li>
              <li>
                <a href="https://leetcode.com/u/_sreekar_/">
                  <svg
                    className="logo"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    id="leetcode"
                    fill="var(--text-color)"
                  >
                    <path d="M20.303 16.047h-9.561c-.936 0-1.697-.803-1.697-1.79s.762-1.79 1.697-1.79h9.561c.936 0 1.697.803 1.697 1.79s-.762 1.79-1.697 1.79zm-9.561-2.58c-.385 0-.697.354-.697.79s.312.79.697.79h9.561c.385 0 .697-.354.697-.79s-.312-.79-.697-.79h-9.561z"></path>
                    <path d="M11.618 24c-1.604 0-2.977-.533-3.97-1.541L3.55 18.278C2.551 17.262 2 15.819 2 14.215c0-1.578.551-3.008 1.552-4.025L13.071.509c.66-.67 1.829-.652 2.506.036.694.706.71 1.839.034 2.524l-1.762 1.816a5.25 5.25 0 0 1 1.739 1.159l2.463 2.53c.672.684.655 1.815-.039 2.521a1.79 1.79 0 0 1-1.284.545c-.464 0-.896-.181-1.219-.509l-2.536-2.492c-.321-.327-.779-.49-1.367-.49-.606 0-1.069.157-1.375.469l-4.067 4.194c-.342.349-.521.831-.521 1.4 0 .577.189 1.101.519 1.436l4.083 4.182c.315.321.774.484 1.362.484s1.045-.163 1.36-.484l2.549-2.505a1.687 1.687 0 0 1 1.209-.503h.002c.483 0 .939.194 1.286.546.693.705.71 1.837.036 2.522l-2.457 2.525C14.586 23.438 13.176 24 11.618 24zM14.29 1a.703.703 0 0 0-.507.21l-9.519 9.681C3.449 11.72 3 12.9 3 14.215c0 1.341.449 2.535 1.265 3.363l.001.001 4.097 4.18C9.162 22.57 10.288 23 11.618 23c1.288 0 2.444-.455 3.258-1.282l2.457-2.525c.295-.301.279-.804-.034-1.122a.801.801 0 0 0-.573-.247h-.001a.703.703 0 0 0-.502.209l-2.549 2.505c-.497.507-1.214.778-2.068.778s-1.572-.271-2.076-.784L5.446 16.35c-.519-.527-.805-1.286-.805-2.136 0-.824.286-1.57.806-2.099l4.067-4.194c.503-.512 1.206-.771 2.091-.771.854 0 1.571.271 2.074.783l2.536 2.492a.705.705 0 0 0 .512.216.798.798 0 0 0 .571-.246c.313-.319.33-.822.037-1.121l-2.461-2.528a4.238 4.238 0 0 0-2.028-1.137c-.175-.041-.331-.176-.382-.349s-.021-.363.104-.492l2.325-2.398c.298-.302.282-.805-.031-1.124A.799.799 0 0 0 14.29 1z"></path>
                  </svg>
                </a>
              </li>
              <li>
                <a href="mailto:pinintisreekar@example.com">
                  <svg
                    className="logo"
                    xmlns="http://www.w3.org/2000/svg"
                    fill-rule="evenodd"
                    stroke-linejoin="round"
                    stroke-miterlimit="2"
                    clip-rule="evenodd"
                    viewBox="0 0 24 24"
                    fill="var(--text-color)"
                    id="gmail"
                  >
                    <g transform="translate(-40 -40)">
                      <rect
                        width="24"
                        height="24"
                        x="40"
                        y="40"
                        fill="none"
                      ></rect>
                      <path
                        d="M254.895,94.024C254.895,93.255 254.59,92.517 254.046,91.973C253.502,91.43 252.764,91.124 251.995,91.124C248.165,91.124 239.835,91.124 236.005,91.124C235.236,91.124 234.498,91.43 233.954,91.973C233.41,92.517 233.105,93.255 233.105,94.024C233.105,97.088 233.105,102.912 233.105,105.976C233.105,106.745 233.41,107.483 233.954,108.027C234.498,108.57 235.236,108.876 236.005,108.876C239.835,108.876 248.165,108.876 251.995,108.876C252.764,108.876 253.502,108.57 254.046,108.027C254.59,107.483 254.895,106.745 254.895,105.976L254.895,94.024ZM253.095,94.024L253.095,105.976C253.095,106.268 252.979,106.548 252.773,106.754C252.567,106.96 252.287,107.076 251.995,107.076C248.165,107.076 239.835,107.076 236.005,107.076C235.713,107.076 235.433,106.96 235.227,106.754C235.021,106.548 234.905,106.268 234.905,105.976C234.905,102.912 234.905,97.088 234.905,94.024C234.905,93.732 235.021,93.452 235.227,93.246C235.433,93.04 235.713,92.924 236.005,92.924C239.835,92.924 248.165,92.924 251.995,92.924C252.287,92.924 252.567,93.04 252.773,93.246C252.979,93.452 253.095,93.732 253.095,94.024ZM237.9,96.365L237.9,105C237.9,105.497 237.497,105.9 237,105.9C236.503,105.9 236.1,105.497 236.1,105L236.1,95C236.1,94.697 236.252,94.415 236.505,94.249C236.757,94.082 237.076,94.054 237.355,94.173L244,97.021L250.645,94.173C250.924,94.054 251.243,94.082 251.495,94.249C251.748,94.415 251.9,94.697 251.9,95L251.9,105C251.9,105.497 251.497,105.9 251,105.9C250.503,105.9 250.1,105.497 250.1,105L250.1,96.365L244.355,98.827C244.128,98.924 243.872,98.924 243.645,98.827L237.9,96.365Z"
                        transform="translate(-192 -48)"
                      ></path>
                    </g>
                  </svg>
                </a>
              </li>
            </ul>
          </nav>
        </header>
        <main className="left-side">
          <section id="about">
            <h2 className="section-header">About</h2>
            <div className="description">
              I'm a curious and adaptable professional who loves learning new
              things and taking on fresh challenges. I enjoy thinking outside
              the box and finding innovative ways to tackle projects. I'm always
              open to expanding my skill set and getting better at what I do. I
              aim to bring my enthusiasm and problem-solving mindset to every
              team I'm a part of. Let's connect and see how we can work together
              to create something great!
            </div>
          </section>
          <section id="experience">
            <h2 className="section-header">Experience</h2>
            <div className="exp-content">
              <h3 className="company-name">Credera</h3>
              <span className="duration">Feb / 2023 - Apr /2024</span>
              <div className="description">
                Designed and developed dynamic user interfaces and single-page
                applications (SPAs) using <span>React</span> ,{" "}
                <span>Angular</span>, and <span>Next.js</span>. Implemented
                responsive designs and modern UI components, ensuring
                consistency and cross-browser compatibility with{" "}
                <span>Tailwind CSS</span>. Developed and maintained robust
                backend services and RESTful APIs with Node.js and Express.js.
                <br />
                <br />
                Proficient in modern <span>JavaScript (ES6+)</span> and{" "}
                <span>TypeScript</span>, enabling type-safe coding and advanced
                feature implementation. Integrated various e-commerce platforms
                and implemented <span>GraphQL</span> queries to optimize data
                fetching and real-time updates. Specialized in building and
                customizing e-commerce (B2B) websites using{" "}
                <span>Vue Storefront (VSF)</span>, <span>Frontastic</span>, and{" "}
                <span>SAP Commerce Composable Storefront (Spartacus)</span>,
                leveraging cutting-edge frameworks to deliver scalable and
                maintainable solutions.
              </div>
            </div>
          </section>
          <section id="skills">
            <h2 className="section-header">Skills</h2>
            <ul className="skills-list">
              <li className="skill">
                <h3>Programming Languages :</h3> <span>Java</span>
              </li>
              <li className="skill">
                <h3>Scripting Languages :</h3>
                <span>TypeScript, JavaScript</span>
              </li>
              <li className="skill">
                <h3>Frontend frameworks :</h3>
                <span>React, Angular, Next.js</span>
              </li>
              <li className="skill">
                <h3>Backend frameworks :</h3> <span>Node.js, Express.js</span>
              </li>
              <li className="skill">
                <h3>E-commerce frameworks :</h3> <span>Commercetools</span>
              </li>
              <li className="skill">
                <h3>Query Languages :</h3> <span>GraphQL</span>
              </li>
              <li className="skill">
                <h3>Storefronts :</h3>
                <span>
                  Vue Storefront (VSF), Frontastic, SAP Commerce Composable
                  Storefront (Spartacus)
                </span>
              </li>
              <li className="skill">
                <h3> CMS Platforms :</h3>
                <span> Contentful, ContentStack</span>
              </li>
              <li className="skill">
                <h3>Libraries and other frameworks :</h3>
                <span> jQuery, tailwind CSS</span>
              </li>
            </ul>
          </section>
          <section id="projects">
            <h2 className="section-header">Projects</h2>
            <ul className="project-list">
              {projects.map((project) => {
                return (
                  <li key={project.name}>
                    <ProjectCard
                      name={project.name}
                      img={images[project.image] ?? ""}
                      altImgText={project.imageAlt}
                      description={project.description ?? ""}
                      skills={project.skills ?? []}
                      link={project.link}
                    />
                  </li>
                );
              })}
            </ul>
          </section>
          <section id="resume">
            <button className="primary-button">
              <a href={resumeRef} target="_blank">
                View Resume
              </a>
            </button>
            <button className="primary-button">
              <a href={resume} download>
                Download Resume
              </a>
            </button>
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
