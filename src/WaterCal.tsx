import { useState } from 'react'

const [weight, setWeight] = useState(0)

function WaterCal(weight=0) {
    return(
        setWeight(weight*2.2*30/2)
    )
}

export default WaterCal