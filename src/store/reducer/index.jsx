const detaultRender={
    data:[],
    datalist:[
        {
            id:1,
            number:0,
            name:'zhangsng',
            age:'18'
        }, {
            id:2,
            number:0,
            name:'zhangsng',
            age:'18'
        }, {
            id:3,
            number:0,
            name:'zhangsng',
            age:'18'
        }, {
            id:4,
            number:0,
            name:'zhangsng',
            age:'18'
        }, {
            id:5,
            number:0,
            name:'zhangsng',
            age:'18'
        }
    ]
}
const goodslist=(state=detaultRender,action)=>{
    const {type,payload}=action;
    switch(type){
        case 'UPDATE':
           return {...state,data:payload};
        default :
        return state; 
    }
}
export default goodslist