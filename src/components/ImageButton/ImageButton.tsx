import React, { MouseEventHandler } from "react";
import "./ImageButton.scss"

type Props = {
    image: string,
    alt: string,
    clickHandler: MouseEventHandler
}

export function ImageButton({image, alt, clickHandler}: Props) {
    return (
        <button><img src={image} alt={alt} className="icon" onClick={clickHandler} /></button>
    )
}