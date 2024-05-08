import { FunctionComponent } from 'react';
import styles from './navbar.module.css';


const Navbar:FunctionComponent = () => {
  	return (
    		<div className={styles.navbarContainer}>
      			<div className={styles.logoWhitePawsParent}>
        				<img className={styles.logoWhitePaws} alt="" src="Logo - white paws.svg" />
        				<div className={styles.searchBar}>
          					<div className={styles.stateLayer}>
            						<div className={styles.content}>
              							<div className={styles.supportingText}>Hinted search text</div>
            						</div>
            						<div className={styles.trailingElements}>
              							<div className={styles.stTrailingIcon}>
                								<div className={styles.container}>
                  									<div className={styles.stateLayer1}>
                    										<img className={styles.icon} alt="" src="Icon.svg" />
                  									</div>
                								</div>
              							</div>
            						</div>
          					</div>
        				</div>
        				<div className={styles.actions}>
          					<div className={styles.links}>
            						<div className={styles.home}>Home</div>
            						<div className={styles.home}>Adoption</div>
            						<div className={styles.home}>Stories</div>
            						<div className={styles.home}>Blog</div>
          					</div>
        				</div>
        				<div className={styles.actions1}>
          					<img className={styles.icons} alt="" src="Icons.svg" />
          					<div className={styles.links1}>
            						<div className={styles.home}>Login</div>
          					</div>
          					<div className={styles.button}>
            						<div className={styles.stateLayer2}>
              							<img className={styles.icon1} alt="" src="icon.svg" />
              							<div className={styles.labelText}>Adopt</div>
            						</div>
          					</div>
        				</div>
      			</div>
    		</div>);
};

export default Navbar;
