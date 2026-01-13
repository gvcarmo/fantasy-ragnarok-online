import './InfosWoe.css'

export const InfosWoe = () => {
    return (
        <div className="infos-woe">
            <div className="ranks">
                <div className="woe-rank">
                    <img className="woe-title" src="./titles/woe.png" alt="WOE" />
                    <div className="flags">
                        <img src="./woe-flag.png" alt="WOE Flag" />
                        <img src="./woe-flag.png" alt="WOE Flag" />
                        <img src="./woe-flag.png" alt="WOE Flag" />
                        <img src="./woe-flag.png" alt="WOE Flag" />
                        <img src="./woe-flag.png" alt="WOE Flag" />
                        <img src="./woe-flag.png" alt="WOE Flag" />
                    </div>
                </div>
                <div className="pvp-rank">
                    <img className="pvp-title" src="./titles/pvp.png" alt="PVP Ranking" />
                    <img className="pvp-infos" src="./ranking-pvp-infos.png" alt="PVP Ranking Infos " />
                </div>
            </div>
        </div>
    )
}