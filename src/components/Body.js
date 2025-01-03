import Products from "./Products"
import card1 from '../images/card1.png'
import card2 from '../images/card2.png'
import card3 from '../images/card3.png'
import card4 from '../images/cardm4.png'
import card5 from '../images/card5.png'
import card6 from '../images/card6.png'
import { useState } from "react"
// import {carDetails} from "./data"

// console.log(carDetails)

// const carDetails={
//     "cars":[
//         {
//             id:1,
//             model:"BMW X1",
//             image:card1,
//             fuel:"Electric",
//                 price:"1,13,00,000"
//         },{
//             id:2,
//             model:"BMW X2",
//             image:card2,
//             fuel:"Petrol",
//             price:"83,00,000"
//         },{
//             id:3,
//             model:"BMW X3",
//             image:card3,
//             fuel:"Diesel",
//             price:"93,00,000"
//         },{
//             id:4,
//             model:"BMW Xi",
//             image:card4,
//             fuel:"Electric",
//             price:"1,60,00,000"
//         },{
//             id:5,
//             model:"BMW X4",
//             image:card5,
//             fuel:"Electric",
//             price:"1,55,00,000"
//         },{
//             id:6,
//             model:"BMW X5",
//             image:card6,
//             fuel:"Electric",
//             price:"1,22,00,000"
//         },
//     ]
// }
    
const response = await fetch('./data.json')
console.log(response)
const newData= response.json
console.log(newData)

function Body(){
    

    // function allCars(){
    //     document.getElementById('cars').innerHTML=carDetails.cars.map((car) => {
    //         console.log(car)
    //       return   <Products
    //           key={car.id}
    //           model={car.model}
    //           fuel={car.fuel}
    //           price={car.price}
    //           image={car.image}
    //         />  
            // can send the data as a single data --- data={car}
    // })}
    
    
    // function filter(){
    //    const filtered= carDetails.cars.filter((car)=>{
    //         const price = Number(car.price.replace(/,/g, ''))
    //         console.log(price)
    //          return price>10000000
    //     })
    //     console.log(filtered)
    //     document.getElementById('cars').innerHTML=filtered.map((car)=>{
    //        return <Products key={car.id}
    //        model={car.model}
    //        fuel={car.fuel}
    //        price={car.price}
    //        image={car.image} />
    //     })
    
    // }
    // const [data,setData]=useState(carDetails.cars)
     const [data,setData]=useState(carDetails.cars)


    function filter(){
     const filtered=carDetails.cars.filter((car)=>{
       return Number(car.price.replace(/,/g,''))>10000000
     })
     console.log(filtered)
     setData(filtered)
    }


    function allCars(){
        setData(carDetails.cars)
        console.log(setData(carDetails.cars))
    }


    const handleChange = (event) =>{
          const value= event.target.value
          if(value==="all"){
            allCars()
          }
          else if(value==="10000000"){
            filter()
          }
    }


    return(

        <div className="body">
            <div className="head">
                {/* <button value="all" onClick={allCars} className="first">All</button> 
                <button value={10000000} onClick={filter} className="first">Premium</button>  */}
                <select  onChange={handleChange}>
                    <option className="first" value="all"> All</option>
                    <option value="10000000">Premium</option>
                    </select>
            <input placeholder="Model No.." id='input'></input>
            </div>         
        <div className="cars" id="cars">
        {data.map((car) => (
        <Products
          key={car.id}
          model={car.model}
          fuel={car.fuel}
          price={car.price}
          image={car.image}
        />
        ))}
        </div>    
        </div>   
    )
}

export default Body