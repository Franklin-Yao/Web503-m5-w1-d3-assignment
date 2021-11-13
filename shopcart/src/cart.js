import { Link, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Signin from "./signin";

function CartList(props){
    return(
        <div>
            <h4>Your Cart Items</h4>
            <ul>
                {props.lists.map((product) => (
                
                <li key={product.id} className="">
                    <p>{product.desc}</p>
                    <div>
                        <img src={product.image}></img>
                        <span>{product.value}</span>quantity
                    </div>
                </li>
                ))}
            </ul>
        </div>
    )
}
export default function Cart(props){
    return (
        <Router>
            {
                <Switch>
                    <Route exact path="/cart">
                        <CartList lists={props.lists}/>
                        <Link to="/signin" className="btn bg-primary text-white">
                            Check out
                        </Link>
                    </Route>
                    <Route path="/signin">
                        <Signin totalValue={props.totalValue}/>
                    </Route>
                </Switch>
            }
        </Router>
    )
}