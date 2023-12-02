import React from "react";
import './Wether.css'


const Wether = (props) => {
    const { temprature, city, country, humadity, description, error } = props
    return (
        <ul>
{
    temprature && <li>temprature: {temprature}</li>
}
{
    city && <li>city: {city}</li>
}
{
    country && <li>country: {country}</li>
}
{
    humadity && <li>humadity: {humadity}</li>
}
{
    description && <li>description: {description}</li>
}
{
    error && <li className="error"> {error}</li>
}

        </ul>
    )
}

export default Wether


