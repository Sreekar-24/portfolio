export default function ProjectCard({
  name,
  img,
  altImgText = "",
  description,
  skills,
  link = "/",
}) {
  return (
    <div className="project-card">
      <h3 className="project-name">{name}</h3>
      <div className="project-contents">
        <div className="image-container">
          <img className="project-image" src={img} alt={altImgText} />
        </div>
        <div className="project-details">
          <p className="project-description description">{description}</p>
          <ul className="project-skills">
            {skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
          <div>
            <button className="primary-button">
              <a href={link}>View Project</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
