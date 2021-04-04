const obj={
    delete:(e,setFlag,flag)=>{
        if(window.confirm("Are you sure you want to delete the invoice?")){
        fetch(`http://localhost:3001/invoices/${e.target.parentNode.dataset.id}`,{
            method:"DELETE"
        }).then((value)=>setFlag(!flag))
    }
    }
}
export default obj;  