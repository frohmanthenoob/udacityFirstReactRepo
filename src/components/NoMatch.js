import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class NoMatch extends Component{

  render(){
    const divStyle = {   
      margin: 'auto',
      width: '75%',
    }
    return(
      <div style={divStyle} >
        <h1>Oops!</h1>
        <h2>We can't find the page you're looking for.</h2>
        <Link to="/" >Go To Main Page!</Link>
      </div>
    )
  }
}

export default NoMatch;