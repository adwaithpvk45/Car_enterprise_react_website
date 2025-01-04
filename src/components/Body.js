import Products from "./Products"
// import card1 from '../images/card1.png'
// import card2 from '../images/card2.png'
// import card3 from '../images/card3.png'
// import card4 from '../images/cardm4.png'
// import card5 from '../images/card5.png'
// import card6 from '../images/card6.png'
import { useState } from "react"

const response = await fetch('./data.json')
  console.log(response)
  const newData= await response.json()
  console.log(newData)

function Body(){
   
     const [data,setData]=useState(newData.cars)

    function filter(){
     const filtered=newData.cars.filter((car)=>{
       return Number(car.price.replace(/,/g,''))>10000000
     })
     console.log(filtered)
     setData(filtered)
    }


    function allCars(){
        setData(newData.cars)
        console.log(setData(newData.cars))
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