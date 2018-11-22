import React, { Component } from 'react';
import  RouterMap from 'router/map'
import Routes from './routes'
class RouterView extends Component {
  render() {
      const {routes}=this.props;
    return (
                 <RouterMap routes={routes?routes:Routes}></RouterMap>
        );
  }
}

export default RouterView;
