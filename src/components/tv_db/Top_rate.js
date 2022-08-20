import React from 'react'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {BiArrowBack} from 'react-icons/bi'

export default function MoviesP() {
  const [mass2, setMassiv2] = useState([])
  const [mass, setMass] = useState([])
  const [all, setAll] = useState(true)

  useEffect(() => {
    async function getData() {
      let baza = await fetch(`${process.env.REACT_APP_START_KEY}/3/tv/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`)
        .then(ress => {
          return ress.json();
        })
        .catch(err => {
          return (err)
        })
      setMassiv2(baza.results)
    }
    getData()
  }, [])


  function input_search(val){
    setAll(false)
    let move = mass2.filter(item => {
      return item.original_name.toLowerCase().includes(val.toLowerCase())
    })
    setMass(move)
  }

  return (
    <div className='row g-0'>
      <div className='col-3'>
        <h2 className='text-center tv_show1 border shadow fw-bold mt-5'>Top Rated</h2>
        <div className='d-flex justify-content-center mt-5'>
          <input onInput={(val) => input_search(val.target.value)} className='form-control w-75 fs-5 shadow input_path' placeholder='Search movies' type="text" />
        </div>
        <div className='d-flex justify-content-center align-items-center my-5'>
        <h3 className='me-3'><BiArrowBack/></h3> <Link to='/'><button className='btn btn-outline-dark fs-5 fw-bold'>Back</button></Link>
        </div>
      </div>
      <div className='col-9'>
        <div className='row g-0'>
          {
            (mass2.length > 0 && all) && mass2.map((item, i) => {
              return (
                <div className='col-3 my-3' key={i}>
                  <p className='dott'><span className='dott_mov'></span> <span className='dott_mov'></span> <span className='dott_mov'></span></p>
                  <Link to={`/render/${item.id}`}>
                    {
                      (item.poster_path) ? <img className='img_poster shadow' src={`${process.env.REACT_APP_IMG_KEY}${item.poster_path}`} alt={item.name} /> : <img className='img_poster shadow' src="https://semantic-ui.com/examples/assets/images/wireframe/image.png" alt="themoviedborg" />
                    }
                  </Link>
                  <p className='sircle1'><p className='calso'>{item.vote_average * 10}<sup className='sup'>%</sup></p></p>
                  <h6 className=' text-start mt-4 w-75'>{item.original_name}</h6>
                  <p className='text-start'><span>Dat: </span>{item.first_air_date}</p>
                </div>
              )
            })
          }
                    {
            (mass.length > 0) && mass.map((item, i) => {
              return (
                <div className='col-3 my-3' key={i}>
                  <p className='dott'><span className='dott_mov'></span> <span className='dott_mov'></span> <span className='dott_mov'></span></p>
                  <Link to={`/render/${item.id}`}>
                    {
                      (item.poster_path) ? <img className='img_poster shadow' src={`${process.env.REACT_APP_IMG_KEY}${item.poster_path}`} alt={item.name} /> : <img className='img_poster shadow' src="https://semantic-ui.com/examples/assets/images/wireframe/image.png" alt="themoviedborg" />
                    }
                  </Link>
                  <p className='sircle1'><p className='calso'>{item.vote_average * 10}<sup className='sup'>%</sup></p></p>
                  <h6 className=' text-start mt-4 w-75'>{item.original_name}</h6>
                  <p className='text-start'><span>Dat: </span>{item.first_air_date}</p>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}
