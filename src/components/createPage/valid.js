const obj={
    validNumber:(number)=> (new RegExp('^[0-9]+$')).test(number) && number.length>2,
    validInvoiceDate:(date)=>date==="",
    validSupplyDate:(date)=>date==="",
    validComment:(comment)=>comment.length<160 && comment.length>10
}
export default obj;