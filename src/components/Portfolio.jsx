import Project from "./Project";
import Deliascarblog from "./images/Delias-carblog.png";
import sqlemployeetracker from "./images/sql-employee-tracker.png";
import WeatherDashboard from "./images/WeatherDashboard.png";
import WorkDayPlanner from "./images/WorkDayPlanner.png";
import NoteTaker from "./images/NoteTaker.png";
import MealFlick from "./images/MealFlick.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/Portfolio.css';

// Define Portfolio component
function Portfolio() {
    return (
        // Portfolio container
        <div className='portfolio-wrapper'>
            <h1 className='portfolio-title'>Portfolio</h1>
            <div className='container'>
                <div className='row'>
                    {[
                        {
                            title: 'MVC Technology Blog',
                            imgSrc: Deliascarblog,
                            deployedLink: ' https://mysterious-dawn-30420-cae1160e815b.herokuapp.com/',
                            githubLink: 'https://github.com/deliaswe/MVC-Technology-Blog',
                        },
                        {
                            title: 'SQL Employee Tracker',
                            imgSrc: sqlemployeetracker,
                            deployedLink: '',
                            githubLink: 'https://github.com/deliaswe/sql-employee-tracker/blob/main/README.md',
                        },
                        {
                            title: 'Weather Dashboard',
                            imgSrc: WeatherDashboard,
                            deployedLink: 'https://deliaswe.github.io/Weather-Dashboard/',
                            githubLink: 'https://github.com/deliaswe/weather-dashboard',
                        },
                        {
                            title: 'Work Day Planner',
                            imgSrc: WorkDayPlanner,
                            deployedLink: 'https://deliaswe.github.io/Work-Day-Planner/',
                            githubLink: 'https://github.com/deliaswe/work-day-planner',
                        },
                        {
                            title: 'Note Taker',
                            imgSrc: NoteTaker,
                            deployedLink: 'https://delia-note-taker-425424db1210.herokuapp.com/',
                            githubLink: 'https://github.com/deliaswe/note-taker',
                        },
                        {
                            title: 'MealFlick',
                            imgSrc: MealFlick,
                            deployedLink: ' https://vlada-caban.github.io/meal-flick/',
                            githubLink: 'https://github.com/deliaswe/meal-flick',
                        },
                    ].map((project, index) => (
                        // div container for each project
                        <div className='col-12 col-md-6 col-lg-4 my-2' key={index}>
                            <Project
                                title={project.title}
                                imgSrc={project.imgSrc}
                                deployedLink={project.deployedLink}
                                githubLink={project.githubLink}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

// export Portfolio component
export default Portfolio;
