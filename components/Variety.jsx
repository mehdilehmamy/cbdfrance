import React from 'react';
import style from '../styles/variety.module.css';

export default function Variety({name, price, genetic, image, link}) {
    return (
        <div className={style.varcard}>
        <a href={link} className={style.link}>
            <img src={image} alt={name}/>
            <div className={style.lowersection}>
            <h3>{name}</h3>
            <p>Génétique: {genetic}</p>
            <p>Prix moyen: à partir de {price}</p>
            </div>
            </a>
        </div>
    )
}
