import { useHistory,useParams } from "react-router-dom";
import useFetch from "./useFetch";

const MovieDetails = () => {
    const{id} =useParams();
    const {data:product}=useFetch('https://fakestoreapi.com/products/'+id);
    return ( 
        <div className="product-details">
            {product && 
            (
            <div className="product-details-d">
                <div>
                <img src={product.image} alt="product"/>
                </div>
                <div className="product-details-other">
                <h3>{product.title}</h3>
                <h1>{product.price} $</h1>
                <h2>{product.category}</h2>
                <p>{product.description}</p>
                <span className="rating">({product.rating.rate}) <span class="fas fa-star"></span> {product.rating.count} <i class="material-icons">people</i></span>
                
                </div>
            </div>
            )}
        </div>
     );
}
 
export default MovieDetails;