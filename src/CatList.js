import React, { Component } from 'react'

export default class CatList extends Component {

  render(){
    return (
      <ol>
        {this.props.catPics.map(catPic => <li key={catPic}><img src={catPic.url} alt=""/></li>)}
      </ol>
    )
  }
}
