import AdminHome from "../Components/Admin/AdminHome";
import CreateWebPage from "../Components/Admin/CreateWebPage";
import Home from "../Components/User/Home";

const routeList = [
    {
        path:'/',
        isAuthReq:false,
        headerRequired:true,
        footerRequired:true,
        adminPage : false,
        component:Home
    },{
        path:'/websiteCreatorAdmin',
        isAuthReq:false,
        headerRequired:false,
        footerRequired:false,
        adminPage : true,
        component:AdminHome
    },{
        path:'/createWebPage',
        isAuthReq:false,
        headerRequired:false,
        footerRequired:false,
        adminPage : false,
        component:CreateWebPage
    }
]

export default routeList