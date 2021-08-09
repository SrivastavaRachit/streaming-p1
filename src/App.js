import Action from "./components/Action";
import Adventure from "./components/Adventure";
import {BrowserRouter as Router, Redirect, Route} from 'react-router-dom';
import Home from "./components/Home";
import Header from "./components/header";
import Footer from './components/footer';

function App() {
  return (
    <div>

     
<Router>

<Header></Header> 

 <Redirect to="/home" path="/">
 </Redirect>
<Route component ={Action} path={'/Action'}></Route>
<Route component ={Adventure }  path={'/Adventure'}></Route>
<Route component ={Home }  path={'/home'}></Route>
</Router>
 

 <Footer></Footer>


    </div>
  );
}

export default App;