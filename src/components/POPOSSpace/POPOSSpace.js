import React from 'react'
import'./POPOSSpace.css'
import {Link} from 'react-router-dom';


function POPOSSpace(props){
    const {
        name,
        image,
        address,
        hours,
        id
    } = props

    return(
        <div className="POPOSSpace">
            <Link to={`/details/${id}`}>
            <img src={`${process.env.PUBLIC_URL}images/${image}`} width="300" height="300" alt="hello"/>
            </Link>
                <h1>
                    <Link className="POPOSSpace-title"
                    to={`/details/${id}`}>
                    {name}
                    </Link>
                    </h1>
                    <div className="POPOSSpace-info">
                <div>{address}</div>
                <div className="hours">{hours}</div>
                </div>
        </div>
    )
}

export default POPOSSpace