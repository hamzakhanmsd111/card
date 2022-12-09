import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Navbar from './Navbar';

import Card from './Card';







const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>

 
  <Navbar/>


 

  <div>
  <h1> Top 3 Netflix movie</h1>
 <Card imgsrc='https://c4.wallpaperflare.com/wallpaper/241/910/337/la-casa-de-papel-series-netflix-netflix-tv-series-hd-wallpaper-preview.jpg' title='MONEY HEIST' text='Some quick example text to build on the card title and mak the cards conten'/>

 <Card imgsrc='https://e1.pxfuel.com/desktop-wallpaper/159/224/desktop-wallpaper-netflix-daredevil-daredevil-movie.jpg' title='DAREDEVIl' text='Some quick example text to build on the card title and make up the bulk of the cards content'/>

 <Card imgsrc='https://static1.colliderimages.com/wordpress/wp-content/uploads/2022/03/The-Best-Feel-Good-Movies-on-Netflix-Right-Now.jpg?q=50&fit=contain&w=1140&h=&dpr=1.5'title='welcome' text='On the other are bound to ensue; and equal blame be greater pleasures, or else he endures pains to avoid worse pains'/>
 
 </div>
</>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
