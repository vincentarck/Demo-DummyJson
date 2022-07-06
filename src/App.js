// import SimpleInput from './components/SimpleInput';
import Posts from "./components/Posts";
import "./App.css"
import Products from "./components/Products";
import Users from "./components/Users";
function App() {
  return (
    <div className="app">
      <h1>Groceries Posts</h1>
      <div className="container">
      <Posts />
      <Products />
      <Users />
      </div>
    </div>
  );
}

export default App;
