
function Products({image,model,fuel,price}){
    // console.log(props)
    //if data={car} is send from parent use props itself and call props.data.id,props.data.model,props.data.fuel.
   return(
    <div className="card">
        <div className="card-img">
           <img src={image} alt={model}></img>
        </div>
        <div className="details">
            <p className="model">{model}</p>
            <p className="fuel">{fuel}</p>
            <h3>Starting at Rs {price}</h3>
            <div className="view"><button>View</button></div>
        </div>
    </div>
   )
}
export default Products