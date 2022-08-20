import React from 'react'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function Favorit() {

  const favorit = useSelector(state => state.favorite)

  console.log(favorit, "favorit dan keldi");

  let mass = []

  favorit.map(item => {
    mass.push(item)
  })

  // favorit.map(item => {
  //   let son = 0 
  //   if(son === 0){
  //     mass.push(item)
  //     son++
  //   }

  //   let son1 = 0
  //   mass.map(move => {
  //     if(item.name === move.name){
  //       son1++
  //     }

  //     if(son1 > 0){
  //       console.log("");
  //     }else{
  //       mass.push(item)
  //     }
  //   })
  // })

  // let currentstate = [...mass]
  // useEffect(() => {
  //   favorit.map(item => {
  //     async function getData() {
  //       await axios.get(`${process.env.REACT_APP_START_KEY}/3/tv/${item.id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
  //         .then(ress => {
  //           currentstate.push(ress.data)

  //           setMass(currentstate)
  //         })
  //         .catch(err => {
  //           return console.log(err);
  //         })
  //     }
  //     getData()
  //   })
  // }, [])


  console.log(mass, "masss chiqdi");


  return (
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
  )
}
