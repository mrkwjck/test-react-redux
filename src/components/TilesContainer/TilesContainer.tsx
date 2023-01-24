import React from "react";
import { Tile } from "../Tile";

export function TilesContainer() {
    return (
        <div className="tiles-container container-fluid p-0">
            <div className="row m-0">
                <Tile title="Weather" />
                <Tile title="Stock" />
                <Tile title="News" />
                <Tile title="Currencies" />
            </div>
        </div>
    );
}