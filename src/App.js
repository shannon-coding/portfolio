import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme } from '@material-ui/core/styles';
import ThemeProvider from "@material-ui/styles/ThemeProvider";

import Resume from './components/Resume';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Footer from './components/Footer';

const theme = createMuiTheme({
  palette: {
    type: "light",
    primary: {
      main: '#ffffff',
    },
    secondary: {
      main: '#000000',
    },
  },
});
export default function App() {
  const pageNames = {
    "heroName": "hero",
    "resumeName": "resume",
    "projectsName": "projects",
    "footerName": "footer",
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <main>
          {/* Hero unit */}
          <Hero 
            heroName={pageNames.heroName}
            resumeName={pageNames.resumeName}
          />
          {/* Resume section */}
          <Resume 
            {...pageNames}
          />
          {/* Projects section */}
          <Projects 
            projectsName={pageNames.projectsName}
          />
        </main>
        {/* Footer */}
        <footer>
          <Footer 
            footerName={pageNames.footerName}
          />
        </footer>
      </ThemeProvider>
    </React.Fragment>
  );
}