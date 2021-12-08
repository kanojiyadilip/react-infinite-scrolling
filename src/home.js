// import logo from './logo.svg';
import './home.css';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

function Home() {

  const [state, setState] = useState([]);
  const [page, setPage] = useState(1);
  const [load, setLoad] = useState(true);
  const [userName, setUserName] = useState();
  const history = useHistory();

  useEffect(()=>{
    let userN = localStorage.getItem('userName');
    if(!userN){
        history.push("/");
    }
    console.log("userN=>",userN);
  },[])
  useEffect(()=>{
    setLoad(true);
    fetch('https://api.instantwebtools.net/v1/passenger?page=0&size=10')
    .then(res => res.json()).then(json => {setState([...state, ...json.data]); setLoad(false)})
    console.log("state=>",state);
  }, [page])

  const scrollToEnd = () => {
    setPage(page+1);
  }

  window.onscroll = function(){
    if(
      window.innerHeight + document.documentElement.scrollTop 
      == document.documentElement.offsetHeight
      ){
      scrollToEnd()
    }
  }

  return (
    <div className="Home">
        <div className={"nav"}>
            <button className={"btn"}  onClick={()=>{
                localStorage.removeItem('userName');
                history.push("/");
            }} >LogOut</button>
        </div>
      <div className={"list"}>
        {
          state.length > 0 && state.map((item, i)=>(
            <div key={i} className={'main'}>
                <img src={item.airline[0].logo} className={"uimg"} />
                <div><p>Name:  {item.name}</p></div>
            </div>
          ))  
        }

        {
          load?<div className={'load'}>Loading...</div>:<></>
        }
      </div>

      
    </div>
  );
}

export default Home;