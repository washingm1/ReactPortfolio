import '../Styling/Section.css'
import placeholder from '../aboutMeImage.png'

function Section() {

    return (
<section id="aboutPage" className="aboutWrapper">
    <div className="pageHeader">About Me</div>
<div className='aboutMe'>
            <div className="aboutImage">
                <img src={placeholder} alt="profile picture" />
            </div>
            <div className="textWrapper">
            <div className="aboutHeader">Front-End Developer</div>
                <div className="aboutBody">I'm Matthew Washington. 
                    I'm been living in North Carolina for the last 17 years, and am currently attending Wake Technical Community College working towards an Associates in Web Development.
                    I've had an interest in coding ever since Middle School when I joined the coding club. That's where I first started learning how to use things such as Linux and Ubuntu on a Raspberry Pi. 
                    Coding has always been something that has been more of a hobby, but my goal is to become proficient and well-versed in both front-end and back-end languages!                  
                  </div>   
        </div> 
            </div>

</section>
        
    );
}

export default Section;
