import banner1 from '../images/banner1.jpeg'
import banner2 from '../images/banner2.jpg'
import banner3 from '../images/banner3.webp'
import banner6 from '../images/banner6.jpeg'
import banner5 from '../images/banner5.jpeg'


function Header(){
    return(
        <div className='header'>
         <img src={banner1} alt="banner1"></img>
         <img src={banner2} alt="banner2"></img>
         <img src={banner3} alt="banner3"></img>
         <img src={banner6} alt="banner4"></img>
         <img src={banner5} alt="banner5"></img>
        </div>
    )
}

export default Header