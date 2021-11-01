import AdminHome from "../Components/Admin/AdminHome";
import CreateWebPage from "../Components/SuperAdmin/CreateWebPage";
import Home from "../Components/User/Home";

const routeList = [
    {
        path:'/',
        authRequired:false,
        headerRequired:true,
        footerRequired:true,
        adminPage : false,
        component:Home
    },{
        path:'/websiteCreatorAdmin',
        authRequired:false,
        headerRequired:false,
        footerRequired:false,
        adminPage : true,
        component:AdminHome
    },{
        path:'/createWebPage',
        authRequired:false,
        headerRequired:false,
        footerRequired:false,
        adminPage : false,
        component:CreateWebPage
    }
]

export default routeList