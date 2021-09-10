import { Redirect, Route } from "react-router";
import Footer from "../Components/User/Footer";
import Header from "../Components/User/Header";

function PrivateRoute({component:Component , ...rest}){
    let authed = localStorage.getItem('jwt_access_token') || sessionStorage.getItem('jwt_access_token') ? true : false;
    return(
        <Route
            {...rest}
            render = {(props)=>
                authed ? (
                    <>
                        {rest.headerRequired && (<Header/>)}
                        {Component && <Component {...props}/>}
                        {rest.footerRequired && (<Footer/>)}                        
                    </>
                ):(
                    <Redirect to={{pathname:'/', state:{from: props.location}}}/>
                )
            }
        />
    )

}

export default PrivateRoute;