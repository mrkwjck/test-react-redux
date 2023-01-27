import React, { useState } from "react";
import "./Tile.scss"
import { ImageButton } from "../ImageButton";
import maximizeIcon from "../../common/images/maximize.png"
import minimizeIcon from "../../common/images/minimize.png"
import refreshIcon from "../../common/images/refresh.png"

type Props = {
    id: string,
    title: string
    tileState: TileState,
    maximizeTileHandler: (tileKey: string) => void,
    resetTilesHandler: () => void
}

export enum TileState {
    MAXIMIZED,
    MINIMIZED,
    HIDDEN
}

function getTileGridClass(tileState: TileState): string {
    return tileState === TileState.MINIMIZED ? "col-lg-3 col-md-6 col-sm-12" : "col-12"
}

export function Tile({id, title, tileState, resetTilesHandler, maximizeTileHandler}: Props) {

    const [loadingData, setLoadingData] = useState(false)

    const handleRefreshClick = function() {
        //TODO
    }

    const handleMinimizeClick = function() {
        resetTilesHandler()
    }

    const handleMaximizeClick = function () {
        maximizeTileHandler(id)
    }

    return tileState === TileState.HIDDEN ? null : (
        <div className={"tile " + getTileGridClass(tileState)}>
            <div className="body">
                <div className="header">
                    {title}
                    {tileState === TileState.MINIMIZED ?
                        <ImageButton image={maximizeIcon} alt="Maximize" clickHandler={handleMaximizeClick}/> :
                        <ImageButton image={minimizeIcon} alt="Minimize" clickHandler={handleMinimizeClick}/>
                    }
                </div>
                <div className="content">
                    test
                </div>
                <div className="controls">
                    <ImageButton image={refreshIcon} alt="Refresh" clickHandler={handleRefreshClick} />
                </div>
            </div>
        </div>
    );
}