import React, { useState } from "react";
import { Tile, TileState } from "../Tile";
import { NewsDataSource } from "../../infrastructure/datasource/NewsDataSource";
import { WeatherDataSource } from "../../infrastructure/datasource/WeatherDataSource";
import { StockDataSource } from "../../infrastructure/datasource/StockDataSource";
import { CurrenciesDataSource } from "../../infrastructure/datasource/CurrenciesDataSource";

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

    const tilesConfig = [
        {id: "weather", dataSource: new WeatherDataSource()},
        {id: "stock", dataSource: new StockDataSource()},
        {id: "news", dataSource: new NewsDataSource()},
        {id: "currencies", dataSource: new CurrenciesDataSource()}
    ]

    return (
        <div className="tiles-container container-fluid p-0">
            <div className="row m-0">
                {tilesConfig.map(tileConfig =>
                    <Tile key={tileConfig.id}
                          id={tileConfig.id}
                          title={tileConfig.id}
                          tileState={getTileState(tileConfig.id)}
                          maximizeTileHandler={maximizeTile}
                          resetTilesHandler={resetTiles}
                          dataSource={tileConfig.dataSource}
                    />
                )}
            </div>
        </div>
    );
}