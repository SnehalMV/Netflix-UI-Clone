export const baseURL ='https://api.themoviedb.org/3'
export const API_KEY = '9a51203737599a32e12d4d17ee1e6d76' 
export const imageURL = 'https://image.tmdb.org/t/p/original'
export const action = `/discover/movie?api_key=${API_KEY}&with_genres=28`
export const originals = `/discover/tv?api_key=${API_KEY}&with_networks=213`
export const horror = `/discover/movie?api_key=${API_KEY}&with_genres=27`
export const trending = `/trending/all/week?api_key=${API_KEY}&language=en-US`