import { useEffect, useState } from "react";
import ItemsMaker from "./itemsMaker";
import { useHistory } from "react-router-dom";
import style from "./style.module.css";
import Loader from "../Loader/Loader"
import MainPage from "./mainPage"
function MainPageContainer(props) {
    const [invoices, setInvoices] = useState(null);
    let history = useHistory();
    function handleClick() {history.push("/addinvoice");}
    useEffect(() => {
        fetch("http://localhost:3001/invoices").then(response => response.json()).then(result => setInvoices(<ItemsMaker flag={props.flag} setFlag={props.setFlag} toMake={result} />))
    },[props.flag,props.setFlag])
    return (
        <div className={style.Container}>
            {invoices &&<MainPage handleClick={handleClick} invoices={invoices}/>}
            {!invoices && <Loader />}
        </div>
    )
}
export default MainPageContainer;
