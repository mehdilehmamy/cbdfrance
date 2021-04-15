import React from 'react'
import styles from '../styles/Footer.module.css'
import Link from "next/link";

export default function Footer() {
    return (
        <div>
            <div className="row footer">
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
									<li><Link href="/region/84" ><a class={styles.link}>Auvergne-Rhône-Alpes</a></Link></li>
									<li><Link href="/region/32" ><a class={styles.link}>Hauts-de-France</a></Link></li>
									<li><Link href="/region/93" ><a class={styles.link}>Provence-Alpes-Côte d'Azur</a></Link></li>
									<li><Link href="/region/44" ><a class={styles.link}>Grant-Est</a></Link></li>
									<li><Link href="/region/76" ><a class={styles.link}>Occitanie</a></Link></li>
									<li><Link href="/region/28" ><a class={styles.link}>Normandie</a></Link></li>
								</ul>
							</div>
						</div>
						
						<div class="col-md-3 col-sm-6">
							<div class="footer-widget">
								<div class="textwidget">
		
								<ul class={styles.list}>
									<li><Link href="/region/75" ><a class={styles.link}>Nouvelle Aquitaine</a></Link></li>
									<li><Link href="/region/24" ><a class={styles.link}>Centre</a></Link></li>
									<li><Link href="/region/94" ><a class={styles.link}>Corse</a></Link></li>
									<li><Link href="/region/27" ><a class={styles.link}>Bourgogne-Franche-Comté</a></Link></li>
									<li><Link href="/region/53" ><a class={styles.link}>Bretagne</a></Link></li>
									<li><Link href="/region/24" ><a class={styles.link}>Pays de la Loire</a></Link></li>
									<li><Link href="/region/11" ><a class={styles.link}>Île-de-France</a></Link></li>
								</ul>
								</div>
							</div>
						</div>
						
						<div class="col-md-3 col-sm-6">
							<div class="footer-widget">
							<div class="textwidget">
		
								<ul class={styles.list}>
									<li><Link href="/departements-d-outre-mer" ><a class={styles.link}>Départements d'Outre-Mer</a></Link></li>
									<li><Link href="/collectivites-d-outre-mer" ><a class={styles.link}>Collectivités d'Outre-Mer</a></Link></li>
								</ul>
								</div>
							</div>
						</div>
                        <div class={styles.copyright}>
					<p>Copyright @ acheterducbd.com 2021 <a href="#" title="Acheter du CBD" style={{color: "#81b214"}}>CBD France</a></p>
				</div>
					</div>
            </div>
    )
}
