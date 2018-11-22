import Market from "view/market";
import Rank from "view/market/rank";
import Detail from "view/market/detail";
const routes=[{
    path:'/detail',
    component:Detail
},{
    path:'/market',
    component:Market,
    chidren:[{
        path:'/market/rank',
        component:Rank,
    }]
}]
export default routes

