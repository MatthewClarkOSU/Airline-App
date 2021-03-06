import "../styles.css";
import React, { useState } from "react";
import AirlineCard from '../components/AirlineCard'
import AllianceFilterCheckbox from '../components/AllianceFilterCheckbox'
import { airlineData } from '../data/airlineData'

export default function Home() {

    const [owChecked, setOwChecked] = useState(false)
    const [stChecked, setStChecked] = useState(false)
    const [saChecked, setSaChecked] = useState(false)

    const filterAirlines = () => {
        if (stChecked || owChecked || saChecked) {
            return airlineData.filter(airline => (
                (owChecked && airline.alliance === "OW") ||
                (stChecked && airline.alliance === "ST") ||
                (saChecked && airline.alliance === "SA")
            ))
        } else {
            return airlineData
        }
    };

    const filteredAirlines = filterAirlines()
    
    const filters = [
        { key: "OW", label: "Oneworld", value: owChecked, onValueChange: setOwChecked }, 
        { key: "ST", label: "Sky Team", value: stChecked, onValueChange: setStChecked },
        { key: "SA", label: "Star Alliance", value: saChecked, onValueChange: setSaChecked}
    ]

    // Replaced API call with JSON file


    return (
        <div className="Home">
            <div id="header">
                <h2>Airline App</h2>
        <hr />
            </div>

        <div id="content-container">

            <h1>Airlines</h1>
            <h3>Filter by Alliances</h3>

            <div className="checkboxes">
                {filters.map(filter => {
                    return (
                    <AllianceFilterCheckbox name={filter.key} key={filter.key} value={filter.value} onValueChange={filter.onValueChange} label={filter.label} />
                    )
                })}

            </div>
                <div className="card-container">
                    {filteredAirlines.map(airline => {
                    return (
                        <a target="_blank" href={airline.site}>
                        <AirlineCard airline={airline} key={airline.code} />
                        </a>
                    )
                })}
                </div>
            </div>
            <hr />
            <a href="https://www.linkedin.com/in/matt-clark-372756212/" target="_blank">
                <footer>Matt Clark - 2021</footer>
            </a>
        </div>
        
    )
}