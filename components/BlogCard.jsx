import React from 'react';
import style from "../../styles/blog.module.css";
import Link from "next/link";


export default function BlogCard({image, title, slug}) {
    return (
        <div className={style.card}>
            <Link href={slug}>
                <a className={style.link}><img src={image} alt={title}/>
                <h4 className={style.title}>{title}</h4></a>
            </Link>
        </div>
    )
}
