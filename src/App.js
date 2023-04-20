import './App.scss';
import Header from "./components/header";
import Footer from "./components/footer";
import HomeImage from "./components/Home/HomeImage";
import Pagebook from "./components/Home/Pagebook";
import Layout from "./components/Layout/Layout";
import NewBooks from "./components/Home/NewBooks";
import SwiperBooks from "./components/Home/SwiperBooks";
import UseBook from "./components/Home/UseBook/UseBook";


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
    </div>
  );
}

export default App;
