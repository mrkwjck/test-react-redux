import React, { useEffect, useState } from "react";
import "./Tile.scss"
import { ImageButton } from "../ImageButton";
import maximizeIcon from "../../common/images/maximize.png"
import minimizeIcon from "../../common/images/minimize.png"
import refreshIcon from "../../common/images/refresh.png"
import { Data, DataSource } from "../../infrastructure/datasource";

type Props = {
    id: string,
    title: string
    tileState: TileState,
    maximizeTileHandler: (tileKey: string) => void,
    resetTilesHandler: () => void,
    dataSource: DataSource
}

type TileDataProps = {
    data: Data[]
}

export enum TileState {
    MAXIMIZED,
    MINIMIZED,
    HIDDEN
}

function getTileGridClass(tileState: TileState): string {
    return tileState === TileState.MINIMIZED ? "col-lg-3 col-md-6 col-sm-12" : "col-12"
}

function LoadingIndicator() {
    return (
        <div className="loader" />
    )
}

function TileData({data}: TileDataProps) {
    return (
        <ul>
            {data.map(dataItem =>
                <li key={dataItem.id}>{dataItem.label}</li>
            )}
        </ul>
    )
}

export function Tile({id, title, tileState, resetTilesHandler, maximizeTileHandler, dataSource}: Props) {

    const [loadingData, setLoadingData] = useState<boolean>(false)
    const [data, setData] = useState<Data[]>([])

    useEffect(function() {
        loadData()
    }, [])

    const loadData = function() {
        setLoadingData(true)
        dataSource.getData()
            .then(data => setData(data))
            .then(() => setLoadingData(false))
    }

    const handleRefreshClick = function() {
        loadData()
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
                    {loadingData ? <LoadingIndicator /> : <TileData data={data} />}
                </div>
                <div className="controls">
                    <ImageButton image={refreshIcon} alt="Refresh" clickHandler={handleRefreshClick} />
                </div>
            </div>
        </div>
    );
}