// write your CatList component here

import React from 'react';

class CatList extends React.Component {
   catList = this.props.catPics.map(catImage => {
    return <img key={catImage.id} src={catImage.url} alt='' />})
  
    render() {
        return (
            <div>
                {this.catList}
            </div>
        )
    }
}

export default CatList;
