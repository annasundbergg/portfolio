import "../styles/about-me.css";
import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./NavBar";

export default function AboutMe() {
    return (
        <>
            <Header></Header>
            <Navbar></Navbar>
            <div className="about-me"></div>
            <Footer></Footer>
        </>
    );
}
