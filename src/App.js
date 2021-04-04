import './index.css';
import MainPageContainer from "./components/mainPage/mainPageContainer"
import CreatePageContainer from "./components/createPage/createPageContainer"
import EditPageContainer from "./components/editPage/editPageContainer"
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';
import { Route } from 'react-router';
import { useState } from 'react';
function App() {
  const Notify = (message) => toast(message),
  [flag,setFlag]=useState(false);
  return (
    <div className="App">
     <Route exact path={"/editinvoice/:id?"} render={()=><EditPageContainer flag={flag} setFlag={setFlag} Notify={Notify}/>}/>
     <Route exact path={"/addinvoice"} render={()=><CreatePageContainer flag={flag} setFlag={setFlag} Notify={Notify}/>}/>
     <Route exact path={"/"} render={()=><MainPageContainer flag={flag} setFlag={setFlag} />}/>
     <ToastContainer toastStyle={{ background: "black", borderRadius: "15px" }} hideProgressBar={true} autoClose={2000} position="top-center" />
    </div>
  );
}

export default App;
