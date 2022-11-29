import "./App.css";

function App() {
  return (
    <div style={styles.container}>
      <div className="header" style={styles.header}>
        <h1 className="name" styles={styles.nameText}>
          TylerStevens._
        </h1>
        <div style={styles.navButtonContainer}>
          <a href="">
            <h1 id="hover-content">About Me</h1>
          </a>
          <a href="">
            <h1 id="hover-content">Expierence</h1>
          </a>
          <a href="">
            <h1 id="hover-content">Projects</h1>
          </a>
          <a href="">
            <h1 id="hover-content">Contact Me!</h1>
          </a>
        </div>
      </div>
      <div className="aboutme" style={styles.aboutContainer}>
        <h1>About Me :)</h1>
      </div>
    </div>
  );
}

export default App;

const styles = {
  container: {
    height: "100%",
    width: "100%",
  },
  navButtonContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: "1400px",
  },
  aboutContainer: {
    display: "flex",
    alignItems: "center",
    margin: "auto",
    borderRadius: "400px",
    height: "800px",
    width: "800px",
  },
  header: {
    display: "flex",
    alignItems: "center",
    paddingLeft: "30px",
    height: "100px",
    marginTop: "20px",
    borderTopRightRadius: "20px",
    borderBottomRightRadius: "20px",
    color: "#191d20",
  },
  nameText: {
    fontWeight: "40px",
    fontFamily: "Orbitron",
    textShadow: "2px 2px 5px red",
  },
};
