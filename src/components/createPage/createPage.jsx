import s from "./style.module.css"

function CreatePage(props) {
    return (
        <form onSubmit={props.Formik.handleSubmit}>
            <div className={s.firstLine}><label htmlFor="number" ><h2>Number:</h2>
                <input type="text" id="number" className={s.WithCimage+" "+s.ImageConfig} {...props.Formik.getFieldProps("number")} />
                {props.Formik.touched.number && props.Formik.errors.number && <p className={s.Error}>{props.Formik.errors.number}</p>}
            </label>
                <label htmlFor="invoicedate" ><h2>Invoice Date:</h2>
                    <input type="text" className={s.WithKimage+" "+s.ImageConfig} placeholder={"Select date"} id="invoicedate" {...props.Formik.getFieldProps("invoicedate")} />
                    {props.Formik.touched.invoicedate && props.Formik.errors.invoicedate && <p className={s.Error}>{props.Formik.errors.invoicedate}</p>}
                </label>
            </div>
            <label className={s.secondLine} htmlFor="supplydate" ><h2>Supply Date:</h2>
                <input type="text" className={s.WithKimage+" "+s.ImageConfig} style={{width:47+"%"}} placeholder={"Select date"} id="supplydate" {...props.Formik.getFieldProps("supplydate")} />
                {props.Formik.touched.supplydate && props.Formik.errors.supplydate && <p className={s.Error}>{props.Formik.errors.supplydate}</p>}
            </label>
            <label htmlFor="comment" ><h2>Comment:</h2>
                <textarea id="comment" {...props.Formik.getFieldProps("comment")} />
                {props.Formik.touched.comment && props.Formik.errors.comment && <p className={s.Error}>{props.Formik.errors.comment}</p>}
            </label>
            <button type="submit" className="MainFormButton">Save</button>
        </form>
    )
}
export default CreatePage;