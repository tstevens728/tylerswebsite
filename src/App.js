import "./App.css";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Divider from '@mui/material/Divider';

import { useState} from "react";

function App() {
  const [showedAbout, setAboutShowed] = useState(false);
  const [showedExpierence, setExpierenceShowed] = useState(true);
  const [showedProject, setProjectShowed] = useState(true);
  const [showedContact, setContactShowed] = useState(true);

  function changeAbout(){
      setAboutShowed(false)
      setExpierenceShowed(true)
      setProjectShowed(true)
      setContactShowed(true)
  } 
  function changeExpierence() {
      setExpierenceShowed(false)
      setContactShowed(true)
      setAboutShowed(true)
      setProjectShowed(true)
  }
  function changeProject() {
      setProjectShowed(false)
      setAboutShowed(true)
      setExpierenceShowed(true)
      setContactShowed(true)
  }
  function changeContact() {
      setContactShowed(false)
      setAboutShowed(true)
      setProjectShowed(true)
      setExpierenceShowed(true)
  }
  return (
    <div className="background">
      <div className="header" style={styles.header}>
        <h1 className="name" styles={styles.nameText}>
          TylerStevens.
        </h1>
        <div style={styles.navButtonContainer}>
          <h2 style={styles.navButton}href="aboutme" onClick={() => changeAbout()}>
            <a id="hover-content">About Me</a>
          </h2>          
          <h2 href="expierence" onClick={() =>  changeExpierence()}>
            <a id="hover-content" >Expierence</a>
          </h2>
          <h2 href="projects" onClick={() =>  changeProject()}>
            <a id="hover-content">Projects</a>
          </h2>
          <h2 href="contactme" onClick={() =>  changeContact()}>
            <a id="hover-content">Contact Me!</a>
          </h2>
          <div className="arrow">
          <KeyboardArrowRightIcon ></KeyboardArrowRightIcon>
          </div>
        </div>
      </div>
      <div className="aboutme" style={showedAbout ? { display: "none" } : { display: "block" }}>
        <h1 >About me ...</h1>
          <p style={styles.aboutMetext}>Welcome! This website was created by me, Tyler Stevens.</p>
          <p style={styles.aboutMetext}>I recieved my Bachelors in Computer Science at Wentworth Institute of Technology in Boston, MA. </p>
          <p style={styles.aboutMetext}>My love for computers started at a young age, my dad owned an old Gateway computer and we would play flight simulator together. As I got older I would always have a computer for homework or to play games on. Once I got to highschool I decided to take an app development class, and although I really enjoyed it I wanted to take my shot at an engineering degree as I didnt have too many ideas on where to go with my career path. After almost two years in college I decided that I couldn't continue with Civil Engineering as nothing seemed to interest me in the field. So my first instinct was to look into Computer Science, I had been given recomendations from family and friends as I am always there to help them with their tech questions and so...</p>
          <h3 >My Journey Began</h3>
          <p style={styles.aboutMetext}>I started my Computer Science education learning Java. Although I spent many years learning with Java it is one of my least favorite languages to write in. My passion lays in Front End Programming where I can let my imagination roam free. I have made various web apps as well as a few phone apps. A majority of my expierence is with React and React Native.  In my free time I have been becoming more aquianted with Python, I have used Python before with Django, Pandas, etc. for classes and even with some large scale, in house apps but improving my skills in this area will allow me to push myself to becoming a full stack software engineer. </p>
      </div>
       
      <div className="expierence" style={showedExpierence ? { display: "none" } : { display: "block" }}>
        <h1 >Expierence ...</h1>
          <h3>Punchey || Technical Account Manager</h3>
            <p style={styles.aboutMetext}> - Provide technical expertise to clients via SaaS integrated chat system and Dialpad to troubleshoot software bugs to resolution. </p>
            <p style={styles.aboutMetext}> - Perform SQL queries to provide clients and co-workers with information stored in the database.</p>
            <p style={styles.aboutMetext}> - Attend daily engineering meetings to provide technical reports, feature requests, from the client.</p>
            <p style={styles.aboutMetext}> - Manage all incoming accounts to ensure software is configured to function correctly with clients hardware. </p>
            <p style={styles.aboutMetext}> - One-on-one software training for clients, connect payment gateway, configure POS module.</p>
          <h3>BMG 360 || Software Engineering & IT Intern</h3>
            <p style={styles.aboutMetext}> - Developed procedure for machine setups, additionally prepared ~ 30 windows and mac operating systems for new hires. </p>
            <p style={styles.aboutMetext}> - Deployed Notion company wide, conducted one on one instructional meetings  with every manager.</p>
            <p style={styles.aboutMetext}> - Designed and constructed a new profile page and app page with React and Python for the company wide buying software.</p>            
          <h3>Punchey || Software Engineering Intern</h3>
            <p style={styles.aboutMetext}> - Engineered features with React Native including a discount system and patch notes page for the company's mobile app. </p>
            <p style={styles.aboutMetext}> - Participated in daily engineering team meetings to plan short-term and long-term bug fixes and software upgrades.</p>
            <p style={styles.aboutMetext}> - Assisted in setting up the new office; this includes reformatting and setting up Personal Computers for salesmen and front of office workers, as well as providing IT knowledge to coworkers to continue a smooth workflow.</p>                                           
            
            
            
       </div>
      <div className="projects" style={showedProject ? { display: "none" } : { display: "block" }}>
        <h1 >Projects ...</h1>
          <h2>Business Website</h2>
          <Divider variant="middle"/>
              <p style={styles.aboutMetext}> Work in progress...<br/>
               </p>
                <div style={styles.projectDiv}>
              <p style={styles.aboutMetext}>Creating: <br/><br/>
                - Websites<br/>
                - Phone Apps<br/>
                - UI/UX Design</p>
                <img style={styles.busiLogo} src={require('./Assets/Vector.png')}></img>
                
                </div>
          <h2>Personal Website</h2>
          <Divider variant="middle"/>
            <p style={styles.aboutMetext}> This is my portfolio Website!</p>
            <p style={styles.aboutMetext}> This page is built with React, I will be using it to show off my projects and skills as a programmer, please take a look around and enjoy.</p>   
      </div>
      <div className="contact" style={showedContact ? { display: "none" } : { display: "block" }}>
        <h1 >Contact Me ...</h1>
          <h3>Social Media</h3>
            <p style={styles.aboutMetext}> LinkedIn: <a>https://www.linkedin.com/in/tyler-stevens-cs/</a></p>
          <h3>Contacts: </h3>
            <p style={styles.aboutMetext}> Phone: (203) 767-2928 </p>
            <p style={styles.aboutMetext}> Email: <a>tstevens728@yahoo.com</a></p>
            <p style={styles.aboutMetext}> Website: </p>  
      </div>
    </div>
  );
  }

export default App;

const styles ={
  
  navButtonContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: "1400px",
    
  },
  aboutMetext: {
    color: "#F2F2F2"
  },
  projectDiv: {
    alignItems: "end",
    display: "flex",
    flexDirection: "row",
  },
  busiLogo: {
    paddingLeft: "40px"
  },
  
  header: {
    display: "flex",
    alignItems: "center",
    paddingLeft: "30px",
    marginLeft: "-1px",
    height: "100px",
    marginTop: "20px",
    borderTopRightRadius: "20px",
    borderBottomRightRadius: "20px",
    color: "#191d20",
    
  },
  nameText: {
    fontWeight: "40px",
    fontFamily: "Orbitron",
    textShadow: "2px 2px 5px",
  },
};
