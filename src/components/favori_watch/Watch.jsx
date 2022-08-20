import React from 'react'
import { useSelector } from 'react-redux'

export default function Watch() {
  const watch = useSelector(state => state.watchlist)
  console.log(watch, " watch dan keldi.");

  let mass = []

watch.map(item => {
    mass.push(item)
  })
      return (
        <div>
      <div>
        {
          mass.map((item, index) => {
            return (
              <div className='d-flex align-items-center mx-5 mt-5 shadow readius'>
                <img className='img_poster__search' src={`${process.env.REACT_APP_IMG_KEY}${item.poster_path}`} alt={item.name} />
                <div className='ms-3'>
                  <div className='d-flex align-items-center'>
                    <p className='black d-flex align-items-center justify-content-center'><span className=' cal text-white'>{Math.floor(item.vote_average * 10, -1)}<sup className='yellow '>%</sup></span></p>
                    <div className='ms-3'>
                      <h4>{item.name}</h4>
                      <p>{item.first_air_date}</p>
                    </div>
                  </div>
                  <p>{item.overview}</p>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
