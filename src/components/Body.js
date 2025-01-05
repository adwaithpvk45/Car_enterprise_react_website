import Products from "./Products"
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

    const searchData = (event)=>{
      const search = event.target.value
      const searchedData= newData.cars.filter((car)=>{
        return (car.model.replace(/\s+/g,"").toLowerCase().includes(search.replace(/\s+/g,"").toLowerCase())||car.fuel.replace(/\s+/g,"").toLowerCase().includes(search.replace(/\s+/g,"").toLowerCase()))
      })
      setData(searchedData)
    }
    return(

        <div className="body">
            <div className="head">
                <select  onChange={handleChange}>
                    <option className="first" value="all"> All</option>
                    <option value="10000000">Premium</option>
                    </select>
            <input placeholder="Search for 'Model', 'Fuel' " id='input' onChange={searchData}></input>
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