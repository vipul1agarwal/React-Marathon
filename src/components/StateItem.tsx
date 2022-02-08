import { StateItemType } from "./types"
import Card from "./UI/Card"

import './StateItem.css'

const StateItem = (props: StateItemType) => {

    console.log('hereeeee')
    console.log(props)
    return (
        <Card classes='state_item__basic' >
            {props.stateName}
        </Card>
    )
}

export default StateItem