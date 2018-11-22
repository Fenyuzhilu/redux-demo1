import React, { Component } from 'react';
import {Link} from 'react-router-dom'
class Rank extends Component {
  render() {
    return (
      <div className="Rank">
        this is Rank
        <Link to={{
          pathname:'/detail',
          params:{
            id:2
          }
        }}>跳转</Link>
      </div>
    );
  }
}

export default Rank;
