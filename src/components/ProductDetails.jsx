import React, { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { useParams } from "react-router-dom"
import {increment} from '../store/counterSlice'
function ProductDeatils(){
    const {id} =useParams()
    // console.log(id)
    const [data,setData]=useState(null)

    const url1=`https://dummyjson.com/products/${id}`
    const fetchData = async (url)=>{
        try {
        const response = await fetch(url)
        const fetchedData = await response.json()
        setData(fetchedData)    
        // console.log(fetchedData) 
    }catch{

    }
}
const dispatch=useDispatch()
 // the value may be shown as null and may need to use ternery operator
    useEffect( () => {
      fetchData(url1)
      },[id])
            // console.log(data)


    return (
        <div className="productDetails">
            { data? (<>
            <div>
            <div style={{display:'flex'}} className="pdDetails">
          <div className="pdImg">
           <img src={data.images[0]} alt={data.title}></img>
          </div>
          <div className="pdData">
            < p style={{color:'grey'}}> PD-ID : {`00${data.id}`}</p>
            <h2 >{data.title.toUpperCase()}</h2>
            <h4>{data.category}</h4>
            <p style={{maxWidth:'500px', fontSize:'20px'}}>{data.description}</p>
            <p> < span style={{color:'red',fontSize:'15px'}}>{data.rating}</span> {`(${data.reviews.length} reviews) `}</p>
            <h4 style={{color:'red',fontSize:'30px',fontWeight:'700'}}>{`$ ${data.price}`}</h4>
             <p style={{color:'grey',fontSize:'15px'}}>{data.returnPolicy}</p>
             <div className="pdButtons">
               <button className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-green-700"> Buy Now</button>
               <button onClick={()=>{dispatch(increment(data))}}> Cart</button>
             </div>
             </div>
             </div>
             <div>
                <div className="reviews" >
                    {
                        data.reviews.map(()=>{
                            <>
                            <div className="cardBody">
                              <h4>{`${data.reviews.rating}/5`}</h4>
                              <h3>{`${data.reviews.reviewerName}`}</h3>
                              <h2></h2>
                            </div>
                            </>
                        })
                    }
                </div>
             </div>
             </div>
          </>
            ):(<p className="Load">Loading</p>)

}
        </div>
    )
}

export default ProductDeatils