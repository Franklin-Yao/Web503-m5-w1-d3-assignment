import logo from './logo.svg';
import './App.css';
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { productData } from './product';
import Navbar from './navbar';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      productData:productData,
      quantity: productData.map(item=>item.value).reduce((res, item)=>{
        return res + item;
      })
    }
  }

  addQuantity = (id)=>{
    if (this.state.productData[id].value === 100)
      return
    this.state.productData[id].value += 1
    this.setState({productData: this.state.productData})
    this.setState({quantity: this.state.quantity+1})
    console.log(this.state.quantity);
  }

  subtractQuantity = (id)=>{
    if (this.state.productData[id].value === 0)
      return
    this.state.productData[id].value -= 1
    this.setState({productData: this.state.productData})
    this.setState({quantity: this.state.quantity-1})
    console.log(this.state.quantity);
  }

  sort = (e)=>{
    let value = e.target.value;
    switch(value){
      case 'normal':
        this.state.productData.sort((a,b)=>{
          return a.id-b.id;
        })
        break;
      case 'lowest':
        this.state.productData.sort((a,b)=>{
          return a.price-b.price;
        })
        break;
      default:
        this.state.productData.sort((a,b)=>{
          return b.price-a.price;
        })
    }
    this.setState({productData: this.state.productData})
  }

  render(){
    return (
      <div className="app-body">
        <Navbar sort={this.sort} quantity={this.state.quantity} productData={this.state.productData} addQuantity={this.addQuantity} subtractQuantity={this.subtractQuantity}/>
      </div>
    );
  }
}

export default App;
