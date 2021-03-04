import React from "react"
import HomeImg from "../src/Images/Home.webp"
import Common from "./Common"

function Home() {
    return(
        <>
         <Common
            name="Welcome to the Portfolio of"
            imgsrc={HomeImg}
            topic="We are the Team of Talented Web Developer and we creates Awesome websites"
            visit="/service"
            btname="Get Started"
          />
        </>
    )
}

export default Home