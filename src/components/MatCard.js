import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import Image from './Image';
import { cap } from '../util';

const MatCard = ({ data, characters = [], weapons = [] }) => {
	const renderCharacters = () => {
		const inner = characters.map((charaName) => {
			return (
				<span className="h-8 mr-1" key={charaName}>
					<Image name={charaName}></Image>
				</span>
			);
		});
		return <div className="flex flex-row flex-wrap">{inner}</div>;
	};
	const renderWeapons = () => {
		return weapons.map((name) => {
			const inner = <div className="text-xs">{cap(name)}</div>;
			return <div key={name}>{inner}</div>;
		});
	};

	const cns = cn({
		'py-4 px-8 flex flex-row cursor-pointer transition-all hover:bg-gray-600': true,
	});

	return (
		<div className={cns}>
			<div className="h-16 w-16 mr-4 flex-shrink-0">
				<Image name={data.name}></Image>
			</div>
			<div className="flex flex-col">
				<h4>{data.name.toUpperCase()}</h4>
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
