import logo from '../images/logo.png';
import { Link } from 'react-router-dom';
import cart from '../images/car (1).png';

function Navbar(){
    return (
        <div className="navbar">
           <div className="logo-div">
            <img src={logo} alt="logo"></img>
           </div>
           <div className='list'>
            <ul>
                <Link className='nlink' to={`/`}><li>Home</li></Link>
                <Link className='nlink'><li>About</li></Link>
                <Link className='nlink'><li>Product</li></Link>
                <Link className='nlink'><li>Careers</li></Link>
            </ul>
           </div>
           <div style={{display:'flex',gap:'10px',alignItems:'center'}}>
            <Link to={'/cart'}><img src={cart} alt='cart' style={{width:'90px'}} className='cart'></img></Link>
            <Link style={{textDecoration:'none',color:'white'}} to={'/login'}><p>Login</p></Link>
           </div>
        </div>
    )
}

export default Navbar