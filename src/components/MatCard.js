import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import Image from './Image';
import { cap } from '../util';

const MatCard = ({ data, characters = [], weapons = [] }) => {
	const renderCharacters = () => {
		const inner = characters.map((charaName) => {
			return (
				<span className="h-8" key={charaName}>
					<Image name={charaName}></Image>
				</span>
			);
		});
		return <div className="flex flex-row flex-wrap">{inner}</div>;
	};
	const renderWeapons = () => {
		return weapons.map((name) => {
			const inner = (
				<li className="text-xs tracking-wide">{cap(name)}</li>
			);
			return (
				<ul className="ml-4 list-disc font-mont" key={name}>
					{inner}
				</ul>
			);
		});
	};

	const cns = cn({
		'py-5 px-8 flex flex-row cursor-pointer transition-all hover:bg-gray-700': true,
	});

	return (
		<div className={cns}>
			<div className="h-16 w-16 mr-4 flex-shrink-0">
				<Image name={data.name}></Image>
			</div>
			<div className="flex flex-col flex-grow">
				<h3>{data.name.toUpperCase()}</h3>
				{renderCharacters()}
				{renderWeapons()}
			</div>
		</div>
	);
};
MatCard.propTypes = {
	data: PropTypes.object.isRequired,
	characters: PropTypes.array,
	weapons: PropTypes.array,
};

export default MatCard;
