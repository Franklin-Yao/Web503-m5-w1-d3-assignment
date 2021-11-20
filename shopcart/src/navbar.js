import { faShoppingCart,faRegistered } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Products from './displayProducts';
import CartList from "./cart";
import Signin from "./signin";

export default function Navbar(props){
    return(
        <Router>
            <div>
                <div className="shopcart-header">
                    <Link to="/">
                        {/* <span id="title">Shop 2 React</span> */}
                        <span id="title" className="navbar-left mx-4 my-4">Shop 2 {< FontAwesomeIcon icon={faRegistered} />}eact</span>
                    </Link>
                    <span id='quantity'>
                        <Link to="/cart">
                            <FontAwesomeIcon icon={faShoppingCart} id="shopcart_icon"/>
                        </Link>
                        <span> {props.quantity}</span> items
                    </span>
                </div>
            </div>
            {
                <Switch>
                    <Route exact path="/">
                        <Products sort={props.sort} product_data={props.productData} addQuantity={props.addQuantity} subtractQuantity={props.subtractQuantity}/>
                    </Route>
                    <Route exact path="/cart">
                        <CartList lists = {props.productData}/>
                        <Link to="/signin" className="btn bg-primary text-white">Check out</Link>
                    </Route>
                    <Route path="/signin">
                        <Signin totalValue={props.quantity}/>
                    </Route>
                </Switch>
            }
        </Router>
    )
  }