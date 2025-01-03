import logo from '../images/logo.png';

function Navbar(){
    return (
        <div className="navbar">
           <div className="logo-div">
            <img src={logo} alt="logo"></img>
           </div>
           <div className='list'>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Products</li>
                <li>Carrers</li>
            </ul>
           </div>
           <div>
            <button>Sign In</button>
           </div>
        </div>
    )
}

export default Navbar