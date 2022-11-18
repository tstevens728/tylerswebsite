import "./App.css";

function App() {
  return (
    <div style={styles.container}>
      <div className="header" style={styles.header}>
        <h1 styles={styles.nameText}>TylerStevens._</h1>
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
      <div style={styles.bigContainer}></div>
    </div>
  );
}

export default App;

const styles = {
  bigContainer: {
    height: "5000px",
  },
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
  header: {
    display: "flex",
    alignItems: "center",
    paddingLeft: "30px",
    height: "100px",
    marginTop: "20px",
    borderTopRightRadius: "20px",
    borderBottomRightRadius: "20px",
  },
  nameText: {
    fontWeight: "40px",
    fontFamily: "Orbitron",
  },
};
