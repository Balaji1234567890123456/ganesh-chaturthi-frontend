import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { Welcomepopup } from "../welcome-popup/welcome-popup"
import "./home-page.css"
import { Donationpage } from "../donation-page/donation-page"
import { FestivalSchedule } from "../schedules/schedules"
const images=[
    "https://res.cloudinary.com/ddjsaoac6/image/upload/v1755149218/ganesh-1_ndfxdn.jpg",
    "https://res.cloudinary.com/ddjsaoac6/image/upload/v1755149266/ganesh-2_ss1skv.jpg",
    "https://res.cloudinary.com/ddjsaoac6/image/upload/v1755149403/ganesh-3_taui6x.jpg"
]
const settings=
{
    dots:true,
    autoplay:true,
    autoplaySpeed:3000,
    slidesPerView:1,
    slidesPerScroll:1,
    responsive:[
        
        {
            breakoint:478,
            settings:{
                slidesPerScroll:1,
                slidesPerView:1
            }

        }
    ]
}
export const Homepage=({isCustom,setIsCustom,isPopup,setIsPopup})=>{
    return (
        <div className="home-page-container">
            <div className="home-page-container-1">
        <div className="slider-container">
        <Slider {...settings}>
            {
                images.map(each=><img src={each} className="images"/>)
            }
        </Slider>
        
        </div>
        <FestivalSchedule/>
        <Donationpage setIsCustom={setIsCustom} isCustom={isCustom}/>
        {isPopup&&(<Welcomepopup setIsPopup={setIsPopup}/>)}


        </div>

        </div>

    )
    


}