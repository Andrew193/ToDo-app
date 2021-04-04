import style from "./style.module.css"


function mainPage(props) {
    return (<>
        <div className={style.LogoBlock}><h1>Invoices</h1><hr /></div>
        <div className={style.AddItemBlock + " " + style.Prety}>
            <h3>Actions</h3>
            <button type={"button"} className={style.Prety} onClick={props.handleClick}>Add new</button>
        </div>
        <div className={style.ItemsContainer + " " + style.Prety}>
            <h3>Invoices</h3>
            {props.invoices}
        </div></>
    )
}
export default mainPage;