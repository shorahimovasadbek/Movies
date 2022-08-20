import React from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { BiArrowBack } from 'react-icons/bi'
import { useEffect } from 'react'
import {TiThMenu} from 'react-icons/ti'
import {AiFillHeart} from 'react-icons/ai'
import {BsFillBookmarkFill} from 'react-icons/bs'
import {AiFillStar} from 'react-icons/ai'



export default function Render() {
  const id = useParams().id
  const [baza, setBaza] = useState({})
  
  useEffect(() => {
    async function getData() {
      let baza = await fetch(`${process.env.REACT_APP_START_KEY}/3/tv/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
        .then(ress => {
          return ress.json()
        })
        .catch(err => {
          return err.json()
        })
        setBaza(baza)
    }
    getData()
  }, [])
  
  return (
    <div>
      <ul className='ul_one my-2'>
        <Link to='/'><button className='btn btn-outline-dark fs-5 fw-bold'><BiArrowBack /> Back</button></Link>
        <li>Overview</li>
        <li>Media</li>
        <li>Fandom</li>
        <li>Share</li>
      </ul>
      <div className='One_img_background' style={{ backgroundImage: `url(${`${process.env.REACT_APP_IMG_KEY}` + baza.backdrop_path})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', height: "500px", width: "100%" }}>
        <div className='centered_back d-flex justify-content-start px-5 align-items-center'>
          {
            (baza.poster_path) ? <img className='One_img shadow-lg' src={`${process.env.REACT_APP_IMG_KEY}` + baza.poster_path} alt={baza.name} /> : <img className='One_img' src="https://semantic-ui.com/examples/assets/images/wireframe/image.png" alt="themoviedborg" />
          }
          <div className='px-5'>
            <h2>{baza.name} <span>({baza.first_air_date})</span></h2>
            <div className='d-flex align-items-center'>
              <p className='sircle2'><p className='calso1 fs-4 fw-bold'>{Math.floor(baza.vote_average * 10, -1)}<sup className='sup'>%</sup></p></p>
              <p className='fw-bold ms-2'>User <br /> Score</p>
              <div className='d-flex align-baseline'>
              <p className='btn_icons d-flex align-baseline ms-4'><TiThMenu/></p>
              <p className='btn_icons d-flex align-baseline ms-4'><AiFillHeart/></p>
              <p className='btn_icons d-flex align-baseline ms-4'><BsFillBookmarkFill/></p>
              <p className='btn_icons d-flex align-baseline ms-4'><AiFillStar/></p>
              </div>
            </div>
          <p className='fs-5 fst-italic'>{baza.tagline}</p>
          <h4>Overview</h4>
          <p>{baza.overview}</p>
          </div>
        </div>
      </div>
      {
}
    </div>
  )
}
