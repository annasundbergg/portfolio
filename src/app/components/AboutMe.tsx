import "../styles/about-me.css";
import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./NavBar";

export default function AboutMe() {
    return (
        <>
            <Header></Header>
            <Navbar></Navbar>
            <div className="about-me">
                <div className="about-me-content">
                    <p>
                        As a highly motivated front-end developer, I bring a
                        unique combination of skills acquired through my
                        experience in customer service, providing me with a
                        strong foundation in communication and understanding
                        user needs. Having valuable insights into user
                        expectations for digital solutions enables me to
                        effectively meet customer needs and create tailored
                        solutions. With a deep passion for enhancing user
                        experiences with new technologies, I am committed to
                        collaborating closely with teams to deliver innovative
                        solutions that exceed expectations.
                    </p>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
}
