import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <>
      <h1 className="contactName">Contact Me!</h1>
      <div
        style={
          {
            height: "13rem",
            "background-color": "#021C27",
          } as React.CSSProperties
        }
      >
        <h2
          className="contactName"
          style={
            {
              height: "5rem",
              top: "455%",
            } as React.CSSProperties
          }
        >
          <a target="_blank" href="https://github.com/SophShan">
            <FontAwesomeIcon
              icon={faGithub}
              style={
                {
                  margin: "1rem 1rem 0rem 1rem",
                  color: "#EDD9C7",
                } as React.CSSProperties
              }
            />
          </a>
          {"  "}
          <a
            target="_blank"
            href="https://www.linkedin.com/in/sophiashantharupan/"
          >
            <FontAwesomeIcon
              icon={faLinkedinIn}
              style={
                {
                  margin: "1rem 1rem 0rem 1rem",
                  color: "#EDD9C7",
                } as React.CSSProperties
              }
            />
          </a>{" "}
          <a target="_blank" href="mailto:sophiashanthan@gmail.com">
            <FontAwesomeIcon
              icon={faEnvelope}
              style={
                {
                  margin: "1rem 1rem 0rem 1rem",
                  color: "#EDD9C7",
                } as React.CSSProperties
              }
            />
          </a>
        </h2>
      </div>
    </>
  );
};

export default Contact;
