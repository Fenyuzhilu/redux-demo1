import React, { Component } from 'react';
import {Switch,Route,Redirect} from 'react-router-dom';
class RouterMap extends Component {
  render() {
      const {routes}=this.props;
      const defaultRouter=<Route path="/" key={-1} component={()=>{
          return <Redirect to='/market'></Redirect>
      }}></Route>
    return (
      <Switch>
          {
              routes.length && routes.map((item,ind)=>{
                  return <Route key={ind} path={item.path} render={(config)=>{
                     const Children=item.chidren==undefined?[]:item.chidren;  
                     const Component=item.component
                    return <Component routes={Children} {...config}></Component>
                  }}></Route>
              }).concat(defaultRouter)
          }
      </Switch>
    );
  }
}

export default RouterMap;
