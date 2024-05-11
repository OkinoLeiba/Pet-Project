import { FunctionComponent } from 'react';
import styles from './PetCard.module.css';


const PetCard:FunctionComponent = () => {
  	return (
    		<div className={styles.imageCard}>
      			<img className={styles.mediaIcon} alt="" src="Media.png" />
      			<div className={styles.imageCardInner}>
        				<img className={styles.frameChild} alt="" src="Rectangle 5.svg" />
      			</div>
      			<div className={styles.cardContent}>
        				<div className={styles.supportingText}>Luna is a gentle and affectionate Labrador Retriever with a heart as big as her floppy ears and bright smile that cheers you up.</div>
        				<div className={styles.frameParent}>
          					<div className={styles.titleParent}>
            						<div className={styles.title}>Title:</div>
            						<div className={styles.subhead}>Context</div>
          					</div>
          					<div className={styles.titleParent}>
            						<div className={styles.title}>Title:</div>
            						<div className={styles.subhead}>Context</div>
          					</div>
          					<div className={styles.titleParent}>
            						<div className={styles.title}>Title:</div>
            						<div className={styles.subhead}>Context</div>
          					</div>
        				</div>
        				<div className={styles.groupDiv}>
          					<div className={styles.title3}>Milly</div>
          					<img className={styles.icons} alt="" src="Icons.svg" />
        				</div>
      			</div>
    		</div>);
};

export default PetCard;
