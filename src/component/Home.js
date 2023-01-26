import { useState } from "react";
import MoviesList from "./MoviesList";
import useFetch from "./useFetch";

const Home = () => {
  
    const {data,error,isPending}=useFetch('https://fakestoreapi.com/products')
    return ( 
        <div>
                {error && <div>{error}</div>}
                {isPending && <img src="icons/hourglass.png" className="refresh" alt="loading..."/> }
               {data && <MoviesList movies={data} /> }
        </div>
     );
}
 
export default Home;