import { Route } from "react-router";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

function PublicRoute({component:Component , ...rest}){
    return(
        <Route
            {...rest}
            render = {(props)=>
                <>
                    {rest.headerRequired && (<Header/>)}
                    {/* <div>{props}</div> */}
                    {Component && <Component {...props}/>}
                    {rest.footerRequired && (<Footer/>)}                        
                </>
            }
        />
    )
}

export default PublicRoute;