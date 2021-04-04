import { useFormik } from 'formik';
import CreatePage from "../createPage/createPage"
import { useHistory, withRouter } from 'react-router';
import Script from "../createPage/script"
import style from "../createPage/style.module.css"
import style2 from "../mainPage/style.module.css"
import style3 from "./style.module.css"
import Loading from "../Loader/Loader"
import { useEffect, useState } from 'react';
function EditPageContainer(props) {
  let history = useHistory()
  const [invoices, setInvoices] = useState(null),
    Formik = useFormik({
      initialValues: {
        number: "",
        invoicedate: "",
        supplydate: "",
        comment: ""
      },
      onSubmit: (values, { resetForm }) => Script.edit(Script.makePatch(values), props.Notify, resetForm, history,props.match.params.id,props.setFlag,props.flag)
    })
  useEffect(() => {
    fetch(`http://localhost:3001/invoices/${props.match.params.id}`).then(response => response.json()).then(result => setInvoices(result))
  }, [props.match.params.id])
  return (
    <div className={style.Container+" "+style3.Container}>
      {invoices && <><div className={style2.LogoBlock}><h1>Edit Invoice</h1><hr /></div>
        <section className={style3.enteredBlock}>
          <h3>Data entered</h3>
          <p>Comment: {invoices.comment}</p>
          <p>Date created: {invoices.date_created}</p>
          <p>Date Supplied: {invoices.date_supplied}</p>
          <p>Number: INV-{invoices.number}</p>
        </section>
        <CreatePage Formik={Formik} /></>}
        {!invoices && <Loading />}
    </div>
  )
}
export default withRouter(EditPageContainer);