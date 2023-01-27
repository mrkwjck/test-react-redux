import React, { useState } from "react";
import { Tile, TileState } from "../Tile";

export function TilesContainer() {

    const [maximizedTile, setMaximizedTile] = useState<string | null>(null)

    const maximizeTile = function(tileId: string) {
        setMaximizedTile(tileId)
    }

    const resetTiles = function() {
        setMaximizedTile(null)
    }

    const getTileState = function(tileId: string): TileState {
        if (maximizedTile) {
            return tileId === maximizedTile ? TileState.MAXIMIZED : TileState.HIDDEN
        }
        return TileState.MINIMIZED;
    }

    const tilesIds = ["weather", "stock", "news", "currencies"]

    return (
        <div className="tiles-container container-fluid p-0">
            <div className="row m-0">
                {tilesIds.map(tileId =>
                    <Tile key={tileId}
                          id={tileId}
                          title={tileId}
                          tileState={getTileState(tileId)}
                          maximizeTileHandler={maximizeTile}
                          resetTilesHandler={resetTiles}
                    />
                )}
            </div>
        </div>
    );
}