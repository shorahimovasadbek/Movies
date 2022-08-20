import React from 'react'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi'

export default function MoviesP() {
  const [mass2, setMassiv2] = useState([])
  const [mass, setMass] = useState([])
  const [all, setAll] = useState(true)

  useEffect(() => {
    async function getData() {
      let baza = await fetch(`${process.env.REACT_APP_START_KEY}/3/person/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`)
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

  function input_search(val) {
    setAll(false)
    let move = mass2.filter(item => {
      return item.name.toLowerCase().includes(val.toLowerCase())
    })
    setMass(move)
  }

  return (
    <div className='row g-0 d-flex justify-content-center'>
      <div className='col-5'>
        <h2 className='text-center tv_show1 border shadow fw-bold mt-5'>Popular People</h2>
        <div className='d-flex justify-content-center align-items-center my-5'>
          <h3 className='me-3'><BiArrowBack /></h3> <Link to='/'><button className='btn btn-outline-dark fs-5 fw-bold'>Back</button></Link>
        </div>
        <div className='d-flex justify-content-center mb-4'>
          <input onInput={(val) => input_search(val.target.value)} className='form-control fs-5 fw-bold shadow input_path' placeholder='Search movies' type="text" />
        </div>
      </div>
      <div className='d-flex flex-wrap justify-content-center'>
        {
          (mass2.length > 0 && all) && mass2.map((item, i) => {
            return (
              <div className='my-3 card mx-2 shadow' key={i}>
                {
                  (item.profile_path) ? <img className='img_poster2' src={`${process.env.REACT_APP_IMG_KEY}${item.profile_path}`} alt={item.name} /> : <img className='img_poster2' src="https://semantic-ui.com/examples/assets/images/wireframe/image.png" alt="themoviedborg" />
                }
                <div className='card-body'>
                  <h4 className=' text-start mt-2'>{item.name}</h4>
                </div>
              </div>
            )
          })
        }
        {
          (mass.length > 0) && mass.map((item, i) => {
            return (
              <div className='my-3 card mx-2 shadow' key={i}>
                <img className='img_poster2' src={`${process.env.REACT_APP_IMG_KEY}${item.profile_path}`} alt={item.name} />
                <div className='card-body'>
                  <h4 className=' text-start mt-2'>{item.name}</h4>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
