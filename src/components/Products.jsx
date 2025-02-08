import {Link} from "react-router-dom";

// function Products({data,image,model,fuel,price}){
 function Products(props){
    //if data={car} is send from parent use props itself and call props.data.id,props.data.model,props.data.fuel.
   return(
    // <Link to={`/pd/${id}`}><div className="card">
    //     <div className="card-img">
    //        <img src={image} alt={model}></img>
    //     </div>
    //     <div className="details">
    //         <p className="model">{model}</p>
    //         <p className="fuel">{fuel}</p>
    //         <h3>Starting at Rs {price}</h3>
    //         <div className="view"><button>View</button></div>
    //     </div>
    // </div>
    // </Link>
    <Link className="link" to={`/pd/${props.data.id}`}>
        <div className="card">
        <div className="card-img">
           <img src={props.data.thumbnail} alt={props.data.title}></img>
        </div>
        <div className="details">
            <p className="model">{props.data.title}</p>
            <p className="fuel">{props.data.brand}</p>
            <h3>Starting at Rs {props.data.price}</h3>
            <div className="view"><button>View</button></div>
        </div>
    </div>
    </Link>
   )
}
export default Products