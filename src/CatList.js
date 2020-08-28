// write your CatList component here
import React from 'react'

export default function CatList({catPics}) {
  return (
    <div>
      <ul>
        {catPics.map(catPic => (
          <li key={catPic.id}><img src={catPic.url} alt={`cat-pic${catPic.id}`} /></li>
        ))}
      </ul>
    </div>
  )
}