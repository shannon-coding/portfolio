import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

import Divider from '@material-ui/core/Divider';
import JobDetails from './JobDetails';
import EdDetails from './EdDetails';
import Skills from './Skills';
import Accomplishments from './Accomplishments';
import Certifications from './Certifications';

import { Link, Element} from "react-scroll";

const useStyles = makeStyles(theme => ({
  resumeSection: {
    minHeight: '100vh',
  },
  headerSpacing: {
    paddingTop: theme.spacing(6),
  },
  paper: {
    padding: theme.spacing(6),
  },
  header:{
    backgroundColor: "white"
  },
  indent:{
    paddingLeft: theme.spacing(5),
  },
  links:{
    display: "flex",
    flexDirection: "column",
    paddingTop: theme.spacing(2),
    [theme.breakpoints.up("md")]:{
      alignItems: "flex-end",
      paddingTop: theme.spacing(0),
    },
  },
  topPad:{
    paddingTop: theme.spacing(1),
  },
  leftContainer:{
    paddingRight: theme.spacing(2),
    [theme.breakpoints.up("md")]:{
      borderRight: "solid",
      borderColor: "lightgray",
      borderWidth: "0.1em",
    },
  },
  rightContainer:{
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    [theme.breakpoints.up("md")]:{
      paddingLeft: theme.spacing(2),
    },
  },
}));

