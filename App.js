import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body/Body.js";
import Header from "./components/Header/Header.js"


const AppLayout=function(){
    return(
        <React.Fragment>
        <Header/>
        <Body/>
        {/* <Footer/> */}
        </React.Fragment>
    );
};

const root= ReactDOM.createRoot( document.getElementById("root"));
root.render(<AppLayout/>);