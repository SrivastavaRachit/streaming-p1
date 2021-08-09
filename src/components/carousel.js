import React from 'react'
import '../stylesheets/style.css';

export default function carousel() {
    return (
        
        <div className="op">
 <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://indiaeducationdiary.in/wp-content/uploads/2020/05/Avenger-Endgame-Poster-2.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://i.pinimg.com/originals/cd/e6/14/cde614b295edaa5c4112a489fabc2d60.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://i1.wp.com/www.moviewallpapers.me/wp-content/uploads/2021/02/black_widow_banner.jpg?ssl=1" class="d-block w-100" alt="..."/>
    </div>
   
   
    
   
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
<h1 className="ert">Latest and Trending</h1>
<button className="btn btn-outline-primary" type="submit">Hollywood</button>
b
<button className="btn btn-outline-primary" type="submit">Bollywood</button>
b
<button className="btn btn-outline-primary" type="submit">Tollywood</button>
b
<button className="btn btn-outline-primary" type="submit">Web Series</button>
b
<button className="btn btn-outline-primary" type="submit">Tv Shows</button>
{/* <h3 > <b>  Watch Anything Anywhere Anytime </b></h3> */}
<h5 className="float-end"> <a href="">See All</a></h5>


        </div>

        
    )
}