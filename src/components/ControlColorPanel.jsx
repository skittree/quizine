import React from "react";
import { useDispatch } from "react-redux"
import { changeColor } from "../redux/colorSlice"

const ControlColorPanel = (props) => {
    const { setColor } = props
    const dispatch = useDispatch()

    return (
        <div>
            <button onClick={() => dispatch(changeColor("red"))}>Red</button>
            <button onClick={() => dispatch(changeColor("green"))}>Green</button>
            <button onClick={() => dispatch(changeColor("blue"))}>Blue</button>
        </div>
    )
}

export default ControlColorPanel 