import React from 'react'

export default function NavScrollExample() {
  

  return (
    <div>
    <div className="background">
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
      <img width="150px" src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg" alt="" />
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
      <a className="nav-link active" aria-current="page" href="#">Movies</a>
      <ul>
      <li>Popular</li>
      <li>Now Playing</li>
      <li>Upcoming</li>
      <li>Top Rated</li>
      </ul>
      </li>
      <li className="nav-item">
      <a className="nav-link active" aria-current="page" href="#">TV Shows</a>
      <ul>
      <li>Popular</li>
      <li>Airing Today</li>
      <li>On TV</li>
      <li>Top Rated</li>
      </ul>
      </li>
      <li className="nav-item">
      <a className="nav-link active" aria-current="page" href="#">People</a>
      <ul>
      <li>Popular People</li>
      </ul>
      </li>
      <li className="nav-item">
      <a className="nav-link active" aria-current="page" href="#">More</a>
      <ul>
      <li>Discussions</li>
      <li>Leaderboard</li>
      <li>Support</li>
      <li>API</li>
      </ul>
      </li>
      </ul>
      <form className="d-flex align-items-center" role="search">
      <h2 className='text-white fw-bold'>+</h2>
      <select className='form-control mx-4 h-25 fw-bold' name="" id="">
      <option value="UZ" selected>UZ</option>
      <option value="RU" selected>RU</option>
      </select>
      <h6 className='text-white mx-3'>Login</h6>
      <h6 className='text-white mx-3'>Join_TDMB</h6>
      <p><i class="bi bi-search fw-bold fs-5 mx-3 mt-5 search_icon"></i></p>
      </form>
      </div>
      </div>
      </nav>
    </div>
    <div className="opac">
      <div className="header ">
        <div className="header_opac text-start p-5">
          <h1 className=' text-white mt-5'>Welcome.</h1>
          <p className='fs-4 fw-bold text-white mb-5'>Millions of movies, TV shows and people to discover. Explore now.</p>
          <label className='form-control' htmlFor="">
            <input className=' search fw-bold fs-5' type="search" placeholder='search'/>
            <button className='btn btn-primary btn_search'>Search</button>
          </label>
        </div>
      </div>
    </div>
    <div className="section container my-4">
      <div className="d-flex justify-content-start">
        <h3>What's Popular</h3>
        <div className='d-flex ms-3'>
        <p className='buttons border fw-bold p-2'>On TV</p>
        <p className='buttons border fw-bold p-2'>In Theaters</p>
        </div>
      </div>
    </div>
    </div>
    )
  }
  