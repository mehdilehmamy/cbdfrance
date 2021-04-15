import style from "../../styles/region.module.css";
import CityCard from "../../components/CityCard";
import Link from "next/link";


export const getStaticPaths = async () => {
    const res = await fetch('https://geo.api.gouv.fr/departements');
    const data = await res.json();

    const paths = data.map((departement)=> {
        return {
            params: {departement: departement.code.toString(), departName: departement.nom}
        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const departement = context.params.departement;
    const res = await fetch(`https://geo.api.gouv.fr/departements/${departement}/communes`);
    const data = await res.json();
    const newData = data.slice(1, 21);

    const resName = await fetch(`https://geo.api.gouv.fr/departements/${departement}`);
    const dataName = await resName.json();
    return {
        props: {communes : newData, departName: dataName.nom},
        revalidate: 60
    }
}

export default function region({communes, departName}) {
    


    return (
        <div className={style.container}>
            <section className={style.header}>
                <h1>Acheter du CBD en {departName}</h1>
            </section>
            <section className={style.departement}>
               <div className={style.departhead}>
					<h2>Acheter du CBD à {departName}</h2>
				</div>
                <div className={style.citygrid}>
            {communes.map((commune) => {
              return <Link href={`/commune/${commune.code}`} passHref>
                        <a className={style.cardstyle}><CityCard city={commune.nom}/></a>
                     </Link>
            })}
         </div>
            </section>
        </div>
    )
}