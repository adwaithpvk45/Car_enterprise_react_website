function Category (props){
       // console.log(props)
const handleclick = () => {
       console.log(props.sendData)
       console.log(props.model)
       console.log(props.sendData(props.slug))
}

       return ( <>
        {/* {console.log(props)} */}
        <div className="cateBox" onClick={handleclick}>
        <div className="cateImage">
        <img src={props.image} ></img>
        </div>
        <p className="cateName">{props.model}</p>
        </div>
        </>
       )
}

export default Category