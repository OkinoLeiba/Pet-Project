import { FunctionComponent } from 'react';
import styles from './adoption_resources.module.css';


const AdoptionResources:FunctionComponent = () => {
  	return (
    		<div className={styles.rectangleParent}>
      			<div className={styles.groupChild} />
      			<div className={styles.adoptionResourcesParent}>
        				<div className={styles.adoptionResources}>Adoption Resources</div>
        				<div className={styles.groupParent}>
          					<div className={styles.rectangleGroup}>
            						<div className={styles.groupItem} />
            						<div className={styles.guidelines}>Guidelines</div>
            						<img className={styles.groupInner} alt="" src="Rectangle 40.png" />
          					</div>
          					<div className={styles.rectangleContainer}>
            						<div className={styles.groupItem} />
            						<div className={styles.guidelines}>FAQ’S</div>
            						<img className={styles.groupInner} alt="" src="Rectangle 40.png" />
          					</div>
          					<div className={styles.rectangleContainer}>
            						<div className={styles.groupItem} />
            						<div className={styles.trainingResources}>Training Resources</div>
            						<img className={styles.groupInner} alt="" src="Rectangle 40.png" />
          					</div>
        				</div>
      			</div>
    		</div>);
};

export default AdoptionResources;
