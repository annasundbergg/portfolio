import Link from "next/link";
import "../styles/navbar.css";

export default function Navbar() {
    return (
        <>
            <nav>
                {/* <div className="dropdown">
                    <button className="dropbtn">MY WORK</button>
                    <div className="dropdown-content">
                        <a className="dropdown-a" href="./html/website.html">
                            WEBSITE
                        </a>
                        <a className="dropdown-a" href="./html/calculator.html">
                            CALCULATOR
                        </a>
                        <a className="dropdown-a" href="./html/chatbot.html">
                            CHATBOT
                        </a>
                        <a className="dropdown-a" href="./html/game.html">
                            GAME
                        </a>
                    </div>
                </div> */}
                <Link href={"/projects"}>PROJECTS</Link>
                <Link href={"/cv"}>CV</Link>
                <Link href={"/aboutme"}>ABOUT ME</Link>
                <Link href={"/hireme"}>HIRE ME</Link>
                {/* <a href="./html/aboutme.html">ABOUT ME</a>
                <a href="./html/hireme.html">HIRE ME</a> */}
            </nav>
        </>
    );
}
