import './App.scss';


import HomeImage from "./components/Home/HomeImage";
import Pagebook from "./components/Home/Pagebook";
import NewBooks from "./components/Home/NewBooks";
import SwiperBooks from "./components/Home/SwiperBooks";
import UseBook from "./components/Home/UseBook/UseBook";

 
import Bookshop from "./components/Bookshop";
import YourCart from "./components/YourCart";
import Header from "./components/Header";
import Footer from "./components/footer";
import AllBooks from "./components/AllBooks";


function App() {
  return (
    <div className="App">
        {/*<Route path={'/'} element={<Header/>}/>*/}

        <Header/>
            <HomeImage/>
        <AllBooks/>
        <Pagebook/>
            <NewBooks/>
            <SwiperBooks/>
            <UseBook/>
        <Footer/>
      <Bookshop/>
        <YourCart/>

    </div>
  );
}

export default App;
