import "../styles/projects.css";
import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./NavBar";
import ProjectItem from "./ProjectItem";

export default function ProjectList() {
    return (
        <>
            <Header></Header>
            <Navbar></Navbar>

            <div className="projects">
                <ProjectItem
                    name="Movierater"
                    description="A web application focusing on exploring the functionalities of Google Cloud Platform. The project consisted of developing and integrating frontend and API, perform CRUD operations using GCP Firestore, building a CI/CD pipeline and implementing authentication using Microsoft Entra ID."
                    link="https://front-end-v2xut6a4jq-lz.a.run.app/"
                    image="/images/movierater.png"
                    alt="image of project Movierater"
                    skills=""
                />

                <ProjectItem
                    name="Responsive Portfolio"
                    description="One of my first projects during my education where the task was to create a portfolio using example projects. Criterias: responsive design, more then one HTML-page, a photo gallery including a minimum of 4 projects, utilize Bootstrap."
                    link="https://annasundbergg.github.io/FE22-html-slutprojekt-anna-sundberg/"
                    image="/images/portfolio.png"
                    alt="Image of project Responsive Portfolio"
                    skills="/htmlcss.png"
                    skill2="/bootstrap.png"
                ></ProjectItem>

                <ProjectItem
                    name="Tamagotchi"
                    description=""
                    link="https://annasundbergg.github.io/FE22-js2-mp2-anna-sundberg/"
                    image="/images/tamagotchi.png"
                    alt="Image of project Tamagotchi"
                />
                <ProjectItem
                    name="RESTful Flickr"
                    description=""
                    link="https://annasundbergg.github.io/FE22-js1-slutprojekt-anna-sundberg/"
                    image="/images/flickr.png"
                    alt="Image of project RESTful Flickr"
                />

                <ProjectItem
                    name="Rock Paper Scissors"
                    description=""
                    link="https://annasundbergg.github.io/annasundbergg-FE22-js1-mp2-anna-sundberg/"
                    image="/images/rockpaperscissors.png"
                    alt="Image of project Rock Paper Scissors"
                />

                <ProjectItem
                    name="Next App"
                    description=""
                    link="https://next-app-ra67t2gtja-ew.a.run.app/"
                    image="/images/next-app.png"
                    alt="Image of project Next App"
                />

                <ProjectItem
                    name="Weather App"
                    description=""
                    link="https://signelindstrom.github.io/vsc-mp1-grupp3/"
                    image="/images/weather-app.png"
                    alt="Image of project Weather App"
                />
                <ProjectItem
                    name="Countries"
                    description=""
                    link="https://annasundbergg.github.io/fe22-js1-mp3-anna-sundberg/"
                    image="/images/rest-countries.png"
                    alt="Image of project Countries"
                />

                <ProjectItem
                    name="Web Shop"
                    description=""
                    link="https://github.com/annasundbergg/fe22-js2-mp3-signe-lindstrom2.0"
                    image="/images/fruit-shop.png"
                    alt="Image of project Web Shop"
                />
            </div>

            <Footer></Footer>
        </>
    );
}
