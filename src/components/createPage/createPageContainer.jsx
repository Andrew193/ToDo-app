import { useFormik } from 'formik';
import Script from "./script"
import  CreatePage from "./createPage"
import style from "./style.module.css"
import style2 from "../mainPage/style.module.css"
import { useHistory } from 'react-router';
function CreatePageContainer(props) {
    let history=useHistory()
    const Formik = useFormik({
        initialValues: {
          number: "",
          invoicedate: "",
          supplydate:"",
          comment:""
        },
        validate:(values)=>Script.validate(values),
        onSubmit:(values, { resetForm })=>Script.submit(values,props.Notify,resetForm,history,props.setFlag,props.flag)
      })
    return(
        <div className={style.Container}>
            <div className={style2.LogoBlock}><h1>Create Invoice</h1><hr /></div>
            <div className={style.FormCover}><CreatePage  Formik={Formik}/></div>
        </div>
    )
}
export default CreatePageContainer;