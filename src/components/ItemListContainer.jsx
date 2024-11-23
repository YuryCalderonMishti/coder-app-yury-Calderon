import { Button } from "react-bootstrap"

const ItemListContainer =(props) =>{
    const {greeting, texto} = props
    return(
        <div>
            <h1>{greeting}</h1> 
            <p>{texto}</p>
            <Button variant="primary">Primary</Button>
        </div>
        
    )
}
export default ItemListContainer