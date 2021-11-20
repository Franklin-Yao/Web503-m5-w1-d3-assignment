import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Dropdown, Modal } from "react-bootstrap";
import { useButtonProps } from "@restart/ui/esm/Button";

export default function Products(props) {
    const [show, setShow] = useState(false);
    const [showImge, setShowImge] = useState({});

    const handleClose = ()=>setShow(false);
    const handleShow = (product)=>{
        setShow(true);
        setShowImge(product);
    };
    return (
        <div>
            <div id="sort-menu">
            <label for="cars">Sort Price By:  </label>
                <select name="cars" id="cars" onChange={props.sort}>
                    <option value="normal">Normal</option>
                    <option value="lowest">Lowest</option>
                    <option value="highest">Highest</option>
                </select>
            </div>
            <ul>
            {props.product_data.map((product) => (
            
            <li key={product.id} className="">
                <p>{product.desc} <span>${product.price}</span></p>
                <div>
                    <img src={product.image} onClick={()=>handleShow(product)}></img>
                    <FontAwesomeIcon
                        icon={faPlus}
                        className="icon"
                        onClick={
                            ()=>props.addQuantity(product.id)
                        }
                    />
                    <FontAwesomeIcon
                        icon={faMinus}
                        className="icon"
                        onClick={()=>props.subtractQuantity(product.id)}
                    />
                    <span>{product.value}</span>quantity
                </div>
            </li>
            ))}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{showImge.desc}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img src={showImge.image} width="350" alt={showImge.desc} className="mx-5"/>
                    <p>
                        <span className="text-dark">Ratings:</span>{showImge.ratings}/5
                    </p>
                </Modal.Body>
            </Modal>
        </ul>
        </div>
    );
  }