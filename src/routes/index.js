import { Switch } from "react-router";
import PrivateRoute from "../helpers/PrivateRoute";
import PublicRoute from "../helpers/PublicRoute";
import routeList from './routeList';

function Routes(){
    let routeListData = routeList.map((routeElement,index)=>{
        if(routeElement.isAuthReq){
            return (<PrivateRoute key={index} exact {...routeElement} />)
        }else{
            return (<PublicRoute key={index} exact {...routeElement} />)
        }
    });
    return(
        <>
            <Switch>
                {routeListData}
            </Switch>
        </>        
    )
}

export default Routes;