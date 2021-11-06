export default function Cart(props){
    return (
        <div id="cart">
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