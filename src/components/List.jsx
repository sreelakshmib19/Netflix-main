import React, { useEffect, useState } from 'react'
import './List.css'
import ListItem from './ListItem'
import axios from "../axios"
import YouTube from 'react-youtube';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';



function List({ title, url, smallCard }) {
    const [movies, setMovie] = useState([]);
    const [movieUrl, setMovieUrl] = useState(false)



    const handleClose = () => {
        setMovieUrl(false);
    };
    useEffect(() => {
        axios.get(url).then((response) => {
            // console.log(response.data.results[0], `${imgUrl}${response.data.results[0].poster_path}`);
            setMovie(response.data.results);
            console.log(response.data.results)
        })
    }, [])
    const opts = {
        height: '390',
        width: '850',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    };
    return (
        <div className='row'>
            <h2>{title}</h2>
            <div className='posters'>
                {
                    movies.map((singleMovie) => {
                        // console.log(singleMovie)
                        return (
                            <ListItem movie={singleMovie} smallCard={smallCard} setMovieUrl={setMovieUrl} />
                        )
                    })
                }
            </div>
            {
                movieUrl &&
                <Dialog
                    PaperProps={{
                        style: {
                            backgroundColor: '#0b0b0b'
                        }
                    }}
                    open={movieUrl}
                    fullWidth={true}
                    maxWidth="md"
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">
                        <h2 style={{ color: "white" }}>{movieUrl.name}</h2>
                    </DialogTitle>
                    <DialogContent>
                        <YouTube videoId={movieUrl.key} opts={opts} />
                    </DialogContent>

                </Dialog>

            }
        </div>
    )
}

export default List
