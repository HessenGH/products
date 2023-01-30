import { Link } from "react-router-dom";
import { useState } from "react";
import './ProductsList.css'
const MoviesList = ({movies}) => {
    const [search,setSearch]=useState('');
    const [category,setCategory]=useState('All');
    return ( 
        <div>
            <div className="filter">
                <select  id="category" className="select" onChange={(e)=>setCategory(e.target.value)}>
                    <option value="All">All</option>
                    <option value="men's clothing">men's clothing</option>
                    <option value="women's clothing">women's clothing</option>
                    <option value="jewelery">jewelery</option>
                    <option value="electronics">electronics</option>
                </select>
             <input 
             className="serach"
            type="search"
            value={search}
            placeholder="search..."
            onChange={(e)=>setSearch(e.target.value)}
            />
            </div>
        <div className="movie-list">
            {movies.filter((item)=>{
                return search.toLowerCase()===''
                ? item
                :item.title.toLowerCase().includes(search);
            })
            .filter((item)=>{
                return category==='All'
                ? item
                :item.category.toLowerCase().includes(category);
            })
            .map(movie=>(
                <div  className="movie-preview"  key={movie.id}> 
                <Link to={`/movies/${movie.id}`}>
                <img src={movie.image} alt="movie" className="img-product"/>
                <h3 className="title">{movie.title}</h3>
                </Link>
                </div>
            ))}
        </div>
        </div>
     );
}
 
export default MoviesList;