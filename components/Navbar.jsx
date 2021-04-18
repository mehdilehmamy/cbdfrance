import React from 'react';
import style from "../styles/navbar.module.css"
import SpaIcon from '@material-ui/icons/Spa';
import Link from "next/link";

export default function Navbar() {
    return (
        <nav className={style.navy}>
          <a className="navbar-brand navimage" href="/" style={{color: "black", fontFamily: "Quicksand"}}><SpaIcon /> CBD France</a>
          <Link href="/blog">
            <a className={style.navlink}>Blog</a>
          </Link>
      </nav>
    )
}
