//onChange - uzywany z elementami formularza

import React, {useState} from "react";

function MyComponent(){
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [comment,setComment] = useState("");
    const [payment,setPayment] = useState("");
    const [shipping,setShipping] = useState("");

    function handleNameChange(event){
        setName(event.target.value);
    }

    function handleQuantityChange(event){
        setQuantity(event.target.value);
    }

    function handleCommentChange(event){
        setComment(event.target.value);
    }

    function handleSelectionChange(event){
        setPayment(event.target.value);
    }

    function handleShippingChange(event){
        setShipping(event.target.value);
    }

    return(
        <div>
            <input value={name} onChange={handleNameChange}/>
            <p>Name {name}</p>

            <input  value={quantity} onChange={handleQuantityChange} type="number" />
            <p>Quantity {quantity}</p>

            <textarea value={comment} onChange={handleCommentChange} placeholder="wprowadz cos"></textarea>
            <p>Komentarz {comment}</p>

            <select value={payment} onChange={handleSelectionChange}>
                <option value="">Select an option</option>
                <option value="przelew">przelew</option>
                <option value="blik">blik</option>
                <option value="visa">visa</option>
            </select>
            <p>opcja {payment}</p>

            <label>
                <input type="radio" value="pick up" checked={shipping === "pick up"} onChange={handleShippingChange}/>
                pick up
            </label>
            <br>
            </br>
            <label>
                <input type="radio" value="delivery" checked={shipping === "delivery"} onChange={handleShippingChange}/>
                delivery
            </label>
            <p>dostawa {shipping}</p>
        </div>
    );
}

export default MyComponent