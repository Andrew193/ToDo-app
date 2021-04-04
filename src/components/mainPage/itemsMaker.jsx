import style from "./style.module.css"
import script from "./script.js"
import { NavLink } from "react-router-dom";
const { v4: uuidv4 } = require('uuid');
function ItemsMaker(props) {
    let items = []
    items.unshift(<div className={style.item} key={uuidv4()}><p>Create</p><p>No</p><p>Supply</p><p>Comment</p></div>)
    props.toMake.forEach((value) => {
        if (value.number)
        items.push(<div className={style.item} data-id={value.id} key={uuidv4()}>
            <p>{value.date_created}</p>
            <p className={style.Number}>INV-{value.number}</p>
            <p>{value.date_supplied}</p>
            <p>{value.comment}</p>
            <hr />
            <button className={style.DeleteButton+" "+style.ControlButton}  onClick={(e)=>script.delete(e,props.setFlag,props.flag)}>x</button>
            <NavLink className={style.EditButton+" "+style.ControlButton} exact to={`/editinvoice/${value.id}`} style={{textDecoration:"none"}}>+</NavLink>
        </div>)
        })
    return (<>{items}</>)
}
export default ItemsMaker;