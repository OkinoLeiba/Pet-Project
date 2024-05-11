/**
 * section with filter option for search parameter 
 * @returns {JSX.Element}
 * @function
 */


import { FunctionComponent } from 'react';
import styles from '@sections/filter.module.css';


const Filter : FunctionComponent = () : JSX.Element => {
  	return (
    		<div className={styles.filtersParent}>
      		<b className={styles.filters}>Filters</b>
<div className={styles.frameParent}>
	  <div className={styles.typeOfPetsParent}>
			<div className={styles.filters}>Type of pets</div>
			<div className={styles.rectangleParent}>
				  <div className={styles.groupChild} />
				  <div className={styles.anyParent}>
						<div className={styles.any}>Any</div>
						<img className={styles.vectorIcon} alt="" src="Vector.svg" />
				  </div>
			</div>
	  </div>
	  <div className={styles.ageParent}>
			<div className={styles.filters}>Age</div>
			<div className={styles.continuous}>
				  <div className={styles.activeTrack}>
						<div className={styles.track} />
				  </div>
				  <div className={styles.handle}>
						<div className={styles.stateLayer} />
				  </div>
				  <div className={styles.inactiveTrack}>
						<div className={styles.track1} />
						<img className={styles.trackDotIcon} alt="" src="Track dot.svg" />
				  </div>
			</div>
	  </div>
	  <div className={styles.typeOfPetsParent}>
			<div className={styles.filters}>Gender</div>
			<div className={styles.rectangleParent}>
				  <div className={styles.groupChild} />
				  <div className={styles.anyParent}>
						<div className={styles.any}>Any</div>
						<img className={styles.vectorIcon} alt="" src="Vector.svg" />
				  </div>
			</div>
	  </div>
	  <div className={styles.typeOfPetsParent}>
			<div className={styles.filters}>Size</div>
			<div className={styles.rectangleParent}>
				  <div className={styles.groupChild} />
				  <div className={styles.anyParent}>
						<div className={styles.any}>Any</div>
						<img className={styles.vectorIcon} alt="" src="Vector.svg" />
				  </div>
			</div>
	  </div>
	  <div className={styles.typeOfPetsParent}>
			<div className={styles.filters}>Color</div>
			<div className={styles.rectangleParent}>
				  <div className={styles.groupChild} />
				  <div className={styles.anyParent}>
						<div className={styles.any}>Any</div>
						<img className={styles.vectorIcon} alt="" src="Vector.svg" />
				  </div>
			</div>
	  </div>
	  <div className={styles.typeOfPetsParent}>
			<div className={styles.filters}>Behavior With Other Pets</div>
			<div className={styles.rectangleParent}>
				  <div className={styles.groupChild} />
				  <div className={styles.anyParent}>
						<div className={styles.any}>Any</div>
						<img className={styles.vectorIcon} alt="" src="Vector.svg" />
				  </div>
			</div>
	  </div>
	  <div className={styles.typeOfPetsParent}>
			<div className={styles.filters}>Behavior With Kids</div>
			<div className={styles.rectangleParent}>
				  <div className={styles.groupChild} />
				  <div className={styles.anyParent}>
						<div className={styles.any}>Any</div>
						<img className={styles.vectorIcon} alt="" src="Vector.svg" />
				  </div>
			</div>
	  </div>
	  <div className={styles.typeOfPetsParent}>
			<div className={styles.filters}>Activity Level</div>
			<div className={styles.rectangleParent}>
				  <div className={styles.groupChild} />
				  <div className={styles.anyParent}>
						<div className={styles.any}>Any</div>
						<img className={styles.vectorIcon} alt="" src="Vector.svg" />
				  </div>
			</div>
	  </div>
	  <div className={styles.typeOfPetsParent}>
			<div className={styles.filters}>Additional</div>
			<div className={styles.rectangleParent}>
				  <div className={styles.groupChild} />
				  <div className={styles.anyParent}>
						<div className={styles.any}>Any</div>
						<img className={styles.vectorIcon} alt="" src="Vector.svg" />
				  </div>
			</div>
	  </div>
</div>
    		</div>);
};

export default Filter;


