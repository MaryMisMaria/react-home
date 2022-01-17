//import logo from './logo.svg';
import './App.css';
import Users from "./components/Users/Users";
import Posts from "./components/Posts/Posts";
import Comments from "./components/Comments/Comments";

function App() {
  return (
    <div className="App">
        <div className="userPost">
            <Users/>
            <Posts/>
        </div>
<div className="Comment">
    <Comments/>
</div>

   </div>
  );
}

export default App;
