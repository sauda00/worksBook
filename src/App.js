import './App.scss';
import HomeImage from "./components/Home/HomeImage";
import Bookshop from "./pages/Bookshop";
import YourCart from "./pages/YourCart";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {Route, Routes} from "react-router-dom";
import AllBooks from "./components/AllBooks";
import UseBook from "./components/Home/UseBook/UseBook";
import Categories from "./components/Categories";
import NewBooks from "./components/Home/NewBooks";

function App() {
  return (
    <div className="App">
        <Header/>
        <Routes>
            <Route path={'/'} element={<HomeImage/>}/>
            <Route path={'/allBooks'} element={<AllBooks/>}/>
            <Route path={'/useBook'} element={<UseBook/>}/>
            <Route path={'/categories'} element={<Categories/>}/>
            <Route path={'/recent'} element={<NewBooks/>}/>
            <Route path={'/allBooks/bookShop'} element={<Bookshop/>}/>
            <Route path={'/allBooks/bookShop/yourCart'} element={<YourCart/>}/>
            <Route path={'/yourCart'} element={<YourCart/>}/>
            <Route path={'/bookShop'} element={<Bookshop/>}/>
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
