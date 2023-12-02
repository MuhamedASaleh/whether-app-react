import React from "react";
import './Form.css'


const Form = (props) => {
const {getWether} = props

    return (
        <form onSubmit={getWether}>
            <input type="text" name="city" placeholder="City ..." />
            <input type="text" name="country" placeholder="Country ..." />
            <button>Get Wether</button>
        </form>
    )
}

export default Form


