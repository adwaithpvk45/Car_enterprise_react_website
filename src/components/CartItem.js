// import { useSelector } from "react-redux"
import { useDispatch, useSelector } from "react-redux"
import { increment,decrement,deleteItem} from "../store/counterSlice"


function CartItem(props){


    const dispatch = useDispatch()
    const quantity = useSelector((state)=>state.counter.quantity)

    console.log(quantity)
    return(
        <>
        <div className="cartCard">
            {/* <div className="cartHead">
                  <p>{`Prodcut ID : ${props.data.id}`}</p>  
            </div> */}
            <div className="cartDetails">
              <div className="detailsImg" style={{width:'20%'}}>
                       <img src={props.data.thumbnail} alt={`productImg`} style={{width:'100%'}}></img>
              </div>
              <div className="detailsData">
              <div className="detailsDataLeft"> 
                <p>{props.data.brand}</p>
                <p>{props.data.category}</p>
                <p>{props.data.title}</p>
              </div>
              <div className="detailsDataRight">
                <p>{(props.data.price*quantity[props.data.id]).toFixed(2)}</p>
                <div className="quantity">
                    <button onClick={()=>{dispatch(decrement(props.data))}}>-</button>
                    <div>{props.quantity[props.data.id]}</div>
                    <button onClick={()=>dispatch(increment(props.data))}>+</button>
                </div>
                <div className="actions">
                    <button>Save for later</button>
                    <button>Edit</button>
                    <button onClick={()=>dispatch(deleteItem(props.data))}>Delete</button>
                </div>
              </div>
              </div>
            </div>
            <div className="cardFooter">

            </div>
        </div>
        </>
    )
}

export default CartItem