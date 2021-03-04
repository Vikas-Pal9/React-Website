import React from "react"
import AboutImg from "../src/Images/About.webp"
import Common from "./Common";

function About() {
    return(
        <>
          <Common 
              name="Welcome to About page of"
              imgsrc={AboutImg}
              topic="I am a Freelancer and can create replica of any webite. If you love my work then feel free to contact me."
              visit="/contact"
              btname="Contact Now"
          />
        </>
    )
}

export default About