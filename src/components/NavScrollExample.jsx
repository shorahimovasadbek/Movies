import React from 'react'
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../App.css'
import Footer_top from './footer_top/Footer_top';
import {AiFillHeart} from 'react-icons/ai'
import {BsFillBookmarkFill} from 'react-icons/bs'
import {useDispatch} from 'react-redux'


export default function NavScrollExample() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [search, setSearch] = useState("");
  const [btnColor, setBtnColor] = useState("rgb(3,37,65)");
  const [btnColor1, setBtnColor1] = useState("white");
  const [btnColor2, setBtnColor2] = useState("rgb(106,232,187)");
  const [btnColor3, setBtnColor3] = useState("rgba(0, 0, 0, 0)");
  const [btnColor4, setBtnColor4] = useState("rgb(3,37,65)");
  const [btnColor5, setBtnColor5] = useState("white");
  const [mass1, setMassiv1] = useState([]);
  const [mass2, setMassiv2] = useState([]);
  const [mass3, setMassiv3] = useState([]);
  const [mass4, setMassiv4] = useState([]);
  const [mass5, setMassiv5] = useState([]);
  const [mass6, setMassiv6] = useState([]);
  const [all, setAll] = useState(false);
  const [all1, setAll1] = useState(false);
  const [all2, setAll2] = useState(false);
  const [start, setStart] = useState("")
  

  // const [videoFilePath, setVideoFilePath] = useState(null);
  // const handleVideoUpload = (event) => {
  //   const [file] = event.target.files;
  //   setVideoFilePath(URL.createObjectURL(file));
  // };
  {/* <input type="file" onChange={handleVideoUpload} /> */ }
  {/* <ReactPlayer url={videoFilePath} width="100%" height="100%" controls /> */ }
  // import ReactPlayer from "react-player";

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     console.log('This will run after 3 second!')
  //   }, 3000);
  //   return () => clearTimeout(timer);
  // }, []);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 8
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2
    }
  };

  const responsive1 = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  function ishla1() {
    setAll(false)
  };

  function ishla2() {
    setAll(true)
  };

  function ishla3() {
    setAll1(false)
  };

  function ishla4() {
    setAll1(true)
  };

  function ishla5() {
    setAll2(false)
  };

  function ishla6() {
    setAll2(true)
  };


  useEffect(() => {
    async function getData() {
      let baza = await fetch(`${process.env.REACT_APP_START_KEY}/3/tv/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`)
        .then(ress => {
          return ress.json();
        })
        .catch(err => {
          return (err)
        })

        baza.results.map(item => {
          item.dots = false
        })
        
      setMassiv1(baza.results)
    }
    getData()
  }, []);

  useEffect(() => {
    async function getData() {
      let baza = await fetch(`${process.env.REACT_APP_START_KEY}/3/tv/airing_today?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`)
        .then(ress => {
          return ress.json();
        })
        .catch(err => {
          return (err)
        })
      setMassiv2(baza.results)
    }
    getData()
  }, []);

  useEffect(() => {
    async function getData() {
      let baza = await fetch(`${process.env.REACT_APP_START_KEY}/3/tv/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`)
        .then(ress => {
          return ress.json();
        })
        .catch(err => {
          return (err)
        })
      setMassiv3(baza.results)
    }
    getData()
  }, []);

  useEffect(() => {
    async function getData() {
      let baza = await fetch(`${process.env.REACT_APP_START_KEY}/3/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`)
        .then(ress => {
          return ress.json();
        })
        .catch(err => {
          return (err)
        })
      setMassiv4(baza.results)
    }
    getData()
  }, []);

  useEffect(() => {
    async function getData() {
      let baza = await fetch(`${process.env.REACT_APP_START_KEY}/3/tv/on_the_air?api_key=${process.env.REACT_APP_API_KEY}`)
        .then(ress => {
          return ress.json();
        })
        .catch(err => {
          return (err)
        })
      setMassiv5(baza.results)
    }
    getData()
  }, []);

  useEffect(() => {
    async function getData() {
      let baza = await fetch(`${process.env.REACT_APP_START_KEY}/3/tv/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`)
        .then(ress => {
          return ress.json();
        })
        .catch(err => {
          return (err)
        })
      setMassiv6(baza.results)
    }
    getData()
  }, []);


  function GetData(data) {
    navigate(`search/${data}`)
  }

  function moveBy(mov) {
    navigate(`render/${mov}`)
  }



  return (
    <div>
      <div className="opac">
        <div className="header ">
          <div className="header_opac text-start p-5">
            <h1 className=' tv_show text-white mt-5 fw-bold fs-1'>Welcome.</h1>
            <p className='fs-4 tv_show fw-bold text-white mb-5'>Millions of movies, TV shows and people to discover. Explore now.</p>
            <div className="custom-search">
              <input onInput={(val) => setSearch(val.target.value)} type="text" className="custom-search-input fw-bold fs-5" placeholder="Search a movie" />
              <button onClick={() => GetData(search)} className="custom-search-botton">Search</button>
            </div>
          </div>
        </div>
      </div>

      <div className="section container my-4">
        <div className="d-flex justify-content-start align-items-center">
          <h3 className='fw-bold'>What's Popular</h3>
          <div className='border d-flex ms-3 buttons'>
            <a onClick={() => {
              btnColor === "rgb(3,37,65)" ? setBtnColor("rgb(3,37,65)") : setBtnColor("rgb(3,37,65)")
              btnColor1 === "white" ? setBtnColor1("white") : setBtnColor1("white")
              ishla1()
            }} style={{ backgroundColor: btnColor }} className='click fw-bold px-3'>On TV</a>
            <a onClick={() => {
              btnColor === "rgb(3,37,65)" ? setBtnColor("white ") : setBtnColor("white")
              btnColor1 === "white" ? setBtnColor1("rgb(3,37,65)") : setBtnColor1("rgb(3,37,65)")
              ishla2()
            }} style={{ backgroundColor: btnColor1 }} className='click fw-bold px-3 ms-2'>In Theaters</a>
          </div>
        </div>
      </div>

      <Carousel infinite={true} keyBoardControl={true} responsive={responsive}>
        {
          (mass1.length > 0 && all === false) && mass1.map((item, i) => {
            return (
              <div key={i}>
                <p onClick={() => {setStart(mass1[i].dots === false ? mass1[i].dots = true : mass1[i].dots = false)}} className='dot_3'><span className='dot_3_dot'></span> <span className='dot_3_dot'></span> <span className='dot_3_dot'></span></p>
                {
                  (item.dots) && <div className='dop_star_item d-flex flex-column position-absolute mt-5 ms-5 p-3 text-start'>
                  <p onClick = {() => dispatch({type: "addd", payload:item}) && setStart(mass1[i].dots === true ? mass1[i].dots = false : mass1[i].dots = true)}> <BsFillBookmarkFill/> Watchlist</p>
                  <p onClick = {() => dispatch({type: "add", payload:item}) && setStart(mass1[i].dots === true ? mass1[i].dots = false : mass1[i].dots = true)}> <AiFillHeart/> Favorite</p>
                </div>
                }
                {
                  (item.poster_path) ? <img onClick={() => moveBy(item.id)} className='img_poster shadow' src={`${process.env.REACT_APP_IMG_KEY}${item.poster_path}`} alt={item.name} /> : <img className='img_poster shadow' src="https://semantic-ui.com/examples/assets/images/wireframe/image.png" alt="themoviedborg" />
                }
                <p className='mb-0 sircle'><p className='calso'>{item.vote_average * 10}<sup className='sup'>%</sup></p></p>
                <h6 className='w-75 ms-4 mt-4 text text-start'>{item.name}</h6>
                <p className='text-start text_dat ms-4'><span>Dat: </span>{item.first_air_date}</p>
              </div>
            )
          })
        }
      </Carousel>

      <Carousel infinite={true} keyBoardControl={true} responsive={responsive}>
        {
          (mass2.length > 0 && all) && mass2.map((item, i) => {
            return (
              <div key={i}>
                <p onClick={() => {setStart(mass2[i].dots === false ? mass2[i].dots = true : mass2[i].dots = false)}} className='dot_3'><span className='dot_3_dot'></span> <span className='dot_3_dot'></span> <span className='dot_3_dot'></span></p>
                {
                  (item.dots) && <div className='dop_star_item d-flex flex-column position-absolute mt-5 ms-5 p-3 text-start'>
                  <p onClick = {() => dispatch({type: "addd", payload:item}) && setStart(mass2[i].dots === true ? mass2[i].dots = false : mass2[i].dots = true)}> <BsFillBookmarkFill/> Watchlist</p>
                  <p onClick = {() => dispatch({type: "add", payload:item}) && setStart(mass2[i].dots === true ? mass2[i].dots = false : mass2[i].dots = true)}> <AiFillHeart/> Favorite</p>
                </div>
                }
                {
                  (item.poster_path) ? <img onClick={() => moveBy(item.id)} className='img_poster shadow' src={`${process.env.REACT_APP_IMG_KEY}${item.poster_path}`} alt={item.name} /> : <img className='img_poster shadow' src="https://semantic-ui.com/examples/assets/images/wireframe/image.png" alt="themoviedborg" />
                }
                <p className='mb-0 sircle'><span className='calso'>{item.vote_average * 10}<sup className='sup'>%</sup></span></p>
                <h6 className='w-75 ms-4 mt-4 text text-start'>{item.name}</h6>
                <p className='text-start text_dat ms-4'><span>Dat: </span>{item.first_air_date}</p>
              </div>
            )
          })
        }
      </Carousel>

      <div className='bg_latest my-2'>

        <div className='blur_list'>
          <div className="d-flex container pt-3 bg_list__start justify-content-start align-items-center">
            <h3 className='fw-bold text-white'>Latest Trailers</h3>
            <div className='border d-flex ms-3 buttons1'>
              <a onClick={() => {
                btnColor2 === "rgb(106,232,187)" ? setBtnColor2("rgb(106,232,187)") : setBtnColor2("rgb(106,232,187)")
                btnColor3 === "rgba(0, 0, 0, 0)" ? setBtnColor3("rgba(0, 0, 0, 0)") : setBtnColor3("rgba(0, 0, 0, 0)")
                ishla5()
              }} style={{ backgroundColor: btnColor2 }} className='click1 fw-bold px-3'>On TV</a>
              <a onClick={() => {
                btnColor2 === "rgb(106,232,187)" ? setBtnColor2("rgba(0, 0, 0, 0)") : setBtnColor2("rgba(0, 0, 0, 0)")
                btnColor3 === "rgba(0, 0, 0, 0)" ? setBtnColor3("rgb(106,232,187)") : setBtnColor3("rgb(106,232,187)")
                ishla6()
              }} style={{ backgroundColor: btnColor3 }} className='click1 fw-bold px-3 ms-2'>In Theaters</a>
            </div>
          </div>
          <Carousel className='my-3' infinite={true} keyBoardControl={true} responsive={responsive1}>
            {
              (mass5.length > 0 && all2 === false) && mass5.map((item, i) => {
                return (
                  <div key={i}>
                    <p className='dot_3'><span className='dot_3_dot'></span> <span className='dot_3_dot'></span> <span className='dot_3_dot'></span></p>
                    {
                      (item.backdrop_path) ? <img className='img_poster1 shadow' src={`${process.env.REACT_APP_IMG_KEY}${item.backdrop_path}`} alt={item.name} /> : <img className='img_poster1 shadow' src="https://semantic-ui.com/examples/assets/images/wireframe/image.png" alt="themoviedborg" />
                    }
                    <h6 className='mt-2 text text-center text-white '>{item.title}</h6>
                    <p className='text-start text-center text-white text_dat'><span>Data: </span>{item.release_date}</p>
                  </div>
                )
              })
            }
          </Carousel>

          <Carousel className='my-3' infinite={true} keyBoardControl={true} responsive={responsive1}>
            {
              (mass6.length > 0 && all2) && mass6.map((item, i) => {
                return (
                  <div key={i}>
                    <p className='dot_3'><span className='dot_3_dot'></span> <span className='dot_3_dot'></span> <span className='dot_3_dot'></span></p>
                    {
                      (item.backdrop_path) ? <img className='img_poster1 shadow' src={`${process.env.REACT_APP_IMG_KEY}${item.backdrop_path}`} alt={item.name} /> : <img className='img_poster1 shadow' src="https://semantic-ui.com/examples/assets/images/wireframe/image.png" alt="themoviedborg" />
                    }
                    <p className='mb-0 sircle1'><p className='calso'>{item.vote_average * 10}<sup className='sup'>%</sup></p></p>
                    <h6 className='mt-2 text text-center mt-4 text-white '>{item.title}</h6>
                    <p className='text-start text-center text-white text_dat'><span>Data: </span>{item.release_date}</p>
                  </div>
                )
              })
            }
          </Carousel>
        </div>

        <div className="section container my-4">
          <div className="d-flex justify-content-start align-items-center">
            <h3 className='fw-bold'>Trending</h3>
            <div className='border d-flex ms-3 buttons'>
              <a onClick={() => {
                btnColor4 === "rgb(3,37,65)" ? setBtnColor4("rgb(3,37,65)") : setBtnColor4("rgb(3,37,65)")
                btnColor5 === "white" ? setBtnColor5("white") : setBtnColor5("white")
                ishla3()
              }} style={{ backgroundColor: btnColor4 }} className='click fw-bold px-3'>Today</a>
              <a onClick={() => {
                btnColor4 === "rgb(3,37,65)" ? setBtnColor4("white ") : setBtnColor4("white")
                btnColor5 === "white" ? setBtnColor5("rgb(3,37,65)") : setBtnColor5("rgb(3,37,65)")
                ishla4()
              }} style={{ backgroundColor: btnColor5 }} className='click fw-bold px-3 ms-2'>This Week</a>
            </div>
          </div>


        </div>

        <Carousel className='my-3' infinite={true} keyBoardControl={true} responsive={responsive}>
          {
            (mass3.length > 0 && all1 === false) && mass3.map((item, i) => {
              return (
                <div key={i}>
                  <p onClick={() => {setStart(mass3[i].dots === false ? mass3[i].dots = true : mass3[i].dots = false)}} className='dot_3'><span className='dot_3_dot'></span> <span className='dot_3_dot'></span> <span className='dot_3_dot'></span></p>
                  {
                  (item.dots) && <div className='dop_star_item d-flex flex-column position-absolute mt-5 ms-5 p-3 text-start'>
                  <p onClick = {() => dispatch({type: "addd", payload:item}) && setStart(mass3[i].dots === true ? mass3[i].dots = false : mass3[i].dots = true)}> <BsFillBookmarkFill/> Watchlist</p>
                  <p onClick = {() => dispatch({type: "add", payload:item}) && setStart(mass3[i].dots === true ? mass3[i].dots = false : mass3[i].dots = true)}> <AiFillHeart/> Favorite</p>
                </div>
                }
                  {
                    (item.poster_path) ? <img onClick={() => moveBy(item.id)} className='img_poster shadow' src={`${process.env.REACT_APP_IMG_KEY}${item.poster_path}`} alt={item.name} /> : <img className='img_poster shadow' src="https://semantic-ui.com/examples/assets/images/wireframe/image.png" alt="themoviedborg" />
                  }
                  <p className='mb-0 sircle1'><p className='calso'>{item.vote_average * 10}<sup className='sup'>%</sup></p></p>
                  <h6 className='mt-2 text text-center mt-4'>{item.name}</h6>
                  <p className='text-start text-center text_dat'><span>Data: </span>{item.first_air_date}</p>
                </div>
              )
            })
          }
        </Carousel>

        <Carousel className='my-3' infinite={true} keyBoardControl={true} responsive={responsive}>
          {
            (mass4.length > 0 && all1) && mass4.map((item, i) => {
              return (
                <div key={i}>
                  <p onClick={() => {setStart(mass4[i].dots === false ? mass4[i].dots = true : mass4[i].dots = false)}} className='dot_3'><span className='dot_3_dot'></span> <span className='dot_3_dot'></span> <span className='dot_3_dot'></span></p>
                  {
                  (item.dots) && <div className='dop_star_item d-flex flex-column position-absolute mt-5 ms-5 p-3 text-start'>
                  <p onClick = {() => dispatch({type: "addd", payload:item}) && setStart(mass4[i].dots === true ? mass4[i].dots = false : mass4[i].dots = true)}> <BsFillBookmarkFill/> Watchlist</p>
                  <p onClick = {() => dispatch({type: "add", payload:item}) && setStart(mass4[i].dots === true ? mass4[i].dots = false : mass4[i].dots = true)}> <AiFillHeart/> Favorite</p>
                </div>
                }
                  {
                    (item.poster_path) ? <img onClick={() => moveBy(item.id)} className='img_poster shadow' src={`${process.env.REACT_APP_IMG_KEY}${item.poster_path}`} alt={item.name} /> : <img className='img_poster shadow' src="https://semantic-ui.com/examples/assets/images/wireframe/image.png" alt="themoviedborg" />
                  }
                  <p className='mb-0 sircle1'><p className='calso'>{item.vote_average * 10}<sup className='sup'>%</sup></p></p>
                  <h6 className='mt-4 text text-center'>{item.original_title}</h6>
                  <p className='text-start text-center text_dat'><span>Data: </span>{item.release_date}</p>
                </div>
              )
            })
          }
        </Carousel>

      </div>

      <Footer_top />
    </div>
  )
}
