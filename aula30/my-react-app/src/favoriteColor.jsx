import { useState } from 'react'

function FavoriteColor() {

    const [color, setColor] = useState("red");

    return(
        <>
            <h1>my favorite color is {color} !</h1>
            <buton type="button" onClick={() => setColor("Blue")}></buton>
        </>
        
    )
}

export default favoriteColor