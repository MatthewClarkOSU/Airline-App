import React, { useState } from "react";
import "../styles.css"

const AirlineCard = ({ airline }) => {

    const [isShown, setIsShown] = useState(false);

    const alliances = [
        { code: "OW", displayName: "Oneworld" },
        { code: "ST", displayName: "Sky Team"  },
        { code: "SA", displayName: "Star Alliance" }
    ]

    const getAllianceName = (code) => {
        const alliance = alliances.find(alliance => 
            alliance.code === code)
            return alliance?.displayName??code
    }

    const cleanURL = (site) => {
        const cleanSite = site.replace(/^(?:https?:\/\/)?(?:www\.)?/i, "")
        return cleanSite
    }

    return (
            <div className="card" 
                onMouseEnter={() => setIsShown(true)}
                onMouseLeave={() => setIsShown(false)}>
                    <div className="card-content">
                        <img
                            className="card-img"
                            src={`https://www.kayak.com${airline.logoURL}`} alt="logo"
                        />
                        <div className="airline-info">
                            <div className="airline-name">
                                {airline.name}
                            </div>
                            {isShown && (
                                <div className="hover-info">
                                    {airline.alliance !== "none" && (
                                    <div className="hover-alliance">
                                        {getAllianceName(airline.alliance)}
                                    </div>
                                    )}
                                    <div className="hover-phone">
                                        {airline.phone}
                                    </div>
                                    <div className="hover-site">
                                        {cleanURL(airline.site)}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
            </div>
    )
}

export default AirlineCard


