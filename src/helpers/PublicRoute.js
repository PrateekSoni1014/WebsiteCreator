import { Route } from "react-router";
import Footer from "../Components/User/Footer";
import Header from "../Components/User/Header";
import AdminHeader from "../Components/Admin/AdminHeader";

function PublicRoute({component:Component , ...rest}){
    return(
        <Route
            {...rest}
            render = {(props)=>
                <>
                    {rest.headerRequired && (<Header/>)}
                    {rest.adminPage && (<AdminHeader/>)}
                    {Component && <Component {...props}/>}
                    {rest.footerRequired && (<Footer/>)}                        
                </>
            }
        />
    )
}

export default PublicRoute;