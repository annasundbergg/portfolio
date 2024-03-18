import "../styles/projects.css";

export default function Projects() {
    return (
        <>
            <div className="header">
                <h1 className="font-mono text-2xl font-bold">My projects</h1>
            </div>

            <div className="projects">
                <div className="project-container">
                    <div className="title">
                        <h1 className="font-mono text-2xl font-bold">
                            Movierater
                        </h1>
                        <p className="font-mono text-sm m-5">
                            Click on image to visit app
                        </p>
                    </div>

                    <div>
                        <div className="image-container">
                            <a
                                href="https://front-end-v2xut6a4jq-lz.a.run.app/"
                                target="_blank"
                            >
                                <img
                                    src="/images/movierater.png"
                                    alt=""
                                    className="project-img"
                                ></img>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="project-container">
                    <div className="title">
                        <h1 className="font-mono text-2xl font-bold">
                            RESTful Flickr
                        </h1>
                        <p className="font-mono text-sm m-5">
                            Click on image to visit app
                        </p>
                    </div>
                    <div className="image-container">
                        <a
                            href="https://annasundbergg.github.io/FE22-js1-slutprojekt-anna-sundberg/"
                            target="_blank"
                        >
                            <img
                                src="/images/flickr.png"
                                alt=""
                                className="project-img"
                            ></img>
                        </a>
                    </div>
                </div>

                <div className="project-container">
                    <div className="title">
                        <h1 className="font-mono text-2xl font-bold">
                            Rock Paper Scissors
                        </h1>
                        <p className="font-mono text-sm m-5">
                            Click on image to visit app
                        </p>
                    </div>
                    <div className="image-container">
                        <a
                            href="https://annasundbergg.github.io/annasundbergg-FE22-js1-mp2-anna-sundberg/"
                            target="_blank"
                        >
                            <img
                                src="/images/rockpaperscissors.png"
                                alt=""
                                className="project-img"
                            ></img>
                        </a>
                    </div>
                </div>
                <div className="project-container">
                    <div className="title">
                        <h1 className="font-mono text-2xl font-bold">
                            Next App
                        </h1>
                        <p className="font-mono text-sm m-5">
                            Click on image to visit app
                        </p>
                    </div>
                    <div className="image-container">
                        <a
                            href="https://next-app-ra67t2gtja-ew.a.run.app/"
                            target="_blank"
                        >
                            <img
                                src="/images/next-app.png"
                                alt=""
                                className="project-img"
                            ></img>
                        </a>
                    </div>
                </div>
                <div className="project-container">
                    <div className="title">
                        <h1 className="font-mono text-2xl font-bold">
                            Tamagotchi
                        </h1>
                        <p className="font-mono text-sm m-5">
                            Click on image to visit app
                        </p>
                    </div>
                    <div className="image-container">
                        <a
                            href="https://annasundbergg.github.io/FE22-js2-mp2-anna-sundberg/"
                            target="_blank"
                        >
                            <img
                                src="/images/tamagotchi.png"
                                alt=""
                                className="project-img"
                            ></img>
                        </a>
                    </div>
                </div>
                <div className="project-container">
                    <div className="title">
                        <h1 className="font-mono text-2xl font-bold">
                            Weather App
                        </h1>
                        <p className="font-mono text-sm m-5">
                            Click on image to visit app
                        </p>
                    </div>
                    <div className="image-container">
                        <a
                            href="https://signelindstrom.github.io/vsc-mp1-grupp3/"
                            target="_blank"
                        >
                            <img
                                src="/images/weather-app.png"
                                alt=""
                                className="project-img"
                            ></img>
                        </a>
                    </div>
                </div>
                <div className="project-container">
                    <div className="title">
                        <h1 className="font-mono text-2xl font-bold">
                            Countries
                        </h1>
                        <p className="font-mono text-sm m-5">
                            Click on image to visit app
                        </p>
                    </div>
                    <div className="image-container">
                        <a
                            href="https://annasundbergg.github.io/fe22-js1-mp3-anna-sundberg/"
                            target="_blank"
                        >
                            <img
                                src="/images/rest-countries.png"
                                alt=""
                                className="project-img"
                            ></img>
                        </a>
                    </div>
                </div>
                <div className="project-container">
                    <div className="title">
                        <h1 className="font-mono text-2xl font-bold">
                            Web Shop
                        </h1>
                        <p className="font-mono text-sm m-5">
                            Click on image to visit app
                        </p>
                    </div>
                    <div className="image-container">
                        <a
                            href="https://github.com/annasundbergg/fe22-js2-mp3-signe-lindstrom2.0"
                            target="_blank"
                        >
                            <img
                                src="/images/fruit-shop.png"
                                alt=""
                                className="project-img"
                            ></img>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
