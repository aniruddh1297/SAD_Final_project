import socketIO from "socket.io-client"
import './App.css';
import {BrowserRouter, BrowserRouter as Router , Route,Routes} from  "react-router-dom";  
import Join from "./Component/Join/Join";
import Chat from "./Component/Chat/Chat";

const ENDPOINT = "http://localhost:4500/"


function App() {
  

  
  return (
    <div className="App">
      <Router>
      <Routes>

        <Route path="/" element={<Join />} />
        <Route path="/Chat" element={<Chat />} />


      </Routes>
      </Router>
    </div>
  );
}

export default App;
