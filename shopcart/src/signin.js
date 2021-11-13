import React, {useState} from "react";
import FacebookLogin from "react-facebook-login";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { Link } from "react-router-dom";

function Signin(props){
  const [login, setLogin] = useState(false);
  const [data, setData] = useState({});
  const [picture, setPicture] = useState('')

  const responseFacebook = (response)=>{
      console.log(response);
      setData(response);
      setPicture(response.picture.data.url);
      if (response.accessToken){
          setLogin(true)
      }else{
          setLogin(false)
      }
  }
  return (
    <div className="container">
        {!login &&
            <Card style={{width:'800px'}} className="mx-auto mt-5">
                <Card.Header className="pb-4">
                <h1>Sign In</h1>
                </Card.Header>
                <Card.Body>
                <Card.Text>
                    <React.Fragment>
                        <h3>Please login using one of the following</h3>
                        <LoginForm/>
                        <FacebookLogin appId="596762551567730" autoLoad={false} fields="name, email, picture" 
                        scope="public_profile,user_friends"
                        callback={responseFacebook}
                        icon="fa-facebook"   
                        />
                    </React.Fragment>
                </Card.Text>
                </Card.Body>
            </Card>
        }
        {login &&(props.totalValue>0?  <Checkout fbpic={picture} fbdata={data}/> :<EmptyCart/>)}
    </div>
  )
}

function Checkout(fbpic, fbdata){
    return (
        <Card style={{width:'800px'}} className="mx-auto mt-5">
            <Card.Header className="pb-4">
            <h1>Check out</h1>
            </Card.Header>
            <Card.Body>
            <Card.Text>
                <img src={fbpic.fbpic} alt={fbdata.name}/>
                <h3 className="d-inline text-success mx-2">
                    Welcome back {fbdata.name}
                </h3>
                <p className='my-5'>Time to check out?</p>
                <button className='btn bg-success text-white'>Continue</button>
            </Card.Text>
            </Card.Body>
        </Card>
    )
}

function EmptyCart(props){
    return (
        <React.Fragment className="mt-5">
            <h3>Your Cart items</h3>
            <p>There are 0 items in your cart</p>
            <a href='/' className='btn bg-success text-white'>Continue shopping</a>
        </React.Fragment>
    )
}

function LoginForm(){
  return(
    <form className="border mt-3 mb-5 p-3 bg-white">
      <label className="m-2">Name:</label>
      <input type="text" name="name" placeholder="Your name"/>
      <br/>
      <label className="m-2">Email:</label>
      <input type="email" name="email" placeholder="Your email"/>
      <br/>
      <input type="submit" value="Login" className="btn bg-success text-white my-3"></input>
    </form>
  )
}

export default Signin