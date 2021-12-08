// import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './home';
import Login from './login';

function App() {

  const [state, setState] = useState([]);
  const [page, setPage] = useState(1);
  const [load, setLoad] = useState(true);

  useEffect(()=>{
    setLoad(true);
    // fetch('https://api.instantwebtools.net/v1/passenger?page=0&size=10')
    // .then(res => res.json()).then(json => {setState([...state, ...json.data]); setLoad(false)})
    // console.log("state=>",state);
  }, [page])

  // const scrollToEnd = () => {
  //   setPage(page+1);
  // }

  // window.onscroll = function(){
  //   if(
  //     window.innerHeight + document.documentElement.scrollTop 
  //     == document.documentElement.offsetHeight
  //     ){
  //     scrollToEnd()
  //   }
  // }

  return (
    <div className="App">
      {/* <div className={'login-div'}>
        <div>
          <label>Username</label>
          <input type="text" placeholder="username" className={'form-control'}/>
        </div>

        <div>
          <label>Password</label>  
          <input type="password" placeholder="Password" className={'form-control'}/>
        </div>

        <div className={'btn-dev'}>
          <button className={'btn'}>Submit</button>
        </div>
      </div> */}


      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>

      {/* <>
        {
          state.length > 0 && state.map((item, i)=>(
            <div key={i} className={'main'}>
              <div>Id:  {item._id}</div>
              <div>name:  {item.name}</div>
            </div>
          ))  
        }

        {
          load?<div className={'load'}>Loading...</div>:<></>
        }
      </> */}
      

      
    </div>
  );
}

export default App;