import banner1 from '../images/banner1.jpeg'
import banner2 from '../images/banner2.jpg'
import banner3 from '../images/banner3.webp'
import banner6 from '../images/banner6.jpeg'
import banner5 from '../images/banner5.jpeg'
import { motion } from 'framer-motion';


function Header(){
    return(
        <div className='header'>
            <motion.div
        initial={{ opacity: 0 ,y:-100}}
        animate={{ opacity: 1,y:0 }}
        transition={{ duration: 2 }}
        
        >
                 <img src={banner1} alt="banner1" style={{objectFit:"cover",height:"100%",width:"100%"}}></img>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 ,y:100}}
        animate={{ opacity: 1,y:0 }}
        transition={{ duration: 2 }}
        >
                 <img src={banner2} alt="banner1" style={{objectFit:"cover",height:"100%",width:"100%"}}></img>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 ,y:-100}}
        animate={{ opacity: 1,y:0 }}
        transition={{ duration: 2 }}
        >
                 <img src={banner3} alt="banner1" style={{objectFit:"cover",height:"100%",width:"100%"}}></img>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 ,y:100}}
        animate={{ opacity: 1,y:0 }}
        transition={{ duration: 2 }}
        >
                 <img src={banner6} alt="banner1" style={{objectFit:"cover",height:"100%",width:"100%"}}></img>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 ,y:-100}}
        animate={{ opacity: 1,y:0 }}
        transition={{ duration: 2 }}
        >
                 <img src={banner5} alt="banner1" style={{objectFit:"cover",height:"100%",width:"100%"}}></img>
      </motion.div>
         {/* <img src={banner2} alt="banner2"></img>
         <img src={banner3} alt="banner3"></img>
         <img src={banner6} alt="banner4"></img>
         <img src={banner5} alt="banner5"></img> */}
        </div>
    )
}

export default Header