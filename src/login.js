import './login.css';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

function Login() {

    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
    const history = useHistory();
    
    useEffect(()=>{
        let userN = localStorage.getItem('userName');
        if(userN){
            history.push("/home");
            // setTimeout(()=>{window.location.href='/home'},0)
        }
        console.log("userN=>",userN);
    },[])

  const handleSubmit = async e => {
    e.preventDefault();
    console.log(username,password)
    if(!username || !password){
        alert("please enter all required data (*)")
    }
    if(username && password ){
        console.log(username,password)
        if(username != "foo" && password != "bar"){
            alert("username or password is not correct")
        }
        else if(username == "foo" && password != "bar"){
            alert("username or password is not correct")
        }
        else if(username != "foo" && password == "bar"){
            alert("username or password is not correct")
        }
    }
    
    if(username == "foo" && password == "bar"){
        localStorage.setItem('userName', username);
        console.log("==l===>", localStorage.getItem('userName'))
        setTimeout(()=>{window.location.href='/home'},0)
    }
  }

  return (
    <div className="Login">
      <div className={'login-div'}>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username<span>*</span></label>
          <input type="text" placeholder="username" className={'form-control'} onChange={e => setUserName(e.target.value)}/>
        </div>

        <div>
          <label>Password<span>*</span></label>  
          <input type="password" placeholder="Password" className={'form-control'} onChange={e => setPassword(e.target.value)}/>
        </div>

        <div className={'btn-dev'}>
          <button type="submit" className={'btn'}>Submit</button>
        </div>
        </form>
      </div>
    </div>
  );
}

export default Login;