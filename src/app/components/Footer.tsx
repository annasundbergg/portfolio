import "../styles/footer.css";

export default function Footer() {
    return (
        <>
            <footer>
                <a
                    className="footer-link"
                    href="https://www.linkedin.com/in/sundberganna"
                    target="_blank"
                >
                    <img
                        className="linkedin"
                        src="/images/linkedin.png"
                        alt="LinkedIn"
                    ></img>
                </a>

                <a
                    className="footer-link"
                    href="https://github.com/annasundbergg"
                    target="_blank"
                >
                    <img
                        className="github"
                        src="/github.png"
                        alt="Github"
                    ></img>
                </a>
            </footer>
        </>
    );
}
