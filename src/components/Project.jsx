import '../style/Project.css';

// define Project component
function Project(props) {
    return (
        // card container for each project
        <div className='card'>
            <h5 className='card-title'>{props.title}</h5>
            <a href={props.deployed} target='_blank' rel='noreferrer'>
                <img src={props.imgSrc} className='card-img-top' alt={props.imgAlt} />
            </a>
            <div className='card-body'>
                <p className='card-text'>{props.description}</p>
                <a
                    href={props.deployedLink}
                    target='_blank'
                    rel='noreferrer'
                    className='btn btn-deployed'
                >
                    Deployed App
                </a>
                <a
                    href={props.githubLink}
                    target='_blank'
                    rel='noreferrer'
                    className='btn btn-repo'
                >
                    GitHub Repo
                </a>
            </div>
        </div>
    );
}

// export Project component
export default Project;