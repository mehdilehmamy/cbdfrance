import styles from '../styles/Home.module.css'
import CityCard from "../components/CityCard"
import PersonPinIcon from '@material-ui/icons/PersonPin'
import HowToVoteIcon from '@material-ui/icons/HowToVote'
import PersonIcon from '@material-ui/icons/Person'
import StarBorderIcon from '@material-ui/icons/StarBorder'
import ReorderIcon from '@material-ui/icons/Reorder'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon'

export default function Home() {
  const cities = ['Paris', 'Marseille', 'Lyon', 'Toulouse', 'Nice', 'Nantes', 'Montpellier', 'Strasbourg', 'Bordeaux', 'Lille', 'Rennes', 'Clermont'];
 
  return (
    <div className={styles.container}>
      <section className={styles.header}>
        <h1>Acheter du CBD en France</h1>
        <h3>Découvrez les villes et régions avec les variétés de CBD les mieux notées</h3>
      </section>
      <section className={styles.features}>
        <div className="row">
					<div className="col-md-12">
						<div className={styles.featureHeading}>
							<h2>Découvrez Et Votez Pour Votre Variété Préférée</h2>
							<p>Notre plateforme resence les différentes variétés de cannabis CBD et vous permet de trouver les variétés CBD les mieux classées d'après les votes de votre commune.</p>
						</div>
					</div>
				</div>
        <div className="row">
          <div className="col-md-4 col-sm-12">
					  	<div className={styles.featurebox}>
              <div className={styles.featureIcon}><PersonPinIcon fontSize="large"/></div>
							  <h4>Choisissez votre ville</h4>
							  <p>Sélectionnez la Région et le département de votre ville en bas de page.</p>
						  </div>
					</div>
          <div className="col-md-4 col-sm-12">
					  	<div className={styles.featurebox}>
              <div className={styles.featureIcon}><HowToVoteIcon fontSize="large"/></div>
						  
							  <h4>Trouvez les meilleures variétés</h4>
							  <p>Les meilleures variétées sont classées selon vos votes, vous pouvez voir le classement dans votre commune, ou directement de votre département.</p>
						  </div>
					</div>
          <div className="col-md-4 col-sm-12">
					  	<div className={styles.featurebox}>
                <div className={styles.featureIcon}><PersonIcon fontSize="large"/></div>
						  	
							  <h4>Connectez-vous pour voter</h4>
							  <p>Créez votre compte et connectez-vous pour participer au classement des variétés CBD.</p>
						  </div>
					</div>
        </div>
      </section>
      <section className={styles.cities}>
         <div className={styles.cityHeading}>
						<h2>Acheter Du CBD Dans Votre Ville En France</h2>
						<p>Trouvez les différentes variétés ainsi que les CBD Shop disponible dans les plus grandes villes de France.</p>
				 </div>
         <div className="row">
            {cities.map((city) => {
              return <CityCard city={city}/>
            })}
         </div>
      </section>
      <section className={styles.stats}>
        <div className="row">
        <div className="col-md-3 col-sm-12">
					  	<div className={styles.featurebox}>
              <div className={styles.statIcon}><StarBorderIcon fontSize="large"/></div>
							  <h4>1200+</h4>
							  <p>Variétés différentes</p>
						  </div>
					</div>
          <div className="col-md-3 col-sm-12">
					  	<div className={styles.featurebox}>
              <div className={styles.statIcon}><ReorderIcon fontSize="large"/></div>
							  <h4>25000+</h4>
							  <p>Votes</p>
						  </div>
					</div>
          <div className="col-md-3 col-sm-12">
					  	<div className={styles.featurebox}>
              <div className={styles.statIcon}><InsertEmoticonIcon fontSize="large"/></div>
							  <h4>1800+</h4>
							  <p>Utilisateurs actifs</p>
						  </div>
					</div>
          <div className="col-md-3 col-sm-12">
					  	<div className={styles.featurebox}>
              <div className={styles.statIcon}><PersonPinIcon fontSize="large"/></div>
							  <h4>30000+</h4>
							  <p>Communes</p>
						  </div>
					</div>
        </div>
      </section>
    </div>
  )
}
