// step one import 
import { useState } from 'react'

const PersonCard = (props)=> { // step 2 component name ex. PersonCard
        const {firstName,lastName,age,hairColor} = props // step 3 variables and functions
        const [stateAge, setStateAge] = useState(age);
        const addYear = () => {
            setStateAge(stateAge + 1)
        };
        return ( // step for return 
            <div>
                <h1>{lastName},{firstName}</h1>
                <h6>Age: {stateAge}</h6>
                <h6>Hair Color: {hairColor}</h6>
                <button onClick={addYear}>Birthday Buttton for {firstName}{lastName} </button>
            </div>
        )
    }
export default PersonCard // step 5 export 
