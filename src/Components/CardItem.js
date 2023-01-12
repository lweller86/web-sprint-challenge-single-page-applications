import React from "react";
import { Link } from "react-router-dom";


function CardItem(props) {
    return (
        <>
            <li className="card-item">
                <Link className="cards-item-link" to={props.path}>
                    <figure className="cards-item-pic-wrap" data-category={props.label}>
                        <img src={props.src} alt={props.alt}
                            className="cards-item-img" />
                    </figure>
                    <div className="cards-item-info">
                        <h5 className="card-item-text">{props.text}</h5>
                    </div>
                </Link>
            </li>
        </>

    )

}

export default CardItem