import React from 'react'
import Keys from './Keys.js'
import Octave from './Octave'
// import './Piano.css'

export default function Piano(props){
    return (
        <div class="piano">
            {props.children}
        </div>
    )
}

// export default Piano;