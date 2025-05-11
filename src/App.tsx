import Contact from "./components/Contact";
import Header from "./components/Header";
import Nav from "./components/Nav";
import ProjectCard from "./components/ProjectCard";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";

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
            "background-color": "#021C27",
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
	"Slidables" was used to create the sliding effect for the task deletion function.'
            imgName="To Do App.png"
            github="https://github.com/SophShan/ToDoList"
            /*SKILLS*/
            children=<>
              <span className="badge text-dark skill">Flutter</span>
              <span className="badge text-dark skill">Dart</span>
              <span className="badge text-dark skill">Hive Database</span>
            </>
          ></ProjectCard>
        </div>
        <div className="g-col-6 g-col-md-4">
          <ProjectCard
            title="Among Us Leaf Clean Up Mini Game"
            desc="This project is a recreation of some of the mini games in the online game, Among Us. My primary task in this project was to recreate the Amoung Us Leaf Clean Up task, which is located in the reactor room of the game (Go to Upper Engine then Reactor). Users can travel through different parts of the map by clicking on the room they desire to go to. This map was intentionally designed so that the user can not revisit previous main rooms of the map without making a full circle of the map."
            imgName="Screen Shot 2023-03-06 at 10.15.01 PM.png"
            demo="https://stabl.rocks/ShowModulePublish?modulePublishId=ce15b0f1-ecde-4e7d-b71c-b2bee03278d2&fullscreen=true"
            /*SKILLS*/
            children=<>
              <span className="badge text-dark skill">Elm</span>
            </>
          ></ProjectCard>
        </div>
        <div className="g-col-6 g-col-md-4">
          <ProjectCard
            title="Connect Four"
            desc="This project is a recreation of game Connect Four and was a personal school project I took on. It was created using Java AWT and provides a graphical user interface that allows its users to choose between and play either a one person or two person game of Connect Four. In the one person version of the game, the user faces randomized moves of the computer."
            imgName="ConnectFour.png"
            github="https://github.com/SophShan/Connect-Four"
            /*SKILLS*/
            children=<>
              <span className="badge text-dark skill">Java</span>
              <span className="badge text-dark skill">Java Swing</span>
            </>
          ></ProjectCard>
        </div>
        <div className="g-col-6 g-col-md-4">
          <ProjectCard
            title="Math Vector Visualizer"
            desc="This project is a Math Visualizer created for Grade 12 students to develop a greater understanding of vectors and vector operations, with the use of drag and drop features and visual components to help students understand vector concepts. In this project, I primarily worked on the Vector Addition and Dot Product question pages. Furthermore, I developed the template that was used for the Vector Subtraction and Dot Product question pages. This includes the feature that allows the vectors to be dragged and placed in the correct position, as well to receive user input and provide them with the necessary feedback."
            imgName="MathDemo.mov"
            demo="https://stabl.rocks/ShowModulePublish?modulePublishId=26a5e4ec-51f9-46c5-af33-71be009c87eb&fullscreen=true"
            vid={true}
            /*SKILLS*/
            children=<>
              <span className="badge text-dark skill">Elm</span>
            </>
          ></ProjectCard>
        </div>

        <div id="Projects" className="g-col-6 g-col-md-4">
          {" "}
          <ProjectCard
            title="Don't Feed Me!"
            desc="This project was developed to gain experience in game development. This is a 2D side-scroller Mac and Windows compatible game that implements rigid body dynamics and 2D animation. The project was entirely created using Unity and C#. Game assets and background credit can be found on GitHub."
            imgName="Gameplay1.mov"
            github="https://github.com/SophShan/DontFeedMe/tree/main"
            vid={true}
            /*SKILLS*/
            children=<>
              <span className="badge text-dark skill">C#</span>
              <span className="badge text-dark skill">Unity</span>
            </>
          ></ProjectCard>
        </div>
        <div id="Projects" className="g-col-6 g-col-md-4">
          {" "}
          <ProjectCard
            title="Web Browser Game"
            desc="This is an individually completed full-stack project taken on to simulanteously develop my front-end and back-end skills. This project uses a HTML canvas and CSS for the front-end. It was developed using JavaScript for the logic and back-end. The website itself was developed and is hosted using GitHub Pages."
            imgName="webGame.png"
            demo="https://sophshan.github.io/fishgame/"
            github="https://github.com/SophShan/SophShan.github.io/tree/gh-pages/fishgame"
            /*SKILLS*/
            children=<>
              <span className="badge text-dark skill">JavaScript</span>
              <span className="badge text-dark skill">HTML Canvas</span>
              <span className="badge text-dark skill">CSS</span>
            </>
          ></ProjectCard>
        </div>
        <div id="Projects" className="g-col-6 g-col-md-4">
          {" "}
          <ProjectCard
            title="Image Background Remover Website"
            desc="This web app allows the user to upload a picture containing a background that they would like removed. After uploading thier image, the user can view the image with its background removed and are able to download the image by clicking on it. Python and Django were used for the backend of this app, while HTML was used for the front end. An API was also used to remove the background of each image."
            imgName="removeBG.png"
            demo="http://sophshan.pythonanywhere.com/playground/removeBG/"
            /*SKILLS*/
            children=<>
              <span className="badge text-dark skill">Django</span>
              <span className="badge text-dark skill">HTML</span>
              <span className="badge text-dark skill">CSS</span>
            </>
          ></ProjectCard>
        </div>
        <div id="Projects" className="g-col-6 g-col-md-4">
          {" "}
          <ProjectCard
            title="This Portfolio!"
            desc="This portfolio was refactored from HTML, CSS and JavaScript to use React with TypeScript."
            imgName="galaxy.webp"
            github="https://github.com/SophShan/SophShan.github.io/tree/gh-pages"
            /*SKILLS*/
            children=<>
              <span className="badge text-dark skill">React</span>
              <span className="badge text-dark skill">TypeScript</span>
              <span className="badge text-dark skill">Git</span>
              <span className="badge text-dark skill">HTML</span>
              <span className="badge text-dark skill">CSS</span>
              <span className="badge text-dark skill">Vite</span>
            </>
          ></ProjectCard>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
        </div>
      </div>
      <div
        style={
          {
            "background-color": "#021C27",
          } as React.CSSProperties
        }
      >
        <div id="Contact">
          <Contact></Contact>
        </div>
      </div>
    </>
  );
}

export default App;