function Resume(pageNames) {
  const classes = useStyles();
  const scrollDuration = 1500;

  let workExperience = {
    "craneII":{
      "jobTitle": "Electrical Engineer II",
      "years": "March 2017 - Present",
      "company": "Crane Aerospace and Electronics, Lynnwood, WA 98037",
      "accomplishments": [
        'Led the digital development, including FPGA design creation as well as digital circuitry design and layout on two 2.5 kW battery chargers, generating 40+ million dollars in revenue',
        'Designed all auxiliary and supervisory analog circuitry for successful integration between AC-DC converter and FPGA on battery chargers, below cost and schedule targets on program',
        'Successfully created all documents associated with a DO-254 FPGA design on two programs within schedule and cost targets, gaining customer approval and generating multiple milestone payments',
        'Led 8 State-of-Involvement (SOI) Audits supervised by Federal Aviation Administration (FAA) authorized representatives to successful certification of two DO-254 Design Assurance Level (DAL) C programs',
        'Mentored three University of Washington students in ENGINE capstone course, creating a 640 W bi-directional DC/DC converter to simulation functionality',
      ],
    },
    "craneI":{
      "jobTitle": "Electrical Engineer I",
      "years": "November 2014 - March 2017",
      "company": "Crane Aerospace and Electronics",
      "accomplishments": [
        'Led electrical design of 12 kW Regulated Transformer Rectifier Unit (RTRU) through qualification testing and type certification',
        'Completed electrical analyses of Power Conditioning Module within schedule targets, supporting customer First Flight activities and generating a milestone payment of $500,000+',
      ],
    },
  };
  let education = {
    "uw":{
      "degree": "Bachelor of Science in Electrical Engineering",
      "years": "September 2009 - June 2014",
      "institution": "University of Washington",
      "accomplishments": [
        'Core Concentrations: Analog Circuit Design, Sensors and Devices',
        'GPA: 3.69/4.00, Electrical Engineering GPA: 3.82/4.00',
        'Minor: Mathematics',
      ],
    },
  };

  let objective ={
    "statement": `Results
    oriented professional with proven problem solving, technical, and critical thinking skills. Aiming to
    leverage my industry proven abilities to successfully fill the electrical engineer role. Frequently praised as efficient
    and dependable by my peers, which includes four successful product development projects through qualification
    and certification activities, I can be relied upon to help the company achieve its goals.`
  }

  let skills ={
    "designSoftware": `Libero SoC, LTSpice,
    Quartus, MATLAB, PSIM, PADS Logic, PADS
    Layout, IBM Rational Change, DOORS`,
    "programmingLanguages": `VHDL, Python,
    JavaScript, Java, ReactJS, MATLAB`
  }

  let accomplishments ={
    "accomplishments": [`Four Crane excellence awards
    received for battery charger activities
    from prototype creation through
    certification`,
    `Three Crane excellence awards
    received for electrical design work on
    various programs`]
  }

  let certifications =[
    {
      "title": "Engineer-in-Training, Electrical and Computer",
      "year": "October 2015",
      "institution": "State of Washington",
    },
    {
      "title": "Airborne Hardware Certification, DO-254",
      "year": "March 2019",
      "institution": "PATMOS Engineering Services",
    },
    {
      "title": "Airborne Software Certification, DO-178C",
      "year": "March 2019",
      "institution": "PATMOS Engineering Services",
    },
  ]

  return (
    <Element name={pageNames.resumeName} className="element">
      <Grid className={classes.resumeSection}>
        <AppBar color="primary" position="relative">
          <Toolbar>
            <Link 
              to={pageNames.heroName}
              smooth={true}
              duration={scrollDuration}
            >
              <Button color="secondary">HOME</Button>
            </Link>
            <Link 
              to={pageNames.resumeName}
              smooth={true}
              duration={scrollDuration}
            >
              <Button color="secondary">RESUME</Button>
            </Link>
          
            <Link 
              to={pageNames.projectsName}
              smooth={true}
              duration={scrollDuration}
            >
              <Button color="secondary">PROJECTS</Button>
            </Link>
          
            <Link 
              to={pageNames.footerName}
              smooth={true}
              duration={scrollDuration}
            >
              <Button color="secondary">CONTACT</Button>
            </Link>
          </Toolbar>
        </AppBar>
        <Paper className={classes.paper}>
          <div className={classes.header}>
            <Grid item xs={12} align="left">
              <Typography variant="h2" component="h1">
                Jacob Shannon
              </Typography>
              <Typography variant="h5" component="h2">
                Electrical Engineer
              </Typography>
              <Typography component="p">
                (425) 736-9942
              </Typography>
            </Grid>
            <Grid className={classes.links} item xs={12}>
              <Typography component="p" variant="body2">
                jacobshnn@gmail.com
              </Typography>
              <Typography component="p" variant="body2">
                www.linkedin.com/in/jacobshannon
              </Typography>
            </Grid>
          </div>
          <Divider variant="middle" light />
          <Grid item xs={12} align="left">
            <Typography variant="h4" component="h3">
              Objective
            </Typography>
            <Typography component="p">
              {objective.statement}
            </Typography>
          </Grid>
          <Divider variant="middle" light />
          {/*Achievements portion of resume */}
          <Grid container className={classes.topPad}>
            <Grid className={classes.leftContainer} item md={6} xs={12}>
              <Typography variant="h4" component="h3">
                Experience
              </Typography>
              <JobDetails 
                  jobTitle={workExperience.craneII.jobTitle}
                  years={workExperience.craneII.years}
                  company={workExperience.craneII.company}
                  accomplishments={workExperience.craneII.accomplishments}
              />
              <JobDetails 
                  jobTitle={workExperience.craneI.jobTitle}
                  years={workExperience.craneI.years}
                  company={workExperience.craneI.company}
                  accomplishments={workExperience.craneI.accomplishments}
              />
              <Typography variant="h4" component="h3">
                Education
              </Typography>
              <EdDetails 
                degree ={education.uw.degree}
                years ={education.uw.years}
                institution ={education.uw.institution}
                accomplishments ={education.uw.accomplishments}
              />
            </Grid>
            <Grid className={classes.rightContainer} item md={6} xs={12}>
              <Grid>
                <Typography variant="h4" component="h3">
                    Skills
                  </Typography>
                  <Skills 
                    designSoftware = {skills.designSoftware}
                    programmingLanguages = {skills.programmingLanguages}
                  />
              </Grid>
              <Grid className={classes.topPad}>
                <Typography variant="h4" component="h3">
                  Certifications
                </Typography>
                <Certifications 
                  certs={certifications}
                />
              </Grid>
              <Grid className={classes.topPad}>
                <Typography variant="h4" component="h3">
                  Accomplishments
                </Typography>
                <Accomplishments 
                  accomplishments={accomplishments.accomplishments}
                />
              </Grid>
              <Grid className={classes.topPad}>
                <Typography variant="h4" component="h3">
                  References
                </Typography>
                <Typography component="p" className={classes.indent}>
                  Will gladly furnish professional references on request.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Element>
    
  )
}

export default Resume;