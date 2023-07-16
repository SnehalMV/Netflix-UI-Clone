import React, { useEffect, useState } from 'react'
import './RowPost.css'
import axios from '../../axios'
import { API_KEY, imageURL } from '../../constants'
import Youtube from 'react-youtube'


function RowPost(props) {
    const handleURL = (id) => {
        axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
            if(response.data.results.length!==0)
            {
                setMovieId(response.data.results[0])
            }else{
                console.log('Not Available');
            }
            
        })

      }

    const opts = {
        height: '450',
        width: '100%',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    };

    const [movies, setMovies] = useState([])
    const [movieId, setMovieId] = useState('')
    useEffect(() => {
        axios.get(props.url).then((response) => {
            setMovies(response?.data?.results)
        });
    })
    return (
        <div className='row'>
            <h2>{props.title}</h2>
            <div className='posters'>
                {movies?.map((movie) =>
                    <img className={props.isSmall ? 'smallPoster' : 'poster'} src={`${imageURL + movie?.backdrop_path}`} alt='poster' onClick={() => handleURL(movie?.id)} />)}

            </div>
                {movieId ? <Youtube className="videoPlayer" videoId={movieId?.key} opts={opts} /> : <></>}
        </div>
    )
}

export default RowPost