import React from "react";
import { useSelector } from 'react-redux'

const ColorPanel = (props) => {
    const color = useSelector((state) => state.palette.color)

    return (
        <div className="colorBlock" style={{backgroundColor: color}}></div>
    )
}

export default ColorPanel 