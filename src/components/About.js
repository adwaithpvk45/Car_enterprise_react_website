import about1 from '../images/about3.jpg'
function About(){
    return (
     <div className="about">
         <div className='aboutImg'>
            <img src={about1} alt='aboutimg'></img>
        </div>
        <div className='aboutHead'>
        <div>
        <div className='aboutButton'>
         <h2>BMW</h2>
         {/* <p>Built for those who dare to</p>
         <h4>Dream .Explore .Lead .</h4> */}
        </div>
        <p>Built for those who dare to</p>
        <h4>Dream. Explore. Lead.</h4>
        </div>
            <button>Learn More</button>
        </div>
     </div>
     
    )
}

export default About