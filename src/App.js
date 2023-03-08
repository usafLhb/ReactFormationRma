import logo from './logo.svg';
import './App.css';
import './Components/blogs/Blogs';
import User from './Components/User/User';
import Blogs from './Components/blogs/Blogs';
import Produit from './Components/Produit/Produit';
import Index from './Components/Index/Index';
import React, { useState} from 'react' 
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import ContextProvider from './Context/ContextProvider'
import Post from './Components/Produit/Post';


function App() { 
  const [home, sethome] = useState("Welcome Home");
  const [users, setusers] = useState("List users");
  const [prdt, setCount] = useState({
    nom: "Telephone",
    qte: 23,
    prix: 1200
  });
 

  return (<>
  <ContextProvider>
    <div className="App">
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Produit">About</Link>
            </li>
            <li>
              <Link to="/Blogs">Contact</Link>
            </li>
            <li>
              <Link to="/User">Users</Link>
            </li>
            <li>
              <Link to="/Post">Posts</Link>
            </li>
          </ul>
        </nav>


        <Switch>
        
          <Route exact path="/">
             <Index  home={home} />
          </Route>
        
          <Route exact path="/Produit" >
            <Produit nom={prdt.nom} qte={prdt.qte} prix={prdt.prix}/>
          </Route>

          <Route exact path="/Blogs">   
             <Blogs/> 
          </Route>

          <Route exact path="/User">   
            <User users={users}/> 
          </Route>

          <Route exact path="/Post">   
            <Post/> 
          </Route>
          
        </Switch>
      </Router>
    </div>
  </ContextProvider>
    </>
  );
}

export default App;
