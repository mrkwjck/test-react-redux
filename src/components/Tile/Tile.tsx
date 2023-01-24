import React from "react";
import "./Tile.scss"
import { Icon } from "../Icon";
import maximizeIcon from "../../common/images/maximize.png"
import minimizeIcon from "../../common/images/minimize.png"
import refreshIcon from "../../common/images/refresh.png"


type Props = {
    title: string
}

export function Tile({title}: Props) {
    return (
        <div className="tile col-lg-3 col-md-6 col-sm-12">
            <div className="body">
                <div className="header">
                    {title}
                    <Icon image={maximizeIcon} alt="Maximize" />
                </div>
                <div className="content">
                    content
                </div>
                <div className="controls">
                    <Icon image={refreshIcon} alt="Refresh" />
                </div>
            </div>
        </div>
    );
}