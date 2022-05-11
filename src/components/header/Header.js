/* eslint-disable import/no-anonymous-default-export */
import React, { Component } from 'react';
import styles from './styles.scss';


// компонент выпадающий список выбора языка
const LangSelect = ({ id, options, onChange }) => {
    return (
        <select className="lang-select" id={id} onChange={onChange}>
            { options.map((option, index) =>
                <option key={id + index} value={option.id}>{option.name}</option>
            ) }
        </select>
    )
}



export default class extends Component {
	render() {
		return (
			<div className={styles.header}>
				<div className={styles.wrapper}>
					<div className={styles.logo}>
						<img src={require('@images/logo.png').default} alt={'brand'} 
						width="150px"
						height="20px"
						/>

					</div>
					<div className={styles.navbartoggler}>
						<div className={styles.siteheadertop}>
							<div className={styles.linkmenu}>
								<a href='./'><span className={styles.link}>Buy crypto</span></a>
								<a href='./'><span className={styles.link}>Business</span></a>
								<a href='./'><span className={styles.link}>Track order</span></a>
								<a href='./'><span className={styles.link}>FAQ</span></a>
								{/*<select className={styles.lang} size="3" multiple name="hero[]">
										<option value=""></option>
										<option value=""></option>
										<option value=""></option>
										<option value=""></option>
										<option value=""></option>
										<option value=""></option>
										<option value=""></option>
										<option value=""></option>
										<option value=""></option>								
								</select>*/}

							

			
								<form className={styles.searchform} role="search" method="get" action="https://loud.news/" itemProp="potentialAction" itemScope itemType="https://schema.org/SearchAction">
									<meta itemProp="target" content="https://loud.news/search/?s=" />
									<label>
										<input itemProp="query" type="search" className={styles.searchfield} placeholder="Search for: " defaultValue name="s" required />
										<span className={styles.icon} />
									</label>

								</form>

						</div>
						<div className={styles.siteheaderbottom}>
						</div>
						</div>
					</div>
				</div>
			</div>
		
		);
	}
}