import { FunctionComponent } from 'react';
import styles from './pawfect.module.css';


const PawFect:FunctionComponent = () => {
  	return (
    		<div className={styles.groupParent}>
      			<div className={styles.rectangleWrapper}>
        				<div className={styles.groupChild} />
      			</div>
      			<div className={styles.groupContainer}>
        				<img className={styles.frameChild} alt="" src="Group 52.svg" />
        				<div className={styles.frameParent}>
          					<div className={styles.findYourPawfectMatchParent}>
            						<div className={styles.findYourPawfect}>Find Your Pawfect Match</div>
            						<div className={styles.createProfileParent}>
              							<div className={styles.createProfile}>
                								<ol className={styles.selectMustHaves}>
                  									<li>Create Profile</li>
                								</ol>
              							</div>
              							<div className={styles.createProfile}>
                								<ol className={styles.selectMustHaves}>
                  									<li>Select “Must Haves “</li>
                								</ol>
              							</div>
              							<div className={styles.browsePetsContainer}>
                								<ol className={styles.selectMustHaves}>
                  									<li>{`Browse Pets & Submit Application`}</li>
                								</ol>
              							</div>
              							<div className={styles.createProfile}>
                								<ol className={styles.selectMustHaves}>
                  									<li>{`Meet your companion `}</li>
                								</ol>
              							</div>
            						</div>
          					</div>
          					<div className={styles.button}>
            						<div className={styles.stateLayer}>
              							<div className={styles.labelText}>GET STARTED</div>
            						</div>
          					</div>
        				</div>
      			</div>
    		</div>);
};

export default PawFect;
