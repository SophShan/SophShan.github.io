import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";

import "../App.css";

interface Props {
  title: string;
  desc: string;
  imgName: string;
  vid?: boolean;
  children: React.ReactNode; // children are Spans/skills
  demo?: string;
  github?: string;
}

const ProjectCard = ({
  title,
  desc,
  imgName,
  vid = false,
  children,
  demo = "",
  github = "",
}: Props) => {
  return (
    <>
      <div
        className="card"
        style={
          {
            width: "29rem",
            "margin-top": "5rem",
            "margin-left": "1rem",
            padding: "0rem",
            "border-radius": "1.2rem",
            "background-color": "#152A4D",
            border: "0.05rem solid white",
          } as React.CSSProperties
        }
      >
        <div style={{ padding: "0.8rem" } as React.CSSProperties}>
          {vid ? (
            <video className="card-img-top" style={{ height: "50%" }} controls>
              <source src={"./assets/" + imgName} type="video/mp4" />
              Your browser does not support the video.
            </video>
          ) : (
            <img
              src={"./assets/" + imgName}
              className="card-img-top"
              alt={title}
            />
          )}
        </div>
        <div
          className="card-body "
          style={
            {
              "background-color": "#123146",
              "border-radius": "1.2rem",
            } as React.CSSProperties
          }
        >
          <h5 className="card-title" style={{ color: "#EDD9C7" }}>
            {title}
          </h5>
          <p
            className="card-text"
            style={
              {
                color: "#EDD9C7",
              } as React.CSSProperties
            }
          >
            {desc}
          </p>
          <>
            {children}
            <br></br>
          </>
          <br></br>
          {github != "" ? (
            <a href={github} className="btnBase" target="_blank">
              GitHub <FontAwesomeIcon icon={faGithub} />
            </a>
          ) : null}
          {demo != "" ? (
            <a href={demo} className="btnBase" target="_blank">
              Demo Me! <FontAwesomeIcon icon={faLaptopCode} />
            </a>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
