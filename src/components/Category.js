function Category (props){
        <div className="cateBox">
        <div>
        <img src={props.img} alt={props.title}></img>
        </div>
        <p className="cateName">{props.title}</p>
        </div>
}

export default Category