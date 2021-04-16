import React from 'react'
import Head from "next/head"
import Navbar from "./Navbar"
import Footer from "./Footer"

export default function Layout({children}) {
    return (
        <div>
           <Head>
                <title>Livraison de CBD à domicile en France - CBD Shop France</title>
                <link rel="icon" href="/cbd.png" />
                <meta name="description" content="Découvrez les variétés CBD les plus populaires dans votre département classé d'après vos votes." />
                <meta name="keywords" content="acheter, cbd, france, cbd shop, cbd france, cannabis france, cannabidiol" />
                <meta property="og:title" content="Livraison de CBD à domicile en France - Acheter CBD" />
                <meta property="og:description" content="Découvrez les variétés CBD les plus populaires dans votre département classé d'après vos votes." />
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-GBZP6GYVPK"></script>
                <script
                  dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-GBZP6GYVPK', {
              page_path: window.location.pathname,
            });
          `,
            }}
                />
            </Head>
            <Navbar />
                {children}
            <Footer/>
        </div>
    )
}
