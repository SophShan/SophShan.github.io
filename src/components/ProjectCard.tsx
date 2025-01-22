import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "../App.css";

interface Props {
  title: string;
  desc: string;
  buttonName: string;
  imgName: string;
  link: string;
}

const ProjectCard = ({ title, desc, buttonName, imgName, link }: Props) => {
  return (
    <>
      <div
        className="card"
        style={
          {
            width: "30rem",
            "margin-top": "5rem",
            padding: "0rem",

            "background-color": "#152A4D",
          } as React.CSSProperties
        }
      >
        <img
          src={"/docs/assets/" + imgName}
          className="card-img-top"
          alt={title}
        />
        <div
          className="card-body "
          style={
            {
              "background-color": "#123146",
            } as React.CSSProperties
          }
        >
          <h5 className="card-title">{title}</h5>
          <p
            className="card-text"
            style={
              {
                color: "white",
              } as React.CSSProperties
            }
          >
            {desc}
          </p>
          <a href={link} className="btnBase" target="_blank">
            {buttonName} <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
