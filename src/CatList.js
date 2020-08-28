import React, { Component } from 'react';

export default class CatsList extends Component {

    render(){
        return(
        <ul>
            {this.props.catPics.map(cat => <li key={cat.id}><img src={cat.url}/></li>)}
        </ul>
        )
    }
       
}