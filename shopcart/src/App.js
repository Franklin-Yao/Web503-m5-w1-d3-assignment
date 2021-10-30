import logo from './logo.svg';
import './App.css';
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class App extends Component{
constructor(props){
  super(props);
  this.state=[
    {
      id: 0,
      image: './products/cologne.jpg',
      desc: 'Unisex Cologne',
      value: 0
    },
    {
      id: 1,
      image: './products/iwatch.jpg',
      desc: 'Apple iWatch',
      value: 0
    },
    {
      id: 2,
      image: './products/mug.jpg',
      desc: 'Unique Mug',
      value: 0
    },
    {
      id: 3,
      image: './products/wallet.jpg',
      desc: 'Mens Wallet',
      value: 0
    }
  ]
}

  render(){
    let num_item = this.state.map(item=>item.value).reduce((res, item)=>{
      return res + item;
    })

    return (
      <div class="app-body">
        <div className="shopcart-header">
          <span id="title">Shop to React</span>
          <span id='quantity'>
          <FontAwesomeIcon icon={faShoppingCart} />
            <span> {num_item}</span> items
          </span>
        </div>
        <Item products={this.state}/>
      </div>
    );
  }
}

function Item(props) {
  return (
    <ul>
      {props.products.map((product) => (
        <li key={product.id} className="">
          <p>{product.desc}</p>
          <div>
            <img src={product.image}></img>
            <span>{product.value}</span>quantiy
          </div>
        </li>
      ))}
    </ul>
  );
}

export default App;
