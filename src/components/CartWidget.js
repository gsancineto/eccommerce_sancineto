import { UseCartContext } from "../context/CartContext"

export default function CartWidget(){
    const {Quantity} = UseCartContext();
    return(
        <>
        <i className="bi bi-cart-fill"/><sup> <span className="badge alert-success">{Quantity()}</span></sup>
        </>
    )
}