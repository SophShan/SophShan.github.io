import Header from "./components/Header";
import Nav from "./components/Nav";
import ProjectCard from "./components/ProjectCard";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
  return (
    <>
      <Nav></Nav>
      <Header></Header>

      <div
        className="grid text-center"
        style={
          {
            width: "100%",
            "background-color": "#071D29",
            display: "flex",
            "justify-content": "center",
            "flex-wrap": "wrap",
            "grid-column-gap": "1.5rem",
          } as React.CSSProperties
        }
      >
        <div id="Projects" className="g-col-6 g-col-md-4">
          {" "}
          <ProjectCard
            title="To Do App"
            desc='This app was developed using Flutter. It was primarily developed for Android and all testing for this app was conducted using an Android device and emulator.
	The app uses a database to store the user&apos;s tasks so that the tasks the user has inputted are still viewable and updatable upon reopening the app. The Flutter API
	"Slidables" was used to create the sliding effect for the task deletion function. '
            buttonName="GitHub"
            imgName="ConnectFour.png"
            link="none"
          ></ProjectCard>
        </div>
        <div className="g-col-6 g-col-md-4">
          <ProjectCard
            title="To Do App"
            desc='This app was developed using Flutter. It was primarily developed for Android and all testing for this app was conducted using an Android device and emulator.
	The app uses a database to store the user&apos;s tasks so that the tasks the user has inputted are still viewable and updatable upon reopening the app. The Flutter API
	"Slidables" was used to create the sliding effect for the task deletion function. '
            buttonName="GitHub"
            imgName="To Do App.png"
            link="none"
          ></ProjectCard>
        </div>
        <div className="g-col-6 g-col-md-4">
          <ProjectCard
            title="To Do App"
            desc='This app was developed using Flutter. It was primarily developed for Android and all testing for this app was conducted using an Android device and emulator.
	The app uses a database to store the user&apos;s tasks so that the tasks the user has inputted are still viewable and updatable upon reopening the app. The Flutter API
	"Slidables" was used to create the sliding effect for the task deletion function. '
            buttonName="GitHub"
            imgName="To Do App.png"
            link="none"
          ></ProjectCard>
        </div>
        <div className="g-col-6 g-col-md-4">
          <ProjectCard
            title="To Do App"
            desc='This app was developed using Flutter. It was primarily developed for Android and all testing for this app was conducted using an Android device and emulator.
	The app uses a database to store the user&apos;s tasks so that the tasks the user has inputted are still viewable and updatable upon reopening the app. The Flutter API
	"Slidables" was used to create the sliding effect for the task deletion function. '
            buttonName="GitHub"
            imgName="To Do App.png"
            link="none"
          ></ProjectCard>
        </div>
      </div>
    </>
  );
}

export default App;
