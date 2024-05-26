
  import '../App.css';
  import Cart from '../Components/Cart/Cart';
  import AllCategories from '../Components/Filter/AllCategories';
  import Goods from '../Components/GoodsComponents/Goods';
  
  function Home() {
    return (
      <div>
      
        <div className="container">
          <h1>We will buy everything you need for a masterpiece!!!</h1>
          <AllCategories />
          <Cart/>
        </div>
      <div className="containerTwo">
        <Goods />
      </div>
      </div>
    );
  }
  
  export default Home;