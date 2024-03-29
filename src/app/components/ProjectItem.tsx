type PorjectProps = {
    name: string;
    description: string;
    link: string;
    image: string;
    alt: string;
    skills?: string;
    skill2?: string;
};

export default function ProjectItem(props: PorjectProps) {
    return (
        <>
            <div className="project-container">
                <div className="title">
                    <h1 className="font-mono project-name">{props.name}</h1>
                    <p className="font-mono project-description">
                        {props.description}
                    </p>
                    <div className="skills">
                        <img
                            className="project-skills"
                            src={props.skills}
                            alt=""
                        />
                        <img
                            className="project-skill2"
                            src={props.skill2}
                            alt=""
                        />
                    </div>
                </div>

                <div>
                    <div className="image-container">
                        <a href={props.link} target="_blank">
                            <img
                                src={props.image}
                                alt={props.alt}
                                className="project-img"
                            ></img>
                        </a>
                        <div className="text-gallery">
                            <a href={props.link}>
                                <p>Visit</p>
                                {props.name}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
