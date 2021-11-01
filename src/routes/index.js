import { useSelector } from "react-redux";
import { Switch } from "react-router";
import GenericComponent from "../Components/User/GenericComponent";
import PrivateRoute from "../helpers/PrivateRoute";
import PublicRoute from "../helpers/PublicRoute";
import routeList from './routeList';

function Routes(){
    const {navElements} = useSelector(state => state.setting.webSiteConfig)
    let routeListDynamicData = [];
    let routeListStaticData = [];
    routeListStaticData = routeList.map((routeElement,index)=>{
        if(routeElement.authRequired){
            return (<PrivateRoute key={'staticRoute'+index} exact {...routeElement} />)
        }else{
            return (<PublicRoute key={'staticRoute'+index} exact {...routeElement} />)
        }
    });
    if(navElements && navElements.length > 1){
        let dynamicRoutes = navElements.slice(1);
        routeListDynamicData = dynamicRoutes.map((routeElement,index)=>{
            if(routeElement.authRequired){
                return (<PrivateRoute key={'dynamicRoute'+index} exact {...routeElement} component ={GenericComponent} pageSetting={{data:'here'}}/>)
            }else{
                return (<PublicRoute key={'dynamicRoute'+index} exact {...routeElement}  component ={GenericComponent} pageSetting={{data:'here'}}/>)
            }
        })
    }
    const routeListData = routeListStaticData.concat(routeListDynamicData);
    return(
        <>
            <Switch>
                {routeListData}
            </Switch>
        </>        
    )
}

export default Routes;