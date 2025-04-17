import React from "react";
const MoviesList = ({movies})=>{
    return(
        <>
        <h2>Movie List</h2>
        <ul>
            {movies.map((movie, index)=>(
               <li key = {index}>{movie}</li>))}
           
        </ul>
        </>
    );
};
const Movie = () => {
    const movies = [
        "Inception","Interstellar"
    ]

    return(
        <>
        <h1>Movies  Collection</h1>
        <MoviesList movies = {movies}/>
        </>
    )
}
export default Movie;

