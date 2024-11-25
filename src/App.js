import "./App.css";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Divider from '@mui/material/Divider';
import { display } from "@mui/system";

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
            <a className="headerText" href="#" onClick={() => changeAbout()}>
              <h1 id="hover-content">About Me</h1>
            </a>        
          <a className="headerText" href="#" onClick={() =>  changeExpierence()}>
            <h1 id="hover-content" >Expierence</h1>
          </a>
          <a className="headerText" href="#" onClick={() =>  changeProject()}>
            <h1 id="hover-content">Projects</h1>
          </a>
          <a className="headerText" href="#" onClick={() =>  changeContact()}>
            <h1 id="hover-content">Contact Me!</h1>
          </a>
          <div className="arrow">
          <KeyboardArrowRightIcon ></KeyboardArrowRightIcon>
          </div>
        </div>
      </div>

      {/* About Me  */}
      <div className="aboutme" style={showedAbout ? { display: "none" } : { display: "block" }}>
        <h1 >About me ...</h1>
          <p style={styles.aboutMetext}>Welcome! This website was created by me, Tyler Stevens.</p>
          <p style={styles.aboutMetext}>I recieved my Bachelors in Computer Science at Wentworth Institute of Technology in Boston, MA. </p>
          <p style={styles.aboutMetext}>My love for computers started at a young age, my dad owned an old Gateway computer and we would play flight simulator together. As I got older I would always have a computer for homework or to play games on. Once I got to highschool I decided to take an app development class, and although I really enjoyed it I wanted to take my shot at an engineering degree as I didnt have too many ideas on where to go with my career path. After almost two years in college I decided that I couldn't continue with Civil Engineering as nothing seemed to interest me in the field. So my first instinct was to look into Computer Science, I had been given recomendations from family and friends as I am always there to help them with their tech questions and so...</p>
          <h3 >My Journey Began</h3>
          <p style={styles.aboutMetext}>I started my Computer Science education learning Java. Although I spent many years learning with Java it is one of my least favorite languages to write in. My passion lays in Front End Programming where I can let my imagination roam free. I have made various web apps as well as a few phone apps. A majority of my expierence is with React and React Native.  In my free time I have been becoming more aquianted with Python, I have used Python before with Django, Pandas, etc. for classes and even with some large scale, in house apps but improving my skills in this area will allow me to push myself to becoming a full stack software engineer. </p>
      </div>
      
      {/* Expierence  */}
      <div className="expierence" style={showedExpierence ? { display: "none" } : { display: "block" }}>
        <h1>Skills ...</h1>
        <h3>Languages</h3>
        <p style={styles.aboutMetext}>JavaScipt || Python || Java || SQL</p>
        <h3>Framework</h3>
        <p style={styles.aboutMetext}>React || React Native || Django</p>
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
      

      {/* Projects  */}
      <div className="projects" style={showedProject ? { display: "none" } : { display: "block" }}>
        <h1 >Projects ...</h1>
        <h2>Personal Website</h2>
            <p style={styles.aboutMetext}> This is my portfolio Website!</p>
            <p style={styles.aboutMetext}> This page is built with React, I will be using it to show off my projects and skills as a programmer, please take a look around and enjoy.</p>   
          <h2>Professional Expierence</h2>
          <h3>BMG 360 - Barrington Media Group</h3>
          <p style={styles.aboutMetext}>Built using a React Framework</p>
          <p style={styles.aboutMetext}> - Features: Favorited Apps, File Upload, Password Conditions, App Carousel, Employee Profile</p>
          <p style={styles.aboutMetext}>Python utilized for backend functionality</p>
          <p style={styles.aboutMetext}> - Features: Department Employees Query via REST API, Password Reset </p>
            <video style={styles.intershipVideo} src={require('./Assets/InternshipWork.mp4')} controls></video>
          <h2>Business Website</h2>
              <div style={styles.projectDiv}>
                <p style={styles.aboutMetext}>Creating: <br/><br/>
                  - Websites<br/>
                  - Phone Apps<br/>
                  - UI/UX Design</p>
                <img style={styles.busiLogo} src={require('./Assets/Vector.png')}></img>                
              </div>
          </div>

      {/* Contact  */}
      <div className="contact" style={showedContact ? { display: "none" } : { display: "block" }}>
        <h1 >Contact Me ...</h1>
        <div style={styles.contactDiv}>
          <div style={styles.contactInner}>
            <h3>Contacts: </h3>
              <p style={styles.aboutMetext}> Phone: (203) 767-2928 </p>
              <p style={styles.aboutMetext}> Email: <a className="contactLinks" href="mailto: tstevens728@yahoo.com">tstevens728@yahoo.com</a></p>
              <p style={styles.aboutMetext}> Website: <a className="contactLinks" href="https://tstevens728.github.io/tylerswebsite/">https://tstevens728.github.io/tylerswebsite/</a></p>  
          </div>
          <div style={styles.contactInner}>
            <h3>Social Media</h3>
              <p style={styles.aboutMetext}> LinkedIn: <a className="contactLinks" href="https://www.linkedin.com/in/tyler-stevens-cs/">https://www.linkedin.com/in/tyler-stevens-cs/</a></p>
              <p style={styles.aboutMetext}> GitHub: <a className="contactLinks" href="https://github.com/tstevens728">https://github.com/tstevens728</a></p>
          </div>
        </div>
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
    width: "90%",
    
  },
  contactDiv:{
    display: "flex",
    flexDirection: "row",
    textAlign: "top"
  },
  contactInner: {
    paddingLeft: "40px"
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
  intershipVideo: {
    width:'50%',
    height:'50%',
    display: 'flex',
    justifyContent: 'center'
  },
  nameText: {
    fontWeight: "40px",
    fontFamily: "Orbitron",
    textShadow: "2px 2px 5px",
  },
};
