import Products from "./Products"
import { useState, useEffect } from "react"
import Category from "./Category"

const url1= "./data.json"
// const url2="https://dummyjson.com/products/categories"

function Body(){

  const searchFunction = async (url)=>{
    const response = await fetch(url)
    console.log(response)
   const newData= await response.json()
    setData(newData.cars)
    setFilteredData(newData.cars)
   console.log(newData)
   }
    
      useEffect(()=>{
      searchFunction(url1)
      // searchFunction(url2)
     },[])

  const [data,setData]=useState([])
  const [filteredData,setFilteredData]=useState([])
  const [search,setSearch]=useState("")
  // const [cate,cateSearch]=useState([])

    function filter(){
     const filtered=filteredData.filter((car)=>{
       return Number(car.price.replace(/,/g,''))>10000000
     })
     console.log(filtered)
     setFilteredData(filtered)
    }


    function allCars(){
        setFilteredData(data)
        console.log(data)
    }


    const handleChange = (event) =>{
          const value = event.target.value
          if(value ==="all"){
            allCars()
          }
          else if(value ==="10000000"){
            filter()
          }
    }

    const searchData = (event)=>{
      const searchValue=event.target.value
      setSearch(searchValue)
      const searchedData= data.filter((car)=>{
         return(car.model.replace(/\s+/g,"").toLowerCase().includes(search.replace(/\s+/g,"").toLowerCase())||car.fuel.replace(/\s+/g,"").toLowerCase().includes(search.replace(/\s+/g,"").toLowerCase()))
       
    })
    setFilteredData(searchedData)
  }


    return(

        <div className="body">
          <div className="catHead">
           <Category />
          </div>
            <div className="head">
                <select  onChange={handleChange}>
                    <option className="first" value="all" selected> All</option>
                    <option value="10000000">Premium</option>
                    </select>
            <input placeholder="Search for 'Model', 'Fuel' " id='input' onChange={searchData}></input>
            </div>         
        <div className="cars" id="cars">
        {(filteredData).map((car) => (
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