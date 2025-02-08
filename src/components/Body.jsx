import Products from "./Products"
import { useState, useEffect } from "react"
import Category from "./Category"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
// import 'swiper/swiper.min.css';
import { Navigation,Pagination,Autoplay } from "swiper/modules";


function Body(){

  const dataFetch = async (url)=>{

    const response = await fetch(url);

   const newData= await response.json();

   return newData 
   }
   const [data,setData]=useState([])
   const [filteredData,setFilteredData]=useState([])
   const [cate,setCateSearch]=useState([])
   const [recieveData,setRecieveData]=useState(null)
    
   const url1='https://dummyjson.com/products?limit=10'
  const url2="https://dummyjson.com/products/categories"
const url3= "./data.json"
const url4=`https://dummyjson.com/products/category/${recieveData}`


      useEffect(()=>{
        const fetchAllData = async ()=>{

      const allData= await dataFetch(url1)

      const cateDummy= await dataFetch(url2)

      const imgData = await dataFetch(url3)
      
      // console.log(cateList)
      
      const imgData1= imgData.images

      const cateData= cateDummy.map((item,index)=>{
        return [item,imgData1[index]]
            })
      setData(allData.products)

      setFilteredData(allData.products)

      setCateSearch(cateData)

        };
        fetchAllData()
     },[])


     useEffect(()=>{
      const cateFetch= async() => {
        if(recieveData){

      var  cateList = await dataFetch(url4)
      // console.log(cateList.products)
      setFilteredData(cateList.products)
        }
}   
cateFetch()
},[recieveData])


    function filter(){
     const filtered=filteredData.filter((car)=>{
      //  return Number(car.price.replace(/,/g,''))>10
      return car.price>10
     })
     setFilteredData(filtered)
    }


    function allCars(){
        setFilteredData(data)
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
      const searchedData= data.filter((car)=>{
         return(car.title.replace(/\s+/g,"").toLowerCase().includes(searchValue.replace(/\s+/g,"").toLowerCase())||car.category.replace(/\s+/g,"").toLowerCase().includes(searchValue.replace(/\s+/g,"").toLowerCase()))
       
    })
    setFilteredData(searchedData)
  }
  const handleDataSend = (name) =>{
    // console.log("Received name from child:", name);
    setRecieveData(name)
  }

    return(
        <div className="body">
          <div className="catHead">
          <Swiper className="swipper"
           modules={[Navigation, Pagination, Autoplay]}
           navigation
           pagination={{ clickable: true }}
           autoplay={{ delay: 3000, disableOnInteraction: false }}
      breakpoints={{
        640: { slidesPerView: 2, spaceBetween: 10 },
        768: { slidesPerView: 3, spaceBetween: 15 },
        1024: { slidesPerView: 5, spaceBetween: 20 },
      }}
    >
            {cate.map((car,index)=>(      
              <SwiperSlide key={index}>   
                {/* {console.log(car)} */}
            <Category            
            model={car[0].name}
            image={car[1].image}
            sendData={handleDataSend}
            slug={car[0].slug}
            />
           </SwiperSlide> 
            )  
          )}
         </Swiper>
          </div>
            <div className="head">
                <select  onChange={handleChange}>
                    <option className="first" value="all"> All</option>
                    <option value="10000000">Premium</option>
                    </select>
            <input placeholder="Search for 'Model', 'Fuel' " id='input' onChange={searchData}></input>
            </div>         
        <div className="cars" id="cars">
        {(filteredData).map((car) => {
        return <Products
          // key={car.id}
          // model={car.title}
          // fuel={car.category}
          // price={car.price}
          // image={car.image}
          data={car}
        />
})}
        </div>    
        </div>   
    )
}

export default Body