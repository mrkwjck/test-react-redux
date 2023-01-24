import React from "react";
import "./Icon.scss"

type Props = {
    image: string,
    alt: string
}

export function Icon({image, alt}: Props) {
    return (
        <img src={image} alt={alt} className="icon" />
    )
}