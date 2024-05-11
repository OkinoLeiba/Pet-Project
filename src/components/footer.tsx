/**
 * footer of website
 * @return {JSX.Element}
 * @function
 */

import styles from './footer.module.css';


const Footer : React.FunctionComponent = () : JSX.Element => {
  	return (
		<div className={styles.footer}>
      			<div className={styles.footer1}>
        				<div className={styles.companyDetails}>
          					<b className={styles.adoptspot}>AdoptSpot</b>
          					<div className={styles.findYourPerfect}>{`Find your perfect pet. `}</div>
        				</div>
        				<div className={styles.listsLinksSmall}>
          					<div className={styles.company}>Company</div>
          					<div className={styles.aboutUs}>About us</div>
          					<div className={styles.aboutUs}>Find pets</div>
          					<div className={styles.aboutUs}>Contact us</div>
          					<div className={styles.aboutUs}>Frequently asked questions</div>
          					<div className={styles.aboutUs}>Terms and conditions</div>
        				</div>
        				<div className={styles.wantToSupportUsParent}>
          					<div className={styles.wantToSupport}>Want to support us?</div>
            						<div className={styles.yourMoneyWillHelpUsRescueParent}>
              							<div className={styles.yourMoneyWill}>Your money will help us rescue more pets</div>
              							<div className={styles.inputField}>
                								<div className={styles.placeholder}>
                  									<i className={styles.placeholderSmallOn}>Amount</i>
                								</div>
              							</div>
              							<div className={styles.buttonprimarysmallhoverno}>
                								<div className={styles.donate}>Donate</div>
              							</div>
            						</div>
            						</div>
            						<div className={styles.listsLinksSmall1}>
              							<div className={styles.wantToSupport}>Connect with us</div>
              							<div className={styles.socialIcons}>
                								<img className={styles.icon} alt="" src="Icon.svg" />
                								<img className={styles.icon} alt="" src="Icon.svg" />
                								<img className={styles.icon} alt="" src="Icon.svg" />
              							</div>
            						</div>
            						</div>
            						<div className={styles.copyright}>
              							<div className={styles.copyright2021Container}>
                								<span>{`Copyright 2021 - `}</span>
                								<b>AdoptSpot</b>
              							</div>
            						</div>
            						</div>);         					
	};
          					
export default Footer;
          					


