import React from 'react'

import   './App.css'



export default function Card(props) {
  return (
    <>
  <div className="card  mx-3" >
  <img src={props.imgsrc} alt="..." />
 
  <div className="card-body">
    <h2 className="card-title">{props.title}</h2>
    <p className=" ">{props.text}</p>
    <a href="https://c4.wallpaperflare.com/wallpaper/622/739/588/stranger-things-netflix-clouds-bicycle-wallpaper-preview.jpg" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
    
  
  

    </>
  )
}

