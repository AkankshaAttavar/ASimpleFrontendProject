import React from "react";

import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import '../Styles/Footer.css'

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        {/* Add links to social media profiles */}
        
        <a href="https://twitter.com/Akankshattavar" target="_blank" rel="noopener noreferrer">
          <TwitterIcon />
        </a>
        <a href="https://github.com/AkankshaAttavar" target="_blank" rel="noopener noreferrer">
          <GitHubIcon />
        </a>
        <a href="https://www.linkedin.com/in/akanksha-prakash-attavar-03188a205?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
          <LinkedInIcon />
        </a>
      </div>
      <p> &copy; 2023 akshuattavar@gmail.com</p>
    </div>
  );
}

export default Footer;
