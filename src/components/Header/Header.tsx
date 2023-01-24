import React from "react";
import "./Header.scss"

type Props = {
    label: string
}

export function Header({label}: Props) {
    return (
        <header>{label}</header>
    );
}