import React from 'react'
import Link from "next/link";

export default function CityCard({city, href}) {
    return (
        <a href={href}className="col-md-4 col-sm-6" style={{
            backgroundColor: "#81b214",
            fontFamily: "Quicksand",
            textAlign: "center",
            padding: "1rem",
            color: "white",
            borderRadius: "15px",
            maxWidth: "30%",
            margin: "1.25rem"
        }}>
            <h3>{city}</h3>
            <p style={{fontFamily: "Poppins"}}>CBD à {city}</p>
        </a>
    )
}
