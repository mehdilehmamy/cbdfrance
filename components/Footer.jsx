import React from 'react'
import styles from '../styles/Footer.module.css'
import Link from "next/link";

export default function Footer() {
    return (
        <div>
            <div className="row"  style={{
            backgroundColor: "#1b1717",
            padding: "4rem 6rem 0 6rem",
            color: "white"
        }}>
            <div class="col-md-3 col-sm-6">
							<div class="footer-widget">
								<h3 class={styles.title}>CBD Shop</h3>
								<p>Acheter du CBD en France en découvrant le classement des variétés CBD les plus populaires par région, département et communes selon vos votes.</p>
							</div>
						</div>
						
						<div class="col-md-3 col-sm-6">
							<div class="footer-widget">
								<h3 class={styles.title}>Acheter du CBD</h3>
								<ul class={styles.list}>
									<li><Link href="/region/84" class={styles.link}>Auvergne-Rhône-Alpes</Link></li>
									<li><Link href="/region/32" class={styles.link}>Hauts-de-France</Link></li>
									<li><Link href="/region/93" class={styles.link}>Provence-Alpes-Côte d'Azur</Link></li>
									<li><Link href="/region/44" class={styles.link}>Grant-Est</Link></li>
									<li><Link href="/region/76" class={styles.link}>Occitanie</Link></li>
									<li><Link href="/region/28" class={styles.link}>Normandie</Link></li>
								</ul>
							</div>
						</div>
						
						<div class="col-md-3 col-sm-6">
							<div class="footer-widget">
								<div class="textwidget">
		
								<ul class={styles.list}>
									<li><Link href="/region/75" class={styles.link}>Nouvelle Aquitaine</Link></li>
									<li><Link href="/region/24" class={styles.link}>Centre</Link></li>
									<li><Link href="/region/94" class={styles.link}>Corse</Link></li>
									<li><Link href="/region/27" class={styles.link}>Bourgogne-Franche-Comté</Link></li>
									<li><Link href="/region/53" class={styles.link}>Bretagne</Link></li>
									<li><Link href="/region/24" class={styles.link}>Pays de la Loire</Link></li>
									<li><Link href="/region/11" class={styles.link}>Île-de-France</Link></li>
								</ul>
								</div>
							</div>
						</div>
						
						<div class="col-md-3 col-sm-6">
							<div class="footer-widget">
							<div class="textwidget">
		
								<ul class={styles.list}>
									<li><Link href="/departements-d-outre-mer" class={styles.link}>Départements d'Outre-Mer</Link></li>
									<li><Link href="/collectivites-d-outre-mer" class={styles.link}>Collectivités d'Outre-Mer</Link></li>
								</ul>
								</div>
							</div>
						</div>
                        <div class={styles.copyright}>
					<p>Copyright @ EXEMPLE.com 2021 <Link href="#" title="Acheter du CBD" style={{color: "#81b214"}}>CBD France</Link></p>
				</div>
					</div>
            </div>
    )
}
