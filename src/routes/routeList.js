import AdminHome from "../Components/Admin/AdminHome";
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
    }

]

export default routeList