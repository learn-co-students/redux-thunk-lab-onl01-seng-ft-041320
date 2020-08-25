import React from 'react';

const CatList = (props) => {
    return (
        <div>
            {props.catPics.map(cat => <img src={cat.url} alt='cat' key={cat.id} /> )}
        </div>
        
    )
}

export default CatList;