import './App.scss';
import Bookshop from "./components/Bookshop";
import YourCart from "./components/YourCart";

function App() {
  return (
    <div className="App">
      <Bookshop/>
        <YourCart/>
    </div>
  );
}

export default App;
