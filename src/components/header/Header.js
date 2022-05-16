/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import './header.css';
// import { Symbol1 } from '../lang/lang';

// компонент выпадающий список выбора языка
// const LangSelect = ({ id, options, onChange }) => {
//     return (
//         <select className="lang-select" id={id} onChange={onChange}>
//             { options.map((option, index) =>
//                 <option key={id + index} value={option.id}>{option.name}</option>
//             ) }
//         </select>
//     )
// }



export const MyHeader = () => {

	return (
		<div className="header">
			<div className="wrapper">
				<div className="logo">
					{/* <img src='../logo.png'
						width="150px"
						height="20px"
					/> */}

				</div>
				<div className="navbartoggler">
					<div className="siteheadertop">
						<div className="linkmenu">
							<a href='./'><span className="link">Buy crypto</span></a>
							<a href='./'><span className="link">Business</span></a>
							<a href='./'><span className="link">Track order</span></a>
							<a href='./'><span className="link">FAQ</span></a>
							{/* <select className="lang" size="3" multiple name="hero[]">
								<option value="1"></option>
								<option value="2"></option>
								<option value="3"></option>
								<option value=""></option>
								<option value=""></option>
								<option value=""></option>
								<option value=""></option>
								<option value=""></option>
								<option value=""></option>
							</select> */}
							{/* <Symbol1 /> */}




							<form className="searchform" role="search" method="get" action="https://loud.news/" itemProp="potentialAction" itemScope itemType="https://schema.org/SearchAction">
								<meta itemProp="target" content="https://loud.news/search/?s=" />
								<label>
									<input itemProp="query" type="search" className="searchfield" placeholder="Search for: " defaultValue name="s" required />
									<span className="icon" />
								</label>

							</form>

						</div>
					</div>
				</div>
			</div>
		</div>

	);
}
