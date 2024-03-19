import "../styles/hire-me.css";
import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./NavBar";

export default function HireMe() {
    return (
        <>
            <Header></Header>
            <Navbar></Navbar>
            <div className="hire-me"></div>
            <Footer></Footer>
        </>
    );
}
