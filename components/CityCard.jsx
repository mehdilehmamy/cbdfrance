import React from 'react'


export default function CityCard({city}) {
    return (
        <div>
            <h3>{city}</h3>
            <p style={{fontFamily: "Poppins"}}>CBD à {city}</p>
        </div>
    )
}
