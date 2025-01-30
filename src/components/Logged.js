import { useNavigate } from "react-router-dom"

function Logged(){

    const navigate=useNavigate()
    
    return (
        
        <div>
            <button onClick={()=>{navigate('/')}} style={{height:'200px',border:'1px solid red'}}>LogOut</button>
        </div>
        
    )
}

export default Logged