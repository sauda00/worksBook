import './App.scss';

import Header from "./components/header";
import Footer from "./components/footer";
import HomeImage from "./components/Home/HomeImage";
import Pagebook from "./components/Home/Pagebook";
import Layout from "./components/Layout/Layout";
import NewBooks from "./components/Home/NewBooks";
import SwiperBooks from "./components/Home/SwiperBooks";
import UseBook from "./components/Home/UseBook/UseBook";


import Bookshop from "./components/Bookshop";
import YourCart from "./components/YourCart";


function App() {
  return (
    <div className="App">

        <Layout>
            <HomeImage/>
            <Pagebook/>
            <NewBooks/>
            <SwiperBooks/>
            <UseBook/>
        </Layout>

      <Bookshop/>
        <YourCart/>

    </div>
  );
}

export default App;
