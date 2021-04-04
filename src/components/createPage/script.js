import Valid from "./valid"
import Errors from "./errors"
const { v4: uuidv4 } = require('uuid');
const obj = {
  validate: (values) => {
    let errors = {};
    if (!Valid.validNumber(values.number)) errors.number = Errors.numberError;
    if (Valid.validInvoiceDate(values.invoicedate)) errors.invoicedate = Errors.invoicedateError;
    if (Valid.validSupplyDate(values.supplydate)) errors.supplydate = Errors.supplydateError;
    if (!Valid.validComment(values.comment)) errors.comment = Errors.commentError;
    return errors;
  },
  submit: (values, Notify, reset, history,setFlag,flag) => {
    reset();
    const key = uuidv4();
    fetch("http://localhost:3001/invoices", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify({
        id: key,
        number: +values.number,
        date_created: values.invoicedate,
        date_supplied: values.supplydate,
        comment: values.comment
      })
    })
    Notify("Created");
    history.push("/");
    setFlag(!flag);
  },
  edit: (values, Notify, reset, history, id,setFlag,flag) => {
    reset();
    fetch(`http://localhost:3001/invoices/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(values)
    })
    Notify("Edited");
    history.push("/");
    setFlag(!flag);
  },
  makePatch: (values) => {
    const result = {};
    if (values.number !== "")
      result.number = values.number;
    if (values.invoicedate !== "")
      result.date_created = values.invoicedate;
    if (values.supplydate !== "")
      result.date_supplied = values.supplydate;
    if (values.comment !== "")
      result.comment = values.comment;
    return result;
  }
}
export default obj;