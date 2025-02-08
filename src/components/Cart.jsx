import { useSelector } from "react-redux"
// import { useDispatch } from "react-redux"
import CartItem from "./CartItem"

export function Cart(){

    const count = useSelector((state)=>state.counter.count)
    const items = useSelector((state)=>state.counter.items)
    const quantity = useSelector((state)=>state.counter.quantity)
//    console.log(quantity)
    return (
        <PageTransition>
        <div className="cart">
            <div className="items">
                <div className="itemsHead" style={{marginBottom:'20px'}}>
                    <p style={{fontSize:'40px'}}>
                        Your Cart
                    </p>
                    <p style={{fontSize:'16px'}}>
                       {`( ${count} items )`}
                    </p>
                </div>
                <hr style={{width:'98%'}}/>
                <div className="itemsCart">
                    {items.map((car,index)=>(
                          <CartItem
                          key={index}
                          data={car}
                          count={count}
                          quantity={quantity}/>
                    ))}
                   
                </div>
            </div>
            <div className="checkOut">

            </div>
        </div>
        </PageTransition>
    )
}