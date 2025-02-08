
import Service1 from '../images/Service1.jpg'
import Service2 from '../images/Service2.avif'
import Service3 from '../images/Service3.jpg'
import React,{ Component } from 'react';


class Service extends Component{
render() {
    
   return (
   <div className="Service">
        <div className="ServiceHead">
            <h1 className="text-3xl font-bold text-black-500">
                First-class services to keep you going
            </h1>
        </div>
        <div className="ServiceComponents">
           <div className="ServiceCard" style={{backgroundImage:`url(${Service1})`}}>
             <div className="text-2xl font-bold text-white">BMW easy care<span></span></div>
           </div>
           <div className="ServiceCard" style={{backgroundImage:`url(${Service2})`}}>
           <div>BMW assist<span></span></div>
           </div>
           <div className="ServiceCard" style={{backgroundImage:`url(${Service3})`}}>
           <div>BMW warranty<span></span></div>
           </div>
        </div>
    </div>
    )

}
}

export default Service