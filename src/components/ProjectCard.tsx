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
            width: "22rem",
            "margin-top": "50px",
            padding: "5px",
          } as React.CSSProperties
        }
      >
        <img
          src={"/docs/assets/" + imgName}
          className="card-img-top"
          alt={title}
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{desc}</p>
          <a href={link} className="btn btn-primary">
            {buttonName}
          </a>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
