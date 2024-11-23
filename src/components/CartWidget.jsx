import { BsCart4 } from "react-icons/bs"
import { Badge } from "react-bootstrap"

const CartWidget = () => {
    
    return(
        <div>
            <Badge bg="dark">15</Badge>
            <BsCart4 fontSize={'2rem'} color="violet"/>
            
            
        </div>
    )
}
export default CartWidget