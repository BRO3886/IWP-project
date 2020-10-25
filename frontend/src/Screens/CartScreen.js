import React,{useEffect} from "react";
function CartScreen(props){
    const productId=props.match.param.id;
    const qty=props.location.search? Number(props.location.search.split("=")[1]):1;
    const dispatch=useDispatch;
    useEffect(() => {
        if(productId){
            dispatch(addToCart(productId,qty));
    
        }
    },[])

    return <div>
        Cart Screen 
    </div>
}

export default CartScreen;