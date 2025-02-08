import logo from '../images/logo.png';
import { Link } from 'react-router-dom';
import cart from '../images/car (1).png';

function Navbar(){
    
    return (
        <div className="navbar flex justify-between p-8 items-center bg-[#161515] font-custom">
           <div className="logo-div w-[50px] h-[50px]">
            <img  className="max-w-full overflow-hidden" src={logo} alt="logo"></img>
           </div>
           <div className='list'>
            <ul className='flex list-none '>
                <Link className='nlink' to={`/`}><li className=" cursor-pointer text-[20px] pb-[5px] border-b-0 scale-100 transition-all duration-700 ease-in text-white">Home</li></Link>
                <Link className='nlink'><li className=" cursor-pointer text-[20px] pb-[5px] border-b-0 scale-100 transition-all duration-700 ease-in text-white">About</li></Link>
                <Link className='nlink'><li className=" cursor-pointer text-[20px] pb-[5px] border-b-0 scale-100 transition-all duration-700 ease-in text-white">Product</li></Link>
                <Link className='nlink'><li className=" cursor-pointer text-[20px] pb-[5px] border-b-0 scale-100 transition-all duration-700 ease-in text-white">Careers</li></Link>
            </ul>
           </div>
           <div className='flex  gap-[10px] items-center'>
            <Link to={'/cart'}><img src={cart} alt='cart'  className='cart w-[90px] flex transition-all duration-1000 ease py-[2px] px-[30px] border-0 cursor-pointer'></img></Link>
            <Link className="no-underline text-white" to={'/login'}><p>Login</p></Link>
           </div>
        </div>
    )
}

export default Navbar