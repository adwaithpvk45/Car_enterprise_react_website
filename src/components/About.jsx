import about1 from '../images/about3.jpg'
function About(){
    return (
        
     <div className="about h-[650px] bg-contain bg-center bg-no-repeat flex justify-around overflow-hidden">
         <div className='aboutImg'>
            <img src={about1} alt='aboutimg'></img>
        </div>
        <div className='aboutHead flex flex-col justify-between items-end pr-[90px] pb-[140px] pt-[110px]'>
        <div>
        <div className='aboutButton pt-[10px] pb-[5px] '>
         <h2 className='text-[130px] font-normal tracking-[10px]' style={{ color: 'rgba(4, 126, 179, 0.993)' }}>BMW</h2>
         {/* <p>Built for those who dare to</p>
         <h4>Dream .Explore .Lead .</h4> */}
        </div>
        <p className='text-grey-500 text-[23px] pl-[10px]'>Built for those who dare to</p>
        <h4 className='pl-[10px] bg-[linear-gradient(90deg,_#8c8c8c,_#569cbd)] pt-[20px] text-[40px] bg-clip-text text-transparent'>Dream. Explore. Lead.</h4>
        </div>
            <button >Learn More</button>
        </div>
     </div>
     
    )
}

export default About