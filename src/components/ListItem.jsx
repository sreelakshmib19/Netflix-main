import React from "react";
import "./ListItem.css";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { Add } from "@mui/icons-material";
import { API_KEY, baseUrl, imgUrl } from "../constants/constant";
import axios from "axios";


function ListItem({ movie, smallCard, setMovieUrl }) {
    const fetchTrailer = () => {
        axios.get(`${baseUrl}/movie/${movie.id}/videos?api_key=${API_KEY}`).then((response) => {
            console.log(response.data.results)
            setMovieUrl(response.data.results[0])
        })
    }

    return (
        <div className={smallCard ? 'listItem small' : "listItem"} style={{ background: `url(${imgUrl + movie.backdrop_path})`, backgroundSize: 'cover' }} >
            <div className="icon-group">
                {movie.title}
                <div className="icons">
                    <PlayArrowIcon className="icon" onClick={fetchTrailer} />
                    <Add className="icon" />
                </div>
            </div>
        </div >
    )
}

export default ListItem