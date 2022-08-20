import React from 'react'

export default function Footer() {
  return (
    <div>
      <div className='footer'>
        <div className="row g-0 ">
          <div className="col pt-5">
            <img className='img_foot ms-5' src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg" alt="Logo Movies" />
          </div>
          <div className="col">
            <ul className='ul'>
              <li className='one_page'>THE BASICS</li>
              <li>About TMDB</li>
              <li>Contact Us</li>
              <li>Support Forums</li>
              <li>API</li>
              <li>System Status</li>
            </ul>
          </div>
          <div className="col">
            <ul className='ul'>
              <li className='one_page'>GET INVOLVED</li>
              <li>Contribution Bible</li>
              <li>Add New Movie</li>
              <li>Add New TV Show</li>
            </ul>
          </div>
          <div className="col">
            <ul className='ul'>
              <li className='one_page'>COMMUNITY</li>
              <li>Guidelines</li>
              <li>Discussions</li>
              <li>Leaderboard</li>
              <li>Twitter</li>
            </ul>
          </div>
          <div className="col">
            <ul className='ul'>
              <li className='one_page'>LEGAL</li>
              <li>Terms of Use</li>
              <li>API Terms of Use</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
