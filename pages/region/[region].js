import style from "../../styles/region.module.css";
import CityCard from "../../components/CityCard";
import Link from "next/link";


export const getStaticPaths = async () => {
    const res = await fetch('https://geo.api.gouv.fr/regions');
    const data = await res.json();

    const paths = data.map((region)=> {
        return {
            params: {region: region.code.toString(), regionName: region.nom}
        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const region = context.params.region;
    const res = await fetch(`https://geo.api.gouv.fr/regions/${region}/departements`);
    const data = await res.json();

    const resName = await fetch(`https://geo.api.gouv.fr/regions/${region}`);
    const dataName = await resName.json();
    return {
        props: {departments : data, regionName: dataName.nom}
    }
}

export default function region({departments, regionName}) {
    


    return (
        <div className={style.container}>
            <section className={style.header}>
                <h1>Acheter du CBD en {regionName}</h1>
            </section>
            <section className={style.departement}>
               <div className={style.departhead}>
					<h2>Acheter du CBD dans les départements de {regionName}</h2>
				</div>
                <div className={style.citygrid}>
            {departments.map((department) => {
              return  <Link href={`/departement/${department.code}`} passHref>
                        <a className={style.cardstyle}><CityCard city={department.nom}/></a>
                     </Link>
            })}
         </div>
            </section>
        </div>
    )
}
