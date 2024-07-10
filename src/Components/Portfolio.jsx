import '../Styling/Portfolio.css'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import web110img from '../assets/web110.png'
import web125img from '../assets/web125.png'
import web210img from '../assets/web210.png'
import web125img2 from '../assets/budgetcalc.png'


function Portfolio() {
    const projArr = 
[
    {
        "class": "WEB110",
        "name": "Downtown Art",
        "link": "https://wcet.waketech.edu/mbwashington1/WEB110/FinalProject/html/index.html",
        "thumbnail": web110img,
        "thumbnailKey": "DowntownArt"
    },
    {
        "class": "WEB125",
        "name": "Pleasure Island",
        "link": "https://wcet.waketech.edu/mbwashington1/WEB125/PleasureIsland/IslandSite/html/home.html",
        "thumbnail": web125img,
        "thumbnailKey": "PleasureIslandImage"

    },
    {
        "class": "WEB210",
        "name": "WEB210 Portfolio",
        "link": "https://wcet.waketech.edu/mbwashington1/WEB210/FinalProject/html/index.html",
        "thumbnail": web210img,
        "thumbnailKey": "Web210Image"

    },
    {
        "class": "WEB125",
        "name": "Budget Calculator",
        "link": "https://wcet.waketech.edu/mbwashington1/WEB125/FinalProject/html/budgetCalc.html",
        "thumbnail": web125img2,
        "thumbnailKey": "BudgetCalcImage"

    }
]



const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

return (
    <section id="portfolioPage" className="portfolioWrapper">
        <div className="portfolioHeader mt-20 text-center text-7xl">
            Portfolio Work
        </div>
        <div className = "mt-20">
        <Slider {...settings}>
            {projArr.map((item) => (
   <a href= {item.link} target='_blank' rel="noopener noreferrer">
    <div key = {item.name} className = "projectWrap">
                <div className = 'projectName' key={'project' + item.name}>{item.name}</div>
        <div key= {item.thumbnailKey}  className='imgWrap'>
            <img src={item.thumbnail} alt="" className="projectImage" />
        </div>                               

    </div>  
   </a> 
))}
        </Slider>
        </div>
 



</section> 
  );


}
/* document.onload = function what(){
    var projectDiv = document.getElementById("portfolioPage")
    for (let i = 0; i < projArr.length; i++)  {
             projectDiv.innerHTML = projArr[i].name + " "
        }
}
 */



    


export default Portfolio;