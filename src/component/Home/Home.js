import ProductsList from "../ProductsList/ProductsList";
import useFetch from "../useFetch";
import './Home.css'
const Home = () => {
  
    const {data,error,isPending}=useFetch('https://fakestoreapi.com/products')
    return ( 
        <div>
                {error && <div>{error}</div>}
                {isPending && <img src="icons/hourglass.png" className="refresh" alt="loading..."/> }
               {data && <ProductsList movies={data} /> }
        </div>
     );
}
 
export default Home;