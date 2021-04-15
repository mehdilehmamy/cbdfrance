import style from "../../styles/region.module.css";
import Variety from "../../components/Variety";
import fleur from "../../components/fleur.js";


export const getStaticPaths = async () => {
    const res = await fetch('https://geo.api.gouv.fr/communes');
    const data = await res.json();

    const paths = data.map((commune)=> {
        return {
            params: {commune: commune.code.toString()}
        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const commune = context.params.commune;
    const res = await fetch(`https://geo.api.gouv.fr/communes/${commune}`);
    const data = await res.json();
    return {
        props: {communes : data},
        revalidate: 60
    }
}

export default function region({communes}) {

    return (
        <div className={style.container}>
            <section className={style.header}>
                <h1>Acheter du CBD en {communes.nom}</h1>
            </section>
            <section className={style.ville}>
               <div className={style.infocontainer}>
                  <h3 style={{fontFamily: "Quicksand"}}>Cannabis CBD</h3>
                  <hr className={style.line}/>
                  <p>Le classement de ces différentes variétés CBD est fait selon les votes depuis la commune de <b>{communes.nom}.</b></p>
                  <p>La commune de {communes.nom} {communes.codesPostaux[0]} recense {communes.population} habitants en 2021.</p>
                  <p>Le CBD est une molécule présente naturellement dans le chanvre et qui a des vertus apaisante et relaxante. Les variétés de cannabis CBD présentées contiennent moins de 0,2% de THC et ne sont donc pas des plantes psychotropes.</p>
               </div>
               <div className={style.popular}>
					<h2 className={style.communeheader}>Les 6 variétés CBD les plus populaire à {communes.nom} {communes.codesPostaux[0]}</h2>
                    <div className={style.flowers}>
                        {fleur.map((fleur)=> {
                            return <Variety name={fleur.name} genetic={fleur.genetic} price={fleur.price} image={fleur.image} link={fleur.link}/>
                        })}
                    </div>
				</div>
            </section>
        </div>
    )
}
