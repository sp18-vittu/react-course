import ReactDOM from "react-dom/client";
import Body from "./src/components/Body/Body";
import Header from "./src/components/Header/Header";
import Footer from "./src/components/Footer/Footer";
const AppLayout=function(){
    console.log("Applayout rendered")
    return(
        <>
        <Header/>
        <Body/>
        {/* <Footer/>  */}
        </>
    );
};

const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);