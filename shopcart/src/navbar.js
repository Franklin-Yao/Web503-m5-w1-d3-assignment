import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Products from './displayProducts';
import Cart from "./cart";

export default function Navbar(props){
    return(
        <Router>
            <div className="shopcart-header">
                <Link to="/">
                    <span id="title">Shop 2 React</span>
                </Link>
                <span id='quantity'>
                <Link to="/cart">
                    <FontAwesomeIcon icon={faShoppingCart} id="shopcart_icon"/>
                </Link>
                <span> {props.quantity}</span> items
                </span>
            </div>
            {
                <Switch>
                    <Route exact path="/">
                        <Products product_data={props.productData} addQuantity={props.addQuantity} subtractQuantity={props.subtractQuantity}/>
                    </Route>
                    <Route path="/cart">
                        <Cart lists = {props.productData}/>
                    </Route>
            </Switch>
            }
        </Router>
    )
  }