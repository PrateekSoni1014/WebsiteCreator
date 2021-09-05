import { Switch } from "react-router";
import PrivateRoute from "../helpers/PrivateRoute";
import PublicRoute from "../helpers/PublicRoute";
import routeList from './routeList';

function Routes(){
    let routeListData = routeList.map((routeElement)=>{
        if(routeElement.isAuthReq){
            return (<PrivateRoute exact {...routeElement} />)
        }else{
            return (<PublicRoute exact {...routeElement} />)
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