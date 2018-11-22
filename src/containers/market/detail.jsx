import React, { Component } from 'react';
import {connect} from 'react-redux'
class Detail extends Component {
  render() {
    const {data}=this.props;
    console.log(data)
    return (
      <div className="Detail">
        {data.length && data.map(item=>{
          return <li key={item.id}> {item.number}---{item.name}---{item.id}</li>
        })}
      </div>
    );
  }
}
const mapStateToProps=(state)=>{
  console.log(state.Goodlist)
  return state.Goodlist;
}

export default connect(mapStateToProps)(Detail);
