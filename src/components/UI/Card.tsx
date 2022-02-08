import { CardType } from "../types"

import './Card.css'
const Card = (props: CardType) => {
    return (
        <div className={`card-container__basic ${props.classes}`} >
            {props.children}
        </div>
    )
}

export default Card