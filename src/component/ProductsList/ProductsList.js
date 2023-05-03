import { Link } from "react-router-dom";
import { useState } from "react";
import Footer from "../Footer/Footer";
import './ProductsList.css'
import Slider from "../Slider/Slider";
const MoviesList = ({products}) => {
    const [search,setSearch]=useState('');
    const [category,setCategory]=useState('All');
    return ( 
        <div>
{/* <Slider/> */}
     
            <div className="filter">
                <select  id="category" className="select" onChange={(e)=>setCategory(e.target.value)}>
                    <option value="All">All</option>
                    <option value="men's clothing">Men's Clothing</option>
                    <option value="women's clothing">Women's Clothing</option>
                    <option value="jewelery">Jewelery</option>
                    <option value="electronics">Electronics</option>
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
            {products.filter((item)=>{
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
                <h4 className="price">{movie.price}$</h4>
                </Link>
                </div>
            ))}
        </div>
        <Footer/>
        </div>
     );
}
 
export default MoviesList;