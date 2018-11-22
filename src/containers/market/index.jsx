import React, { Component } from 'react';
import RouterView from 'router';
import {connect} from 'react-redux';
import * as getData from "store/action"
import {Link}from 'react-router-dom'
class Market extends Component {
  render() {
      const {routes,datalist,Update}=this.props
    return (
      <div className="Market">
      this is market
      <Link to="/detail">跳转</Link>
      <div>
        <ul>
          {
            datalist.length&&datalist.map((item,ind)=>{
              return <li key={item.id} onClick={()=>{Update(item,datalist)}}>{item.name}  {item.age}</li>
            })
          }
        </ul>
      </div>
        {/* <RouterView routes={routes}></RouterView >  */}
      </div>
    );
  }
}
const mapStateToProps=(state)=>{
  return state.Goodlist
}
const mapDistachToProps=(dispatch)=>{
  return {
    Update(goods,datalist){
        let hasgoods=datalist.filter(item=>{
          return item.id==goods.id?item.number++:item.number
        })
       dispatch(getData.Update(hasgoods))
    }

  }
}
export default connect(mapStateToProps,mapDistachToProps)(Market);
