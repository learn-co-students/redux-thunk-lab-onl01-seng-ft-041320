// write your CatList component here
import React from 'react';

class CatList extends React.Component {
    catList = () => {
        // console.log(this.props)
        return this.props.catPics.map(cat => <img key={cat.id} src={cat.url} alt={cat.id} /> )
    }
    render() {
        return (
            <div>
                {this.catList()}
            </div>
        )
    }
}

export default CatList;