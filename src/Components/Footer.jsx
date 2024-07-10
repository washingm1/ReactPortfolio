import '../Styling/Footer.css';
import htmlIcon from '../assets/html-icon.png';
import wordpressIcon from '../assets/wordpress.png';
import cameraIcon from '../assets/camera.png'
import excelIcon from '../assets/excelIcon.png'

export default function Footer() {
    const skillArray = 
[
    {
        name: "HTML/CSS/JS",
        icon: htmlIcon,
        description: "Experience with web development using HTML, CSS, and Javascript. Experience using the MERN stack.",
        key: 'html'
    },
    {
        name: "Wordpress & Shopify",
        icon: wordpressIcon,
        description: "Experience with setting up Wordpress sites, as well as Shopify sites for E-commerce",
        key: 'wordpressShopify'
    },
    {
        name: "Photo/Videography",
        icon: cameraIcon,
        description: "Experience with hired photography, and live video for Zoom weddings.",
        key: 'PhotoVideo'
    },
    {
        name: "Data Entry",
        icon: excelIcon,
        description: "Experience with Microsoft Excel & various formats of database/backend data entry.",
        key: 'dataEntry'
    },
]

    return (
        
    <section id='skillsPage'>
        <div className="skillsHeader">Skills & Experience</div>
        <div className = "skillGrid mt-20 grid xl:grid-cols-2 grid-cols-1 gap-4 sm:grid-cols-1">
    {skillArray.map((item) => (
        // Wrap
        <div key = {item.name} className = "skillWrapper border-2 mb-6">
            {/* Skill Title */}
        <div className = 'skillName' key={item.name}>{item.name}</div>
        {/* Logos */}
             <div className='logos'>
             <img src={item.icon} alt="" className="projectImage" key= {item.key} /> 
            </div> 
            {/* Description of Skills */}
            <div className="skillDesc" key={item.description}>{item.description}</div>                                       
    </div>  

))}
        </div>

    <div className="contact mt-3"></div>
        <div className="contactHeader border-t-2 text-center text-4xl text-black-900 ">Get In Touch</div>
        <div className="links text-center p-2">
            <a href="/">E-mail: mbwashington1@mywaketech.edu</a>
            <br />
            <br />
            <a href="/">Phone: 555-356-7943</a>
            <br />
            <br />
            <a href="https://github.com/washingm1" target='_blank' rel="noopener noreferrer">Github</a>
            <br />
            <br />
            <a href="https://www.linkedin.com/in/matthew-w-637591182/" target='_blank' rel="noopener noreferrer">LinkedIn</a>
        </div>
        </section>
    )
}

