import { Redirect, Route } from "react-router";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

function PrivateRoute({component:Component , ...rest}){
    let authed = localStorage.getItem('jwt_access_token') || sessionStorage.getItem('jwt_access_token') ? true : false;
    return(
        <Route
            {...rest}
            render = {(props)=>
                authed ? (
                    <>
                        {rest.headerRequired && (<Header/>)}
                        {/* <div>{props}</div> */}
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