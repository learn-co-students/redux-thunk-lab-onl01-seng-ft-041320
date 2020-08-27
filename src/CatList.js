// write your CatList component here
import React from 'react';

class CatList extends React.Component {
    allCats = () => {
        return this.props.catPics.map(cat => <img key={cat.id} src={cat.url} alt={`cat pic ${cat.id}`}/>)
    }

    render() {
        return (
            <div>
                {this.allCats()}
            </div>
        )
    }
}

export default CatList