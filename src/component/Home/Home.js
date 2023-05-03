import Loading from "../Loading/Loading";
import ProductsList from "../ProductsList/ProductsList";
import useFetch from "../useFetch";
import './Home.css'
const Home = () => {
  
    const {data,error,isPending}=useFetch('https://fakestoreapi.com/products')
    return ( 
        <div className="home">
                {error && <div>{error}</div>}
                {isPending && <Loading/>}
               {data &&
                <ProductsList products={data} />
                }
        </div>
     );
}
 
export default Home;