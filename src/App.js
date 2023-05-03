import './App.scss';
import HomeImage from "./components/Home/HomeImage";
import Bookshop from "./pages/Bookshop";
import YourCart from "./pages/YourCart";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {Route, Routes, useParams} from "react-router-dom";
import AllBooks from "./components/AllBooks";
import UseBook from "./components/Home/UseBook/UseBook";
import Categories from "./components/Categories";
import NewBooks from "./components/Home/NewBooks";
import {useEffect, useState} from "react";
import axios from "axios";



function App() {
    const [num, setNum] = useState(1)
    const [sum, setSum] = useState(99)
    const increment=()=>{
        setNum(num + 1)
        setSum(sum + 99)
    }
    const decrement=()=>{
        setNum(num !==1 ? num-1 : 1)
        setSum(sum !==99 ? sum-99 : 99)
    }
    const [books,setBooks] = useState({})

  return (
    <div className="App">
        <Header/>
        <Routes>
            <Route path={'/'} element={<HomeImage/>}/>
            <Route path={'/allBooks'} element={<AllBooks/>}/>
            <Route path={'/useBook'} element={<UseBook/>}/>
            <Route path={'/categories'} element={<Categories/>}/>
            <Route path={'/recent'} element={<NewBooks/>}/>
            <Route path={'/allBooks/bookShop/:booksId'} element={<Bookshop num={num} sum={sum} increment={increment} decrement={decrement} books={books} setBooks={setBooks}/>}/>
            <Route path={'/allBooks/bookShop/yourCart/:booksId'} element={<YourCart num={num} sum={sum} increment={increment} decrement={decrement} books={books} setBooks={setBooks}/>}/>
            <Route path={'/yourCart'} element={<YourCart num={num} sum={sum} increment={increment} decrement={decrement} books={books} setBooks={setBooks} />}/>
            <Route path={'/bookShop/:booksId'} element={<Bookshop/>}/>

        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
