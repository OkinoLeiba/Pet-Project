import { FunctionComponent } from 'react';
import styles from './perfect_companion.module.css';


const PerfectCompanion:FunctionComponent = () => {
  	return (
    		<div className={styles.rectangleParent}>
      			<div className={styles.groupChild} />
      			<div className={styles.frameParent}>
        				<div className={styles.groupParent}>
          					<div className={styles.findYourPerfectCompanionParent}>
            						<div className={styles.findYourPerfectContainer}>
              							<p className={styles.findYour}>{`Find Your `}</p>
              							<p className={styles.findYour}>Perfect Companion</p>
            						</div>
            						<div className={styles.discoverYourNew}>Discover your new best friend among our loving pets waiting for a forever home.</div>
          					</div>
          					<div className={styles.searchBarParent}>
            						<div className={styles.searchBar}>
              							<div className={styles.stateLayer}>
                								<div className={styles.leadingIcon} />
                								<div className={styles.content}>
                  									<div className={styles.supportingText}>{`Search a pet `}</div>
                								</div>
              							</div>
              							<div className={styles.stateLayer1}>
                								<div className={styles.leadingIcon} />
                								<div className={styles.content1}>
                  									<div className={styles.supportingText}>Location</div>
                								</div>
                								<div className={styles.trailingElements}>
                  									<div className={styles.stTrailingIcon}>
                    										<div className={styles.container}>
                      											<div className={styles.stateLayer2}>
                        												<img className={styles.icon} alt="" src="Icon.svg" />
                      											</div>
                    										</div>
                  									</div>
                								</div>
              							</div>
            						</div>
            						<div className={styles.tags}>
              							<div className={styles.tag}>
                								<b className={styles.cats}>Cats</b>
              							</div>
              							<div className={styles.tag}>
                								<b className={styles.cats}>Dogs</b>
              							</div>
              							<div className={styles.tag}>
                								<b className={styles.cats}>Birds</b>
              							</div>
              							<div className={styles.tag}>
                								<b className={styles.cats}>Exotics</b>
              							</div>
              							<div className={styles.tag}>
                								<b className={styles.cats}>Fish</b>
              							</div>
              							<div className={styles.tag}>
                								<b className={styles.cats}>Other</b>
              							</div>
            						</div>
          					</div>
        				</div>
        				<img className={styles.mediaIcon} alt="" src="Media.png" />
      			</div>
    		</div>);
};

export default PerfectCompanion;
