import React, { useEffect, useState } from 'react'
import "./Banner.css"
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
import axios from '../axios'
import { API_KEY, imgUrl } from '../constants/constant'


function banner() {
    const [movie, setMovie] = useState()
    useEffect(() => {
        axios.get(`/trending/all/day?api_key=${API_KEY}`).then((response) => {
            // console.log(response.data.results[0], `${imgUrl}${response.data.results[0].poster_path}`);
            setMovie(response.data.results[0])
        })
    }, [])
    return (
        <div className='image' style={{ backgroundImage: `url(${movie ? imgUrl + movie.backdrop_path : ""})` }}>
            <div className='bgdark'>
                <div className="left">
                    <h1>{movie ? movie.title : ""}</h1>
                    <h2 className="sub-heading">
                        from {movie ? movie.release_date : ""}
                    </h2>
                    <p className="para">{movie ? movie.overview : ""} </p>
                    <div className="btn-group">
                        <button className='btn active'><PlayArrowIcon className="icon" /> Play</button>
                        <button className='btn'><AddIcon /> Add to playList</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default banner