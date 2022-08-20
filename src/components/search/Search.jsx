import React from 'react'
import axios from 'axios'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { BiArrowBack } from 'react-icons/bi'
import { useState } from 'react'
export default function Search() {
  const navigate = useNavigate()

  const params = useParams().soz
  const [mass, setMass] = useState([])
  const [mass1, setMass1] = useState([])
  const [all , setAll] = useState(true)

  axios.get(`${process.env.REACT_APP_START_KEY}/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1&include_adult=false`, {
    params: {
      query: params
    }
  })
    .then(ress => {
      setMass(ress.data.results)
    })
    .catch(err => {
      console.log(err);
    })


  function input_search(val){
    setAll(false)
    let move = mass.filter(item => {
      return item.original_title.toLowerCase().includes(val.toLowerCase())
    })
    setMass1(move)
  }


  return (
    <div className='row g-0'>
      <div className='col-3'>
        <h2 className='text-center tv_show1 border shadow fw-bold mt-5'>Sarch results</h2>
        <div className='d-flex justify-content-center mt-5'>
          <input onInput={(val) => input_search(val.target.value)} className='form-control w-75 fs-5 shadow input_path' placeholder='Search movies' type="text" />
        </div>
        <div className='d-flex justify-content-center align-items-center my-5'>
          <h3 className='me-3'><BiArrowBack /></h3> <Link to='/'><button className='btn btn-outline-dark fs-5 fw-bold'>Back</button></Link>
        </div>
      </div>
      <div className='col-9'>
        {
          (mass.length > 0 && all) && mass.map((item, index) => {
            return (
              <div className='d-flex my-4 shadow section_card'>
                {
                  (item.poster_path) ? <Link to={`/Search_One/${item.id}`}> <img className='img_poster__search' src={`${process.env.REACT_APP_IMG_KEY}` + item.poster_path} alt={item.title} /> </Link> : <Link to={`/Search_One/${item.id}`}><img className='img_poster__search' src="https://semantic-ui.com/examples/assets/images/wireframe/image.png" alt="themoviedborg" /></Link>
                }
                <div className='mx-3 align-self-center'>
                  <h3>{item.original_title}</h3>
                  <h5>{item.release_date}</h5>
                  <p className='overview'>{item.overview}</p>
                </div>
              </div>
            )
          })
        }
        {
          (mass1.length > 0) && mass1.map((item, index) => {
            return (
              <div className='d-flex my-4 shadow section_card'>
                {
                  (item.poster_path) ? <Link to={`/Search_One/${item.id}`}> <img className='img_poster__search' src={`${process.env.REACT_APP_IMG_KEY}` + item.poster_path} alt={item.title} /> </Link> : <Link to={`/Search_One/${item.id}`}><img className='img_poster__search' src="https://semantic-ui.com/examples/assets/images/wireframe/image.png" alt="themoviedborg" /></Link>
                }
                <div className='mx-3 align-self-center'>
                  <h3>{item.original_title}</h3>
                  <h5>{item.release_date}</h5>
                  <p className='overview'>{item.overview}</p>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
